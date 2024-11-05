import React from "react";
import { useRef, useContext } from "react";
import { ComponentContext } from "../../../ComponentContext/ComponentContext";
const Vote = () => {
  const { state, sender } = useContext(ComponentContext);
  const { contract } = state;
  const inputProposalId = useRef(null);

  const voteProposal = async (e) => {
    try {
      e.preventDefault();
      const proposalId = parseInt(inputProposalId.current.value);
      const gasEstimate = await contract.methods
        .voteProposal(proposalId)
        .estimateGas({
          from: sender,
        });
      await contract.methods
        .voteProposal(proposalId)
        .send({ from: sender, gas: gasEstimate });
      alert("You voted ID : ", { proposalId });
    } catch (error) {
      console.log("Error :", error.reason);
    }
  };
  return (
    <>
      <div className="createProp-box">
        <h2>Cast Vote</h2>
        <form action="">
          <input
            type="text"
            ref={inputProposalId}
            name=""
            id=""
            placeholder="Enter Proposal ID"
            className=" input input-success placeholder-slate-600"
          />
          <button
            type="submit"
            id="vote-btn"
            onClick={voteProposal}
            className=" btn btn-success btn-primary "
          >
            Vote
          </button>
        </form>
      </div>
    </>
  );
};

export default Vote;
