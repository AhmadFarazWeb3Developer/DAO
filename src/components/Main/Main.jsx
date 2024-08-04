import React from "react";
import "./Main.css";
const Main = ({ component }) => {
  return (
    <>
      <section className="main-section">
        {component}
        <div id="investorList" className="lists">
          <h3>Investor's List</h3>
          <div className="list-box"></div>
        </div>
        <div id="proposalList" className="lists">
          <h3>Proposal's List</h3>
        </div>
      </section>
      <section className="primary-section"></section>
    </>
  );
};

export default Main;
