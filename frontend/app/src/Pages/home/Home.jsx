import "./Home.css";
import Navbar from "../../Components/NavBar/NavBar";
import Dashboard from "../../Components/Dashboard/Dashboard";
import HeroSection from "../../Components/HeroSection/HeroSection";
import { useEffect, useState } from "react";
import { ComponentContext } from "../../ComponentContext/ComponentContext";
import { Web3 } from "web3";
import DAO from "../../contractABI/DAO.json";
const Home = () => {
  // setting contract and state
  const [state, setState] = useState({ web3: null, contract: null });
  const [component, setComponent] = useState(null);
  const [sender, setSender] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        const provider = new Web3.providers.HttpProvider(
          "HTTP://127.0.0.1:7545"
        );
        const web3 = new Web3(provider);

        const networkId = await web3.eth.net.getId();

        const deployedNetwork = DAO.networks[networkId];

        const contract = new web3.eth.Contract(
          DAO.abi,
          deployedNetwork.address,
          { handleRevert: true }
        );
        setState({ web3: web3, contract: contract });
      } catch {
        alert("Unable to Detect Network ");
      }
    };
    init();
  }, []);

  return (
    <>
      <ComponentContext.Provider
        value={{ state, component, setComponent, sender, setSender }}
      >
        <section className="primary-section">
          <Navbar />
          <Dashboard />
          <HeroSection />
        </section>
      </ComponentContext.Provider>
    </>
  );
};
export default Home;
