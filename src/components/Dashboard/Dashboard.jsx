import React, { useContext } from "react";
import "./Dashboard.css";

import CreateProposal from "./CreateProposal/CreateProposal";
import ExecuteProposal from "./ExecuteProposal/ExecuteProposal";
import TransferShares from "./TransferShares/TransferShares";
import RedeemShares from "./RedeemShares/RedeemShares";
import ContributeAmount from "./ContributeAmount/ContributeAmount";
import Vote from "./Vote/Vote";
import { ComponentContext } from "../../ComponentContext/ComponentContext";

const Dashboard = () => {
  const { setComponent } = useContext(ComponentContext);

  return (
    <div>
      <aside>
        <p>Manager </p>
        <div onClick={() => setComponent(<CreateProposal />)}>
          <p>Create Proposal</p>
        </div>
        <div onClick={() => setComponent(<ExecuteProposal />)}>
          <p>Execute Proposal</p>
        </div>
        <br />
        <p>Investor</p>
        <div onClick={() => setComponent(<ContributeAmount />)}>
          <p>Contribute Amount</p>
        </div>

        <div onClick={() => setComponent(<TransferShares />)}>
          <p>Transfer Shares</p>
        </div>
        <div onClick={() => setComponent(<RedeemShares />)}>
          <p>Redeem Shares</p>
        </div>
        <br />
        <div onClick={() => setComponent(<Vote />)} id="vote-btn">
          <p>Vote Proposal</p>
        </div>
      </aside>
    </div>
  );
};
export default Dashboard;
