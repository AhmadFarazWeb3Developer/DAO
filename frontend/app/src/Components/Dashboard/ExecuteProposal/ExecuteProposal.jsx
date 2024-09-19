import React, { useContext, useRef, useState } from "react";
import { ComponentContext } from "../../../ComponentContext/ComponentContext";

const ExecuteProposal = () => {
  const { state, sender } = useContext(ComponentContext);
  const { contract } = state;

  const inputId = useRef(null);
  const executeProposal = async (e) => {
    try {
      e.preventDefault();
      const proposalId = parseInt(inputId.current.value);

      const estimatedGas = await contract.methods
        .executeProposal(proposalId)
        .estimateGas({
          from: sender,
        });
      console.log(proposalId);
      await contract.methods
        .executeProposal(proposalId)
        .send({ from: sender, gas: estimatedGas });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="createProp-box">
        <h2>Execute Proposal</h2>
        <form action="">
          <input type="text" ref={inputId} placeholder="Enter Proposal ID" />
          <button type="submit" onClick={executeProposal}>
            Execute
          </button>
        </form>
      </div>
    </>
  );
};

export default ExecuteProposal;
