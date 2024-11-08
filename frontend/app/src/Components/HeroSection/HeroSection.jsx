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
  const renderedAddresses = useRef(new Set());

  useEffect(() => {
    const { web3, contract } = state;

    const allAccounts = async () => {
      if (web3) {
        // getting all accounts from web3
        const options = await web3.eth.getAccounts();

        options.forEach((option) => {
          if (!renderedAddresses.current.has(option)) {
            // Only add if the address is not already rendered
            let element = document.createElement("option");
            element.textContent = option;
            element.value = option;
            select.current.appendChild(element);
            renderedAddresses.current.add(option); // Track rendered address
          }
        });

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

  return (
    <>
      <section className="hero-section">
        <header>
          <h3> Ethers : {balance}</h3>
          <select
            onChange={selectAccount}
            name=""
            id="options"
            ref={select}
            className="select select-bordered w-full my-4"
          >
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
