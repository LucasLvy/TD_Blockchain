const evaluator = require("./Evaluator.json")
const claim = require("./ERC20Claimable.json")
const tok = require("../build/contracts/ExerciceSolutionToken.json")
const lazy = require("../build/contracts/LazyTd.json")
const Web3= require('web3');
let web3 = new Web3(process.env.infura)

// const eval = new web3.eth.Contract(evaluator.abi, "0x384C00Ff43Ed5376F2d7ee814677a15f3e330705")
// const claimable = new web3.eth.Contract(claim.abi, "0xb5d82FEE98d62cb7Bc76eabAd5879fa4b29fFE94")
// const solTok = new web3.eth.Contract(tok.abi, "0x2EC2b6bE2cff18aaeEd4dFFd116C590Ef71a4630")
// let batch = new web3.eth.BatchRequest()
const td = new web3.eth.Contract(lazy.abi, "0x54040620b3A61c564FC2C21E81f28c121F11cd21")
a()
async function a() {
    let acc = web3.eth.accounts.privateKeyToAccount(process.env.pk)
    web3.eth.accounts.wallet.add(acc);
    console.log(await td.methods.executeTd().send({from: "0x8067c1F2E8ec7FD00C08Ff0FbedAF185cbd8ca0A", gasPrice: '900000000', gas:'2100000'}))
    // await claimable.methods.claimTokens().send({from: "0x8067c1F2E8ec7FD00C08Ff0FbedAF185cbd8ca0A", gasPrice: '900000000', gas:'210000'})
    // await solTok.methods.setMinter("0xf3B478AEA19023924747a3Fc0B3fB813925e7900", true).send({from: "0x8067c1F2E8ec7FD00C08Ff0FbedAF185cbd8ca0A", gasPrice: '900000000', gas:'210000'})
    // await solTok.methods.setExContr("0xf3B478AEA19023924747a3Fc0B3fB813925e7900").send({from: "0x8067c1F2E8ec7FD00C08Ff0FbedAF185cbd8ca0A", gasPrice: '900000000', gas:'210000'})
    // await eval.methods.submitExercice("0xf3B478AEA19023924747a3Fc0B3fB813925e7900").send({from: "0x8067c1F2E8ec7FD00C08Ff0FbedAF185cbd8ca0A", gasPrice: '900000000', gas:'210000'})
    // await claimable.methods.claimTokens().send({from: "0x8067c1F2E8ec7FD00C08Ff0FbedAF185cbd8ca0A", gasPrice: '900000000', gas:'210000'})
    // await eval.methods.ex1_claimedPoints().send({from: "0x8067c1F2E8ec7FD00C08Ff0FbedAF185cbd8ca0A", gasPrice: '900000000', gas:'210000'})
    // await eval.methods.ex2_claimedFromContract().send({from: "0x8067c1F2E8ec7FD00C08Ff0FbedAF185cbd8ca0A", gasPrice: '900000000', gas:'210000'})
    // await eval.methods.ex3_withdrawFromContract().send({from: "0x8067c1F2E8ec7FD00C08Ff0FbedAF185cbd8ca0A", gasPrice: '900000000', gas:'210000'})
    // await claimable.methods.approve("0xf3B478AEA19023924747a3Fc0B3fB813925e7900", 1000).send({from: "0x8067c1F2E8ec7FD00C08Ff0FbedAF185cbd8ca0A", gasPrice: '900000000', gas:'210000'})
    // await eval.methods.ex4_approvedExerciceSolution().send({from: "0x8067c1F2E8ec7FD00C08Ff0FbedAF185cbd8ca0A", gasPrice: '900000000', gas:'210000'})
    // await claimable.methods.approve("0xf3B478AEA19023924747a3Fc0B3fB813925e7900", 0).send({from: "0x8067c1F2E8ec7FD00C08Ff0FbedAF185cbd8ca0A", gasPrice: '900000000', gas:'210000'})
    // await eval.methods.ex5_revokedExerciceSolution().send({from: "0x8067c1F2E8ec7FD00C08Ff0FbedAF185cbd8ca0A", gasPrice: '900000000', gas:'210000'})
    // eval.methods.ex6_depositTokens().send({from: "0x8067c1F2E8ec7FD00C08Ff0FbedAF185cbd8ca0A", gasPrice: '900000000', gas:'21000000'}).catch(e => {
    //     console.log(e)
    // })
    // await eval.methods.ex7_createERC20().send({from: "0x8067c1F2E8ec7FD00C08Ff0FbedAF185cbd8ca0A", gasPrice: '900000000', gas:'210000'}).catch(e => {
    //     console.log(e)
    // })
    // await eval.methods.ex8_depositAndMint().send({from: "0x8067c1F2E8ec7FD00C08Ff0FbedAF185cbd8ca0A", gasPrice: '900000000', gas:'210000'}).catch(e => {
    //     console.log(e)
    // })
    // await eval.methods.ex9_withdrawAndBurn().send({from: "0x8067c1F2E8ec7FD00C08Ff0FbedAF185cbd8ca0A", gasPrice: '900000000', gas:'210000'}).catch(e => {
    //     console.log(e)
    // })
    
}

function callBack(err, result) {
    console.warn("error", err)
    console.warn("res", result);
  }