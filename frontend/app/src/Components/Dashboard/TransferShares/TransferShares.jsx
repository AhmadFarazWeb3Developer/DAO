import React, { useContext, useEffect, useRef, useState } from "react";
import { ComponentContext } from "../../../ComponentContext/ComponentContext";

const TransferShares = () => {
  const { state, sender } = useContext(ComponentContext);
  const { contract, web3 } = state;
  const [Input, setInput] = useState({
    address: "",
    amount: "",
  });

  useEffect(() => {
    console.log("Input ", Input);
  }, [Input]);
  const getValues = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };
  const transaferShares = async (e) => {
    if (!Input.amount || !Input.address) {
      console.log("Field must be filled");
      return;
    }

    try {
      e.preventDefault();

      const { amount, address } = Input;
      const toWei = await web3.utils.toWei(amount.toString(), "ether");
      console.log("Balance before : ", await web3.eth.getBalance(address));
      await contract.methods
        .transferShare(toWei, address)
        .send({ from: sender, gas: 480000 });

      console.log("Balance After : ", await web3.eth.getBalance(address));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="createProp-box">
        <h2>Transfer Shares</h2>
        <form action="">
          <input
            type="text"
            placeholder="Enter Amount in Wei"
            name="amount"
            value={Input.amount}
            onChange={getValues}
            className=" input input-primary  placeholder-slate-600"
          />
          <input
            type="text"
            placeholder="Enter Recipient Address "
            name="address"
            value={Input.address}
            onChange={getValues}
            className=" input input-primary  placeholder-slate-600"
          />
          <button
            type="submit"
            onClick={transaferShares}
            className=" btn btn-wide btn-primary  placeholder-slate-600"
          >
            Transfer
          </button>
        </form>
      </div>
    </>
  );
};

export default TransferShares;
