import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar as Nb, Container, Nav, Image, Button
} from 'react-bootstrap';
import { ethers } from "ethers";
import CuteLegends from '../../abi/CuteLegendsClub.json';

const CONTRACT_ADDRESS = "0xdad6bdd249dccb47e77f61a1e52d54dbb9b99003";

const initData = {
    heading: "WELCOME TO THE CUTE LEGENDS CLUB",
    btn_1: "Connet Wallet",
    btn_2: "Mint NFT",
    btn_3: "Minting now...",
    heroImg: "/assets/img/hero-banner-circle.png",
}

function shortenAddress(address, chars = 4) {
    return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}

function Hero() {
    const [data, setData] = useState({});
    const [amount, setAmount] = useState(1);
    const [isconnected, setIsConnected] = useState(false);
    const [currentAccount, setCurrentAccount] = useState("");
    const [mintedCount, setMintedCount] = useState(0);
    const [mintLoading, setMintLoading] = useState(false);
    const [showWarning, setShowWarning] = useState(false);

    useEffect(() => {

        setData(initData);
        checkIfWalletIsConnected();

    }, []);

    const checkIfWalletIsConnected = async () => {
        const { ethereum } = window;

        if (!ethereum) {
            alert("Make sure you have metamask!");
        } else {
            const isEthChain = checkNetwork();

            if (isEthChain) {
                connectWallet();
            }
        }
    }

    const checkNetwork = async () => {
        try {
            const { ethereum } = window;
            let chainId = await ethereum.request({ method: 'eth_chainId' });

            // const ethChainId = "0x1"; // ethereum main net
            const ethChainId = "0x4"; // Rinkeby test net
            if (chainId.toLowerCase() !== ethChainId.toLowerCase()) {
                alert("You are not connected to the Rinkeby Ethereum Network! Please change to Ropsten Ethereum Network.");

                return false;
            } else {
                return true;
            }
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    const connectWallet = async () => {
        try {
            const { ethereum } = window;

            if (!ethereum) {
                alert("You should install MetaMask!");
            } else {
                const isEthChain = await checkNetwork();
                if (isEthChain) {
                    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

                    setCurrentAccount(accounts[0]);
                    getMintedCount();
                    setIsConnected(true);
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    const disconnectWallet = async () => {
        setIsConnected(false);
    }

    const getMintedCount = async () => {
        try {
            const { ethereum } = window;

            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, CuteLegends, signer);

            let tokenId = await connectedContract.getTokenID();
            console.log("============= token ID ==============", tokenId);
            setMintedCount(parseInt(tokenId._hex.toString(16), 16));  // convert hex to decimal
        } catch (error) {
            console.log("getMintedCount", error);
        }
    }

    const changeAmount = (e) => {
        setAmount(e.target.value);
    }

    const mintNFT = async () => {
        if (amount > 0 && amount <= 20) {
            setShowWarning(false);
            const isEthChain = await checkNetwork();

            if (isEthChain) {
                try {
                    setMintLoading(true);
                    const { ethereum } = window;

                    const provider = new ethers.providers.Web3Provider(ethereum);
                    const signer = provider.getSigner();
                    const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, CuteLegends, signer);

                    const balance = await signer.getBalance();
                    const ethBalance = ethers.utils.formatEther(balance.toString());

                    console.log("Going to pop wallet now to pay gas...")

                    let nftTxn = '';
                    if (mintedCount <= 1000) {
                        if (parseInt(ethBalance) >= 0 * amount) {
                            nftTxn = await connectedContract.mintForPresale(currentAccount, amount); // 0
                        }
                        else {
                            alert('Insufficient funds!');
                            setMintLoading(false);
                            return;
                        }
                    } else if (mintedCount > 1000 && mintedCount <= 8888) {
                        if (amount < 10) {
                            if (parseInt(ethBalance) >= 0.03 * amount) {
                                nftTxn = await connectedContract.mint(amount); // 0.03
                            }
                            else {
                                alert('Insufficient funds!');
                                setMintLoading(false);
                                return;
                            }
                        }
                        else {
                            if (parseInt(ethBalance) >= 0.027 * amount) {
                                nftTxn = await connectedContract.mint(amount); // 0.027
                            }
                            else {
                                alert('Insufficient funds!');
                                setMintLoading(false);
                                return;
                            }
                        }
                    } else {
                        alert("NFT was sold out!");
                        return;
                    }

                    console.log("Mining...please wait.")
                    await nftTxn.wait();

                    // update minted count
                    let tokenId = await connectedContract.getTokenID();
                    setMintedCount(parseInt(tokenId._hex.toString(16), 16));
                    setMintLoading(false);

                    alert("Successfully minted! Please check your metamask now!");
                } catch (error) {
                    setMintLoading(false);
                    console.log(error)
                }
            }
        } else {
            setShowWarning(true);
        }
    }

    return (
        <section className="hero-section">
            <div className="container" style={{ position: 'relative' }}>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 my-auto hero-left">
                        <h1 className="mt-4 hero-title">{data.heading}</h1>
                        {/* Buttons */}
                        {!isconnected &&
                            <div className="button-group d-flex">
                                <Nav.Link className="btn btn-bordered-white btn-background-gradient" href={'#'} onClick={connectWallet}>{data.btn_1}</Nav.Link>
                            </div>
                        }
                    </div>
                    <div className="text-center my-auto">
                        <img className="hero-avatar" src={data.heroImg} alt="" />
                    </div>
                </div>
                {isconnected &&
                    <div className="nft-window">
                        <div className="d-flex p-4 nft-block">
                            <img src="assets/img/mint-gif.gif" alt="" />
                            <div className="nft-block-left">
                                <button type="button" className="close" aria-label="Close" onClick={disconnectWallet}>
                                    <h2 className="mb-0 pointer" aria-hidden="true" style={{ marginTop: "-1.2rem" }}>&times;</h2>
                                </button>
                                <h4 style={{ fontSize: '16px' }}>{shortenAddress(currentAccount, 8)}</h4>
                                <h4>TOTAL : 8888 / {mintedCount <= 0 ? 0 : mintedCount - 1}</h4>
                                <h4>PRICE : {mintedCount <= 1000 ? 0 : 0.03} ETH</h4>
                                <div className="form-group d-flex">
                                    <h4>AMOUNT : </h4>
                                    <input className="my-auto ml-3 amount-input" type="number" name="quantity" min="1" max="20" value={amount} onChange={(e) => changeAmount(e)} />
                                </div>
                                {showWarning &&
                                    <h4 style={{ fontSize: '12px', color: '#ffeb00', marginTop: '-15px' }}>You can mint max 20 NFT arts.</h4>
                                }
                                {!mintLoading ?
                                    <Nav.Link className="btn btn-bordered-white btn-background-gradient m-auto mint-btn" href={'#'} onClick={mintNFT}>{data.btn_2}</Nav.Link> :
                                    <Nav.Link className="btn btn-bordered-white btn-background-gradient m-auto mint-btn disabled" href={'#'} onClick={mintNFT} disabled>{data.btn_3}</Nav.Link>
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className="top-gradient"></div>
        </section>
    );
}

export default Hero;