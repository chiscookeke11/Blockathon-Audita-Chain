import React, { useState, useCallback } from "react";
import { FaFlag } from "react-icons/fa";
import "../../index.css"
import { TransactionButton } from "thirdweb/react";
import { getContract, prepareContractCall } from "thirdweb";
import { liskSepolia } from "../../liskSepolia";
import { client } from "../../client";

const SubmitContract = () => {
  const [address, setAddress] = useState("");
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
    } else {
      setError("Please provide a contract address");
    }
    setIsLoading(false);
  };

  const auditContract = useCallback((sourceCode) => {
    const results = [];

    if (
      sourceCode.includes("call.value(") &&
      !sourceCode.includes("transfer(")
    ) {
      results.push({
        type: "warning",
        message:
          "Potential reentrancy vulnerability detected. Consider using transfer() instead of call.value().",
      });
    }

    if (sourceCode.includes("tx.origin")) {
      results.push({
        type: "warning",
        message:
          "Use of tx.origin detected. This can be insecure, consider using msg.sender instead.",
      });
    }

    if (sourceCode.includes("for (") || sourceCode.includes("while (")) {
      results.push({
        type: "info",
        message:
          "Loops detected. Ensure they are bounded to prevent potential DOS attacks.",
      });
    }

    if (!sourceCode.includes("require(")) {
      results.push({
        type: "warning",
        message:
          "No require() statements found. Consider adding input validation.",
      });
    }

    if (sourceCode.includes("assert(")) {
      results.push({
        type: "info",
        message:
          "Use of assert() detected. Ensure it's used correctly for invariants.",
      });
    }

    return results;
  }, []);

  return (
    <div className=" flex items-center justify-center p-8 w-full overflow-scroll h-[100vh] pb-24">
      <div className="">
        <h2 className="mt-12 text-white text-center text-3xl font-extrabold ">
          Smart Contract Auditor
        </h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input
            type="text"
            className="rounded-md shadow-sm w-full px-3 py-2 border border-slate-300 placeholder-slate-500 text-white bg-slate-900"
            placeholder="Enter contract address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {error && <div className="text-red-600">{error}</div>}
          <textarea
            readOnly
            className="rounded-md shadow-sm w-full px-3 py-2 border border-slate-300 placeholder-slate-500 bg-slate-800 text-white"
            placeholder="Contract source code will be displayed here"
            rows={10}
            value={contractData?.source_code || ""}
          />

<TransactionButton 
          unstyled
 className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          onClick={() => console.log("sending transaction")}
          transaction={() => {
            // Create a transaction object without params for the symbol() function
            const tx = prepareContractCall({
              contract,
              method: "function name() public view returns (string memory)",
            });
            return tx;
          }}
          onTransactionSent={(result) => {
            console.log("Transaction submitted", result.transactionHash);
          }}
          onTransactionConfirmed={(receipt) => {
            console.log("Transaction confirmed", receipt.transactionHash);
          }}
          onError={(error) => {
            console.error("Transaction error", error);
          }}
        >
          Audit Contract
        </TransactionButton>
          {/* <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            disabled={isLoading}>
            {isLoading ? "Loading..." : "Audit Contract"}
          </button> */}




         
        </form>
      

        <button className="flag-btn"><FaFlag /> Query</button>


        {auditResults && auditResults.length > 0 && (
          <div className="mt-8 bg-slate-900 shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium text-gray-300">
                Audit Results
              </h3>
            </div>
            <ul className="divide-y divide-slate-200">
              {auditResults.map((result, index) => (
                <li key={index} className="px-4 py-4">
                  <div
                    className={`flex items-center ${result.type === "warning"
                      ? "text-yellow-600"
                      : "text-blue-600"
                      }`}>
                    <span className="text-sm">{result.message}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubmitContract;
