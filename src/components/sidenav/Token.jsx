import { useActiveAccount, useReadContract } from "thirdweb/react";
import { liskSepolia } from "../../liskSepolia";
import { client } from "../../client";
import { getContract } from "thirdweb";
import { formatUnits } from "ethers";
import "../../index.css";

export default function Token() {
  const account = useActiveAccount();

  const contract = getContract({
    client,
    address: "0x221723c7e47738a741b0be08ffd240e0d2f2e483",
    chain: liskSepolia,
  });

  const { data: totalSupply, isLoading: totalSupplyLoading } = useReadContract({
    contract,
    method: "function totalSupply() view returns (uint256)",
  });

  const { data: name, isPending: nameLoading } = useReadContract({
    contract,
    method: "function name() view returns (string)",
  });

  const { data: symbol, isPending: symbolLoading } = useReadContract({
    contract,
    method: "function symbol() view returns (string)",
  });

  const { data: decimals, isPending: decimalsLoading } = useReadContract({
    contract,
    method: "function decimals() view returns (uint8)",
  });

  const { data: balance, isPending: balanceLoading } = useReadContract({
    contract,
    method: "function balanceOf(address who) view returns (uint256)",
    params: [account?.address],
  });

  const formattedTotalSupply =
    totalSupply && decimals
      ? Number(formatUnits(totalSupply.toString(), decimals)).toLocaleString()
      : "Loading...";

  const formattedBalance =
    balance && decimals
      ? Number(formatUnits(balance.toString(), decimals)).toLocaleString()
      : "0.0";

  const tokenInfo = [
    {
      label: "Token Name",
      value: nameLoading ? "Loading..." : name,
    },
    {
      label: "Symbol",
      value: symbolLoading ? "Loading..." : symbol,
    },
    {
      label: "Decimals",
      value: decimalsLoading ? "Loading..." : decimals,
    },
    {
      label: "Total Supply",
      value: totalSupplyLoading
        ? "Loading..."
        : `${formattedTotalSupply} ${symbol || ""}`,
    },
  ];

  const InfoRow = ({ label, value }) => (
    <div className="flex items-center py-3 px-4 border-b border-gray-700 hover:bg-gray-800">
      <div className="w-1/3 text-gray-400">{label}</div>
      <div className="w-2/3 font-medium">{value}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">
            Token {nameLoading ? "Loading..." : name} (
            {symbolLoading ? "..." : symbol})
          </h1>
          <p className="text-gray-400 break-all">
            Contract: 0x221723c7e47738a741b0be08ffd240e0d2f2e483
          </p>
        </div>

        {/* Overview Card */}
        <div className="bg-gray-800 rounded-lg shadow-lg mb-6">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-lg font-semibold">Overview</h2>
          </div>

          {tokenInfo.map((info, index) => (
            <InfoRow key={index} label={info.label} value={info.value} />
          ))}
        </div>

        {/* Balance Card */}
        {account && (
          <div className="bg-gray-800 rounded-lg shadow-lg">
            <div className="p-4 border-b border-gray-700">
              <h2 className="text-lg font-semibold">Your Token Balance</h2>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">
                  {balanceLoading ? "0.0" : formattedBalance}
                </span>
                <span className="text-gray-400">
                  {symbolLoading ? "..." : symbol}
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Connected Address: {account.address}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
