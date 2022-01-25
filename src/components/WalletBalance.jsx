import React,{useState} from 'react';
import { ethers } from 'ethers';

export default function WalletBalance() {
  const [balance, setBalance] = useState(0);

  const getBalance = async () => {
    const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(account);

    setBalance(ethers.utils.formatEther(balance));
  };
  return <>
    <h5>your balance: {balance}</h5>
    <button onClick={getBalance}>Get Balance</button>
  </>;
}
