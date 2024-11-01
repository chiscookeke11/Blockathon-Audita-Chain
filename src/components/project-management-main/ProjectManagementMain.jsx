import React, { useState, useEffect } from 'react';
import { image } from '../images';
import './projectManagementMain.css';
import { liskSepolia } from '../../liskSepolia';
import { client } from "../../client";
import { useActiveAccount, useWalletBalance } from "thirdweb/react";
import { ConnectButton, useDisconnect, useActiveWallet } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { LogoutButton } from '../header/Logout';
import { useNavigate } from 'react-router-dom';

const ProjectManagementMain = () => {
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
    const navigate = useNavigate();

    useEffect(() => {
        if (account?.address) {
            console.log("Connected wallet address:", account.address);
            setWalletAddress(account.address);
        }
    }, [account]);

    const handleSignUp = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const username = event.target.username.value;
        const terms = event.target.terms.checked;

        if (!terms) {
            alert("Please agree to the terms of service, privacy policy, and user agreement.");
            return;
        }

        const formData = { email, username, terms, walletAddress: account.address };
        console.log("Form Data:", formData);

        navigate('/app');
    };

    return (
        <div className='ProjectManagementMain'>
            <div className="text">
                <h1>Project Management</h1>
            </div>
            <div className="center">
                <div className="left-side">
                    <img src={image.banner_img} alt="" />
                    <p>
                        <span>Unlock transparency and trust for your project</span><br />
                        Are you tired of unclear project tracking and manual auditing processes?,
                        By registering your project with Auditablock Dapp you will gain unparalled benefits
                        Immutable blockchain record-keeping
                        real time tracking and automated auditing
                        enhanced transparency and trust
                        improved collaboration and reduced costs
                        Join the Auditablock community and experience secure project management
                        Register your project now!!!
                        Learn more about Auditablock dapp
                    </p>
                </div>
                <div className="right-side">
                    <form onSubmit={handleSignUp}>
                        <span className='heading'>
                            <h1>Register for a Project Account</h1>
                            <p>Register your project account to get started with our services</p>
                        </span>
                        <div className="form-main">
                            <div className="email-address">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" required id='email' name="email" />
                            </div>
                            <div className="login-details">
                                <span className="username">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" id='username' name="username" required />
                                </span>
                            </div>
                            {!account ? (
                                <div className='text-center'>
                                    <ConnectButton
                                        client={client}
                                        chain={liskSepolia}
                                        connectButton={{
                                            label: "Proceed to Sign Up",
                                        }}
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
                                </div>
                            ) : (
                                <div className="flex items-center space-x-4">
                                    <div className="text-white px-4 py-2 bg-gray-700 rounded-lg">
                                        {`${account.address.slice(0, 8)}...${account.address.slice(-4)}`}
                                    </div>
                                    <LogoutButton />
                                </div>
                            )}
                            {account && (
                                <>
                                    <div className="checkbox">
                                        <input type="checkbox" name="terms" id="terms" />
                                        <label htmlFor="terms">I hereby agree to terms of service, privacy policy, and user agreement</label>
                                    </div>
                                    <div className="button-holder">
                                        <button type="submit">Complete Sign Up</button>
                                    </div>
                                </>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProjectManagementMain;
