import React, { useContext, useState } from "react";
import { ComponentContext } from "../../../ComponentContext/ComponentContext";

const RedeemShares = () => {
  const { state, sender } = useContext(ComponentContext);
  const { contract, web3 } = state;
  const [shares, SetShares] = useState(0);

  const redeemShares = async (e) => {
    try {
      e.preventDefault();

      const toWei = await web3.utils.toWei(shares.toString(), "ether");
      await contract.methods
        .reedemShare(toWei)
        .send({ from: sender, gas: 480000 });
      console.log("Funds transfered");
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <>
      <div className="createProp-box">
        <h2>Redeem Shares</h2>
        <form action="">
          <input
            type="text"
            placeholder="Enter Number of Shares"
            onChange={(e) => {
              SetShares(e.target.value);
            }}
            className="input input-primary  placeholder-slate-600"
          />
          <button onClick={redeemShares} className=" btn btn-wide btn-primary">
            Redeem
          </button>
        </form>
      </div>
    </>
  );
};

export default RedeemShares;
