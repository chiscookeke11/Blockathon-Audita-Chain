import React from "react";

import "./header.css";
import { liskSepolia } from "../../liskSepolia";
import { client } from "../../client";

import { GiHamburgerMenu } from "react-icons/gi";
import { useActiveAccount, useWalletBalance } from "thirdweb/react";
import { useState, useEffect } from "react";
import { ConnectButton, useDisconnect, useActiveWallet } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { LogoutButton } from "./Logout";

const Header = ({ setIsOpen }) => {
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [walletAddress, setWalletAddress] = useState("");
  const account = useActiveAccount();
  const { data: balance, isLoading: loadAcc } = useWalletBalance({
    client,
    chain: liskSepolia,
    address: account?.address,
  });

  useEffect(() => {
    if (account?.address) {
      console.log("Connected wallet address:", account.address);
      setWalletAddress(account.address);
    }
  }, [account]);
  return (
    <div className="w-full py-5 px-[6%] flex justify-between text-white items-center font-bold !bg-slate-950">
      <GiHamburgerMenu
        size={30}
        className="lg:hidden"
        onClick={() => setIsOpen(true)}
      />
      <span className="current-page">
        <p>Dashboard</p>
      </span>
      <span>
        {!account ? (
          <ConnectButton
            client={client}
            chain={liskSepolia}
            wallets={[
              createWallet("io.metamask"),
              createWallet("com.coinbase.wallet"),
              createWallet("me.rainbow"),
            ]}
            onConnect={() => {
              console.log("connected successfully");
            }}
            onDisconnect={({ account }) => {
              console.log("disconnected", account.address);
            }}
            connectModal={{
              showThirdwebBranding: false,
            }}
          />
        ) : (
          <div className="flex items-center space-x-4">
            <div className="text-white px-4 py-2 bg-gray-700 rounded-lg">
              {`${account.address.slice(0, 6)}...${account.address.slice(-4)}`}
            </div>
            <LogoutButton/>
          </div>
        )}
      </span>
    </div>
  );
};

export default Header;
