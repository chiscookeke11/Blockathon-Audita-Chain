import { useActiveAccount, useReadContract } from "thirdweb/react";
import { liskSepolia } from "../../liskSepolia";
import { client } from "../../client";
import { getContract } from "thirdweb";
import '../../index.css'

import { prepareEvent } from "thirdweb";
import { useContractEvents } from "thirdweb/react";
export default function Token() {
  const account = useActiveAccount();
  console.log(account);
  console.log(account?.address);
  const contract = getContract({
    client,
    address: "0x221723c7e47738a741b0be08ffd240e0d2f2e483",
    chain: liskSepolia,
  });

  const { data: totalSupply, isLoading: totalSupplyLoading } = useReadContract({
    contract,
    method: "function totalSupply() view returns (uint256)",
    params: [],
  });
  console.log("tot supply", totalSupply);

  const { data: name, isPending: nameLoading } = useReadContract({
    contract,
    method: "function name() view returns (string)",
    params: [],
  });
  const { data: symbol, isPending: symbolLoading } = useReadContract({
    contract,
    method: "function symbol() view returns (string)",
    params: [],
  });
  const { data: decimal, isPending: decimalLoading } = useReadContract({
    contract,
    method: "function decimals() view returns (uint8)",
    params: [],
  });

  const { data: balance, isPending: balanceLoading } = useReadContract({
    contract,
    method: "function balanceOf(address who) view returns (uint256)",
    params: [account?.address],
  });

  const preparedEvent = prepareEvent({
    signature:
      "event Transfer(address indexed from, address indexed to, uint256 value)",
  });

  const { data: event } = useContractEvents({
    contract,
    events: [preparedEvent],
  });
  console.log(event)
  return (
    <div className=" token-box">
      <div>Total Supply: {totalSupplyLoading ? "0.000" : totalSupply}</div>
      <div>Token Name: {nameLoading ? "..." : name}</div>
      <div>Token Symbol: {symbolLoading ? "..." : symbol}</div>
      <div>Decimals: {decimalLoading ? "..." : decimal}</div>
      <div>Balance: {balanceLoading ? "..." : balance}</div>
    </div>
  );
}
