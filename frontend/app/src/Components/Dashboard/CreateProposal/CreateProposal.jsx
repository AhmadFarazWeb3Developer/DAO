import React, { useContext, useRef } from "react";
import "./CreateProposal.css";
import { ComponentContext } from "../../../ComponentContext/ComponentContext";
const CreateProposal = () => {
  const { state, sender } = useContext(ComponentContext);
  const { contract } = state;
  console.log(contract);
  const descriptionInput = useRef(null);
  const amountInput = useRef(null);
  const addressInput = useRef(null);

  const initiateProposal = async (e) => {
    try {
      e.preventDefault();
      const description = descriptionInput.current.value;
      const amount = parseInt(amountInput.current.value);
      const recpientAddress = addressInput.current.value;
      // console.log(description);
      // console.log(amount);
      // console.log(recpientAddress);
      // console.log(sender);
      await contract.methods
        .createProposal(description, amount, recpientAddress)
        .send({ from: sender, gas: 480000 });
      console.log("Proposal Created");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="createProp-box">
        <h2>Create Your Proposal</h2>
        <form action="">
          <input
            ref={descriptionInput}
            type="text"
            name=""
            id=""
            placeholder="Proposal Descripton"
            className="input input-bordered input-primary   placeholder-slate-600 "
          />

          <input
            ref={amountInput}
            type="text"
            name=""
            id=""
            placeholder="Amount in (Wei)"
            className="input input-bordered input-primary  placeholder-slate-600 "
          />
          <input
            ref={addressInput}
            type="text"
            name=""
            id=""
            placeholder="Recipient Address"
            className="input input-bordered input-primary  placeholder-slate-600 "
          />
          <button
            className="btn btn-wide btn-primary "
            onClick={initiateProposal}
          >
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateProposal;
