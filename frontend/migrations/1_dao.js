const DAO = artifacts.require("DAO");

module.exports = async (deployer) => {
  const contributionTimeEnd = 3600; // or any value you prefer
  const voteTime = 3600; // or any value you prefer
  const quorum = 51; // or any value you prefer

  await deployer.deploy(DAO, contributionTimeEnd, voteTime, quorum, {
    gas: 6721975, // Adjust if necessary
    gasPrice: 20000000000, // 20 Gwei, adjust if necessary
  });
};
