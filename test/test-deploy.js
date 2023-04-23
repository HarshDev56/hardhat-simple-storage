const { ethers } = require("hardhat")
const { assert, expect } = require("chai")
describe("SimpleStorage", function () {
    let simpleStorageFactory, simpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("Should Start with a favroite number of 0", async function () {
        const currentvalue = await simpleStorage.retrieve()
        const expectedValue = "0"
        assert.equal(currentvalue.toString(), expectedValue)
        // expect(currentvalue.toString().to.equal(expectedValue))
    })
    it("Should update when we call store", async function () {
        const expectedValue = "7"
        const transactionResponse = await simpleStorage.store(expectedValue)
        await transactionResponse.wait(1)
        const currentvalue = await simpleStorage.retrieve()
        assert.equal(currentvalue.toString(), expectedValue)
    })
})
