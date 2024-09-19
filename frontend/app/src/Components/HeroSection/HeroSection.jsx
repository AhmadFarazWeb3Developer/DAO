import React, { useContext, useEffect, useRef, useState } from "react";
import Main from "../Main/Main";
import "./HeroSection.css";
import Web3 from "web3";
import { ComponentContext } from "../../ComponentContext/ComponentContext";

const HeroSection = () => {
  const { state, component, setSender } = useContext(ComponentContext);
  const select = useRef(null);
  const [ConAccount, setContAccount] = useState("Not Connected");
  const [balance, setBalance] = useState(0);
  const [reserveFunds, setReserveFunds] = useState(0);

  useEffect(() => {
    const { web3, contract } = state;
    const allAccounts = async () => {
      if (web3) {
        // getting all accounts from web3
        const options = await web3.eth.getAccounts();

        for (let i = 0; i < options.length; i++) {
          let option = options[i];
          let element = document.createElement("option");
          element.textContent = option;
          element.value = option;
          select.current.appendChild(element);
        }

        const weiFunds = await contract.methods.availableFunds().call();
        const ethFunds = Web3.utils.fromWei(weiFunds, "ether");
        setReserveFunds(ethFunds);
      }
    };
    allAccounts();
  }, [state, setSender]);

  const selectAccount = async () => {
    const { web3 } = state;
    let address = select.current.value;
    if (address && address !== "Select Your Account") {
      try {
        let balanceWei = await web3.eth.getBalance(address);
        let balanceEther = Web3.utils.fromWei(balanceWei, "ether"); // Convert from Wei to Ether
        setContAccount(address);
        setBalance(balanceEther);
        setSender(address);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    }
  };

  // useEffect(async () => {}, [state]);
  return (
    <>
      <section className="hero-section">
        <header>
          {/* <h2>Connected Account : {ConAccount}</h2> */}
          <h3> Ethers : {balance}</h3>
          <select onChange={selectAccount} name="" id="options" ref={select}>
            <option value="" id="option">
              Select Your Account
            </option>
          </select>

          <div className="total-funds-box">
            <label htmlFor="">Reserve Funds</label>
            <p>{`${reserveFunds} ethers`}</p>
          </div>
        </header>
        <Main component={component} />
      </section>
    </>
  );
};

export default HeroSection;
