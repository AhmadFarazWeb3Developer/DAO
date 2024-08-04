import React from "react";

const TransferShares = () => {
  return (
    <>
      <div className="createProp-box">
        <h2>Transfer Shares</h2>
        <form action="">
          <input type="text" placeholder="Enter Amount in Wei" />
          <input type="text" placeholder="Enter Recipient Address " />
          <button type="submit">Transfer</button>
        </form>
      </div>
    </>
  );
};

export default TransferShares;
