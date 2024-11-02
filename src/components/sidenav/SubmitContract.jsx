import React, { useState, useCallback } from "react";
import {
  FaFlag,
  FaExclamationTriangle,
  FaInfoCircle,
  FaCheckCircle,
} from "react-icons/fa";
import "../../index.css";
import { TransactionButton } from "thirdweb/react";
import { getContract, prepareContractCall } from "thirdweb";
import { liskSepolia } from "../../liskSepolia";
import { client } from "../../client";

const SubmitContract = () => {
  const [address, setAddress] = useState("");
  const [sourceCode, setSourceCode] = useState("");
  const [contractData, setContractData] = useState(null);
  const [auditResults, setAuditResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const contract = getContract({
    client,
    address: "0x221723C7E47738A741B0Be08FFD240E0D2f2e483",
    chain: liskSepolia,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setContractData(null);
    setAuditResults(null);

    if (address) {
      try {
        const response = await fetch(
          `https://sepolia-blockscout.lisk.com/api/v2/smart-contracts/${address}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch contract data");
        }
        const data = await response.json();
        setContractData(data);
        const results = auditContract(data.source_code);
        setAuditResults(results);
      } catch (err) {
        setError(err.message);
      }
    } else if (sourceCode.trim()) {
      // If no address but source code is provided, audit the direct input
      setContractData({ source_code: sourceCode });
      const results = auditContract(sourceCode);
      setAuditResults(results);
    } else {
      setError("Please provide either a contract address or source code");
    }
    setIsLoading(false);
  };

  const auditContract = useCallback((sourceCode) => {
    const results = [];
    const severity = {
      HIGH: "high",
      MEDIUM: "medium",
      LOW: "low",
      INFO: "info",
    };

    // Reentrancy checks
    if (
      sourceCode.includes("call.value(") ||
      sourceCode.includes("call{value:")
    ) {
      if (
        !sourceCode.includes("ReentrancyGuard") &&
        !sourceCode.includes("nonReentrant")
      ) {
        results.push({
          type: "warning",
          severity: severity.HIGH,
          message:
            "Potential reentrancy vulnerability detected. Consider using ReentrancyGuard or checks-effects-interactions pattern.",
          recommendation:
            "Implement OpenZeppelin's ReentrancyGuard or use transfer() instead of call.value()",
        });
      }
    }

    // Access control checks
    if (
      !sourceCode.includes("Ownable") &&
      !sourceCode.includes("AccessControl")
    ) {
      results.push({
        type: "warning",
        severity: severity.MEDIUM,
        message: "No standard access control detected.",
        recommendation:
          "Consider implementing OpenZeppelin's Ownable or AccessControl for better permission management",
      });
    }

    // Integer overflow/underflow checks
    if (!sourceCode.includes("SafeMath") && !sourceCode.includes("^0.8")) {
      results.push({
        type: "warning",
        severity: severity.HIGH,
        message: "No overflow/underflow protection detected.",
        recommendation:
          "Use Solidity 0.8.x or implement SafeMath library for arithmetic operations",
      });
    }

    // Timestamp dependence
    if (sourceCode.includes("block.timestamp") || sourceCode.includes("now")) {
      results.push({
        type: "info",
        severity: severity.LOW,
        message: "Usage of block.timestamp detected.",
        recommendation:
          "Ensure block.timestamp is not used for critical timing, as it can be manipulated by miners",
      });
    }

    // Unchecked external calls
    if (sourceCode.includes(".call(")) {
      results.push({
        type: "warning",
        severity: severity.MEDIUM,
        message: "Unchecked external call detected.",
        recommendation:
          "Always check return values of external calls and handle potential failures",
      });
    }

    // Private data on-chain
    if (sourceCode.includes("private")) {
      results.push({
        type: "info",
        severity: severity.LOW,
        message: "Private variables detected.",
        recommendation:
          "Remember that private variables are still visible on the blockchain",
      });
    }

    // Assembly usage
    if (sourceCode.includes("assembly")) {
      results.push({
        type: "warning",
        severity: severity.HIGH,
        message: "Assembly code detected.",
        recommendation: "Ensure assembly code is necessary and well-audited",
      });
    }

    // Delegatecall usage
    if (sourceCode.includes("delegatecall")) {
      results.push({
        type: "warning",
        severity: severity.HIGH,
        message: "Delegatecall usage detected.",
        recommendation:
          "Ensure delegatecall is necessary and target contracts are trusted",
      });
    }

    // Check for proper event emission
    if (!sourceCode.includes("emit ")) {
      results.push({
        type: "info",
        severity: severity.LOW,
        message: "No events detected.",
        recommendation: "Consider adding events for important state changes",
      });
    }

    // Gas optimization checks
    if (sourceCode.includes("for (") || sourceCode.includes("while (")) {
      results.push({
        type: "info",
        severity: severity.LOW,
        message: "Loops detected. Potential gas optimization needed.",
        recommendation:
          "Ensure loops are bounded and consider gas optimization patterns",
      });
    }

    return results;
  }, []);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "high":
        return "text-red-500";
      case "medium":
        return "text-yellow-500";
      case "low":
        return "text-blue-500";
      default:
        return "text-gray-500";
    }
  };

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case "high":
        return <FaExclamationTriangle className="mr-2" />;
      case "medium":
        return <FaExclamationTriangle className="mr-2" />;
      case "low":
        return <FaInfoCircle className="mr-2" />;
      default:
        return <FaCheckCircle className="mr-2" />;
    }
  };

  return (
    <div className="text-white py-8 overflow-y-scroll h-[100vh] pb-56">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Smart Contract Audit
        </h2>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Contract Address (Optional)
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter contract address (0x...)"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Contract Source Code
              </label>
              <textarea
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 h-64 font-mono text-sm"
                placeholder="Enter or paste contract source code here"
                value={sourceCode}
                onChange={(e) => setSourceCode(e.target.value)}
              />
            </div>

            <div className="flex gap-4">
              <TransactionButton
                unstyled
                className="flex-1 py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
                onClick={() => console.log("sending transaction")}
                transaction={() => {
                  const tx = prepareContractCall({
                    contract,
                    method:
                      "function name() public view returns (string memory)",
                  });
                  return tx;
                }}>
                Analyze Contract
              </TransactionButton>

              <button className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-500 transition-colors">
                <FaFlag className="inline-block mr-2" /> Query
              </button>
            </div>
          </form>

          {error && (
            <div className="mt-4 p-4 bg-red-900/50 border border-red-700 rounded-lg">
              {error}
            </div>
          )}

          {auditResults && auditResults.length > 0 && (
            <div className="mt-8 bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-4 bg-gray-700">
                <h3 className="text-xl font-semibold">
                  Security Analysis Results
                </h3>
              </div>

              <div className="divide-y divide-gray-700">
                {auditResults.map((result, index) => (
                  <div key={index} className="p-4">
                    <div
                      className={`flex items-start ${getSeverityColor(
                        result.severity
                      )}`}>
                      {getSeverityIcon(result.severity)}
                      <div>
                        <p className="font-medium">{result.message}</p>
                        {result.recommendation && (
                          <p className="mt-1 text-sm text-gray-400">
                            Recommendation: {result.recommendation}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-gray-700 mb-20">
                <div className="flex gap-4 text-sm">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                    <span>High Risk</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                    <span>Medium Risk</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                    <span>Low Risk</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubmitContract;
