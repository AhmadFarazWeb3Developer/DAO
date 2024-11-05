import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ComponentContext } from "../../ComponentContext/ComponentContext";
import "./Main.css";

const Main = ({ component }) => {
  const { state, sender } = useContext(ComponentContext);
  const { contract } = state;
  const [ProposalList, setProposalList] = useState([]);
  const [InvestorList, setInvestorList] = useState([]);

  const fetchLists = async () => {
    if (contract) {
      try {
        const proposalList = await contract.methods.ProposalList().call();
        setProposalList(proposalList);

        const investorList = await contract.methods.InvestorList().call();
        setInvestorList(investorList);
      } catch (error) {
        console.error("Error fetching lists: ", error);
      }
    }
  };

  useEffect(() => {
    fetchLists();
    const interval = setInterval(() => {
      fetchLists();
    }, 2000);

    return () => clearInterval(interval);
  }, [contract, sender]);

  return (
    <>
      <section className="main-section">
        {component}
        <div id="investorList" className="lists">
          <h3 id="investorList-heading">Investor's List</h3>
          {InvestorList.map((list, index) => (
            <p
              key={index}
              className="investor-list card bg-base-200 rounded place-items-center"
            >
              {list}
            </p>
          ))}
        </div>
        <div id="proposalList" className="lists">
          <h3>Proposal's List</h3>
          <table className=" table">
            <thead>
              <tr className="bg-base-200">
                <th>Proposal ID</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Recipient</th>
                <th>Votes</th>
                <th>Time</th>
                <th>Executed?</th>
              </tr>
            </thead>
            <tbody>
              {ProposalList.map((list) => (
                <tr key={list.id} className="proposal-list bg-base-200">
                  <td>{parseInt(list.id)}</td>
                  <td>{list.description}</td>
                  <td>{parseInt(list.amount)}</td>
                  <td>{list.receipient}</td>
                  <td>{parseInt(list.votes) / 1e18}</td>
                  <td>
                    {new Date(parseInt(list.end) * 1000).toLocaleString()}
                  </td>
                  <td>{list.isExecuted ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="primary-section"></section>
    </>
  );
};

export default Main;
