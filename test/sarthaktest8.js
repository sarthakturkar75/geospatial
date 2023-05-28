const sarthaktest8 = artifacts.require("sarthaktest8");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("sarthaktest8", function (/* accounts */) {
  it("should assert true", async function () {
    await sarthaktest8.deployed();
    return assert.isTrue(true);
  });
});
