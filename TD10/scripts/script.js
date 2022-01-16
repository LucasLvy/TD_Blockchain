const Web3 = require('web3')

a().catch(e => {
  console.log(e)
})

async function a() {
  let web3 = new Web3('https://kovan.infura.io/v3/')
  const evaluator = require('../build/contracts/Evaluator.json')
  const solu = require('../build/contracts/ExerciceSolution.json')
  const sol = new web3.eth.Contract(solu.abi, '0x76BaF9A1d5ba711Aa698d7f67B6E5C582EeDAd12')
  const eva = new web3.eth.Contract(evaluator.abi, '0xF00a099b637841fB2D240ABEeDeb48719836fd6D')
  let acc = web3.eth.accounts.privateKeyToAccount('')
  web3.eth.accounts.wallet.add(acc)
  // console.log(
  //   await eva.methods.ex1_showIDepositedTokens().send({
  //     from: '0x8067c1F2E8ec7FD00C08Ff0FbedAF185cbd8ca0A',
  //     gasPrice: '9000000000',
  //     gas: '2100000'
  //   })
  // )
  // console.log(
  //   await eva.methods.ex2_showIBorrowedTokens().send({
  //     from: '0x8067c1F2E8ec7FD00C08Ff0FbedAF185cbd8ca0A',
  //     gasPrice: '9000000000',
  //     gas: '2100000'
  //   })
  // )
  // console.log(
  //   await eva.methods.ex3_showIRepaidTokens().send({
  //     from: '0x8067c1F2E8ec7FD00C08Ff0FbedAF185cbd8ca0A',
  //     gasPrice: '9000000000',
  //     gas: '2100000'
  //   })
  // )
  // console.log(
  //   await eva.methods.ex4_showIWithdrewTokens().send({
  //     from: '0x8067c1F2E8ec7FD00C08Ff0FbedAF185cbd8ca0A',
  //     gasPrice: '9000000000',
  //     gas: '2100000'
  //   })
  // )
  // console.log(
  //   await eva.methods.submitExercice('0x8567710bf67Ae8e5292a80b64162410385eA7Aaa').send({
  //     from: '0x8067c1F2E8ec7FD00C08Ff0FbedAF185cbd8ca0A',
  //     gasPrice: '9000000000',
  //     gas: '2100000'
  //   })
  // )
  // console.log(
  //   await eva.methods.ex5_showContractCanDepositTokens().send({
  //     from: '0x8067c1F2E8ec7FD00C08Ff0FbedAF185cbd8ca0A',
  //     gasPrice: '9000000000',
  //     gas: '2100000'
  //   })
  // )
  // console.log(
  //   await eva.methods.ex6_showContractCanBorrowTokens().send({
  //     from: '0x8067c1F2E8ec7FD00C08Ff0FbedAF185cbd8ca0A',
  //     gasPrice: '9000000000',
  //     gas: '2100000'
  //   })
  // )
  // console.log(
  //   await eva.methods.ex7_showContractCanRepayTokens().send({
  //     from: "0x8067c1F2E8ec7FD00C08Ff0FbedAF185cbd8ca0A",
  //     gasPrice: "9000000000",
  //     gas: "2100000",
  //   })
  // );
  // console.log(
  //   await eva.methods.ex8_showContractCanWithdrawTokens().send({
  //     from: '0x8067c1F2E8ec7FD00C08Ff0FbedAF185cbd8ca0A',
  //     gasPrice: '9000000000',
  //     gas: '2100000'
  //   })
  // )
  console.log(
    await eva.methods.ex9_performFlashLoan().send({
      from: '0x8067c1F2E8ec7FD00C08Ff0FbedAF185cbd8ca0A',
      gasPrice: '9000000000',
      gas: '2100000'
    })
  )
}
