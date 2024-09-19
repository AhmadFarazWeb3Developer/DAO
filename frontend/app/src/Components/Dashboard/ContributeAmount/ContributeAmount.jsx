import React, { useContext, useRef } from "react";
import { ComponentContext } from "../../../ComponentContext/ComponentContext";

const ContributeAmount = () => {
  const { state, sender } = useContext(ComponentContext);
  const { contract, web3 } = state;
  const amountInput = useRef(); // no need to initialize with 0

  const Contribute = async (e) => {
    try {
      e.preventDefault();
      // Correcting the misspelled method
      const amount = web3.utils.toWei(amountInput.current.value, "ether");
      const gasEstimate = await contract.methods.contribution().estimateGas({
        from: sender,
        value: amount,
      });

      await contract.methods.contribution().send({
        from: sender,
        value: amount,
        gas: gasEstimate,
      });

      console.log("Transaction Successful");
    } catch (error) {
      console.error("Error is: ", error);
    }
  };

  return (
    <>
      <div className="createProp-box">
        <h2>Contribute Amount</h2>
        <form onSubmit={Contribute}>
          <input
            type="text"
            ref={amountInput}
            placeholder="Enter Contribution Amount in Ether"
          />
          <button type="submit">Contribute</button>
        </form>
      </div>
    </>
  );
};

export default ContributeAmount;
