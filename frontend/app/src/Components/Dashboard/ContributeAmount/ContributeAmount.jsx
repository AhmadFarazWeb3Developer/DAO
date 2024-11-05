import React, { useContext, useRef } from "react";
import { ComponentContext } from "../../../ComponentContext/ComponentContext";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const ContributeAmount = () => {
  const { state, sender } = useContext(ComponentContext);
  const { contract, web3 } = state;
  const amountInput = useRef();

  const Contribute = async (e) => {
    try {
      e.preventDefault();

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
        <h2 className=" mb-5">Contribute Amount</h2>
        <form onSubmit={Contribute} className=" gap-10">
          <input
            placeholder="Enter Contribution Amount in Ether"
            ref={amountInput}
            className=" input input-primary  placeholder-slate-600"
          />
          <button onClick={Contribute} className="btn btn-wide btn-primary">
            Contribute
          </button>
        </form>
      </div>
    </>
  );
};

export default ContributeAmount;
