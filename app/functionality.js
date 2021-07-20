let web3;
var accounts;

var FTcontract = "0x1652557183585f1581A828FE59c9CbC551f774b8";
var bridge = "0x025Ca32DA4430D22F9F6598e4e1b980B63171433";
var selectedBridge = "BSCETH";
var selectedToken = "FTaddress";

console.log(screen.width);
console.log("WTF");
var allowance;

async function enable(){
        return ethereum.enable();
      }

if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
    web3 = new Web3(window.web3.currentProvider);
    enable();
	web3.eth.net.getId().then(console.log);
	getMetMaskAccounts().then(variable => accounts = variable);
}
else{
    alert("Please install Meta Mask to interact with this webpage")
}

ethereum.on('accountsChanged', function getAccounts() {
	getMetMaskAccounts().then(variable => accounts = variable);
  });


  var abi = [{"inputs":[{"internalType":"address","name":"FTcontract","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"OrdersCount","outputs":[{"internalType":"uint256","name":"SendOrdersCount","type":"uint256"},{"internalType":"uint256","name":"ReceiveOrdersCount","type":"uint256"},{"internalType":"uint256","name":"RequestTokenOrdersCount","type":"uint256"},{"internalType":"uint256","name":"AddTokenOrdersCount","type":"uint256"},{"internalType":"uint256","name":"ProposalsCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"main","type":"address"},{"internalType":"address","name":"parallel","type":"address"},{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"addToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"ID","type":"uint256"},{"internalType":"uint256","name":"ID1","type":"uint256"}],"name":"addTokenAndProposalStats","outputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"main","type":"address"},{"internalType":"address","name":"parallel","type":"address"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"address","name":"creator","type":"address"},{"internalType":"address","name":"main1","type":"address"},{"internalType":"address","name":"parallel1","type":"address"},{"internalType":"uint256","name":"fee1","type":"uint256"},{"internalType":"bool","name":"signed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"main","type":"address"},{"internalType":"address","name":"parallel","type":"address"},{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"addTokenOrderProgress","outputs":[{"internalType":"bool","name":"signed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"node","type":"address"}],"name":"bridgeAndNodeStats","outputs":[{"internalType":"uint256","name":"nodes","type":"uint256"},{"internalType":"uint256","name":"stakedFT","type":"uint256"},{"internalType":"uint256","name":"staked","type":"uint256"},{"internalType":"uint256","name":"verifiedBlock","type":"uint256"},{"internalType":"uint256","name":"locked","type":"uint256"},{"internalType":"uint256","name":"lockedFT","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"uint256","name":"claimingFee","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"tokenAddressFrom","type":"address"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contractAddress","type":"address"}],"name":"contractsOf","outputs":[{"internalType":"address","name":"parallelContract","type":"address"},{"internalType":"address","name":"mainContract","type":"address"},{"internalType":"address","name":"parallelContractOfThat","type":"address"},{"internalType":"address","name":"mainContractOfThat","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ThisMain","type":"address"},{"internalType":"address","name":"ThatParallel","type":"address"},{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"createProposal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"uint256","name":"claimingFee","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"tokenAddressFrom","type":"address"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"uint256","name":"claimingFee","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"tokenAddressFrom","type":"address"}],"name":"depositOrderProgress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"ID","type":"uint256"},{"internalType":"uint256","name":"ID1","type":"uint256"}],"name":"doubleSendStats","outputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"uint256","name":"claimingFee","type":"uint256"},{"internalType":"address","name":"tokenAddressFrom","type":"address"},{"internalType":"address","name":"sender1","type":"address"},{"internalType":"address","name":"receiver1","type":"address"},{"internalType":"uint256","name":"amount1","type":"uint256"},{"internalType":"uint256","name":"fee1","type":"uint256"},{"internalType":"uint256","name":"claimingFee1","type":"uint256"},{"internalType":"address","name":"tokenAddressFrom1","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"node","type":"address"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"uint256","name":"claimingFee","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"tokenAddressFrom","type":"address"}],"name":"orderProgress","outputs":[{"internalType":"uint256","name":"votedFT","type":"uint256"},{"internalType":"bool","name":"processed","type":"bool"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"main","type":"address"},{"internalType":"address","name":"parallel","type":"address"},{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"requestToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"uint256","name":"claimingFee","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"tokenAddressFrom","type":"address"}],"name":"transfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"unStake","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unlock","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"verify","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"ID","type":"uint256"}],"name":"voteOnProposal","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]
  ;
  var ERC20abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Stake","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"unstaker","type":"address"},{"indexed":false,"internalType":"uint256","name":"unstakingamount","type":"uint256"}],"name":"Unstake","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowances","outputs":[{"internalType":"uint256","name":"allowanceAmount","type":"uint256"},{"internalType":"bool","name":"stakingAllowence","type":"bool"},{"internalType":"bool","name":"fullAllowence","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bridge","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"recipient1","type":"address"},{"internalType":"address","name":"recipient2","type":"address"},{"internalType":"address","name":"recipient3","type":"address"},{"internalType":"address","name":"recipient4","type":"address"},{"internalType":"address","name":"recipient5","type":"address"},{"internalType":"address","name":"recipient6","type":"address"},{"internalType":"address","name":"recipient7","type":"address"},{"internalType":"address","name":"recipient8","type":"address"},{"internalType":"address","name":"recipient9","type":"address"},{"internalType":"address","name":"recipient10","type":"address"}],"name":"decupleTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient1","type":"address"},{"internalType":"uint256","name":"amount1","type":"uint256"},{"internalType":"address","name":"recipient2","type":"address"},{"internalType":"uint256","name":"amount2","type":"uint256"}],"name":"doubleTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"giveFullAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"giveStakingAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient1","type":"address"},{"internalType":"uint256","name":"amount1","type":"uint256"},{"internalType":"address","name":"recipient2","type":"address"},{"internalType":"uint256","name":"amount2","type":"uint256"},{"internalType":"address","name":"recipient3","type":"address"},{"internalType":"uint256","name":"amount3","type":"uint256"},{"internalType":"address","name":"recipient4","type":"address"},{"internalType":"uint256","name":"amount4","type":"uint256"}],"name":"quadrupleTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient1","type":"address"},{"internalType":"uint256","name":"amount1","type":"uint256"},{"internalType":"address","name":"recipient2","type":"address"},{"internalType":"uint256","name":"amount2","type":"uint256"},{"internalType":"address","name":"recipient3","type":"address"},{"internalType":"uint256","name":"amount3","type":"uint256"},{"internalType":"address","name":"recipient4","type":"address"},{"internalType":"uint256","name":"amount4","type":"uint256"},{"internalType":"address","name":"recipient5","type":"address"},{"internalType":"uint256","name":"amount5","type":"uint256"}],"name":"quintupleTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient1","type":"address"},{"internalType":"uint256","name":"amount1","type":"uint256"},{"internalType":"address","name":"recipient2","type":"address"},{"internalType":"uint256","name":"amount2","type":"uint256"},{"internalType":"address","name":"recipient3","type":"address"},{"internalType":"uint256","name":"amount3","type":"uint256"},{"internalType":"address","name":"recipient4","type":"address"},{"internalType":"uint256","name":"amount4","type":"uint256"},{"internalType":"address","name":"recipient5","type":"address"},{"internalType":"uint256","name":"amount5","type":"uint256"}],"name":"quintupleTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"refreshStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"refreshStakingFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"removeFullAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"removeStakingAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"bridge","type":"address"}],"name":"setBridge","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stakeFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stakeFTfor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"stakingStats","outputs":[{"internalType":"uint256","name":"stakingAmount","type":"uint256"},{"internalType":"uint256","name":"stakingBlock","type":"uint256"},{"internalType":"uint256","name":"rewards","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient1","type":"address"},{"internalType":"uint256","name":"amount1","type":"uint256"},{"internalType":"address","name":"recipient2","type":"address"},{"internalType":"uint256","name":"amount2","type":"uint256"},{"internalType":"address","name":"recipient3","type":"address"},{"internalType":"uint256","name":"amount3","type":"uint256"}],"name":"tripleTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unstakeAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"unstakeAllfor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"unstakeFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"unstakeFTfor","outputs":[],"stateMutability":"nonpayable","type":"function"}]
  ;
  const bridgeContract = new web3.eth.Contract(abi, bridge)
  const thisContract = new web3.eth.Contract(ERC20abi, FTcontract);

  //getMetMaskAccounts().then(val => console.log(val[0]));
  //getAllowance("0xc8aa1adc636d2369f3c9e94fef0705e2b2ba235c", "0x2DBE938e546357D9738087C39C54C96FEdb23e11").then(bal => console.log(bal));
  //console.log(getAllownce());
  //getAllownce().then(console.log);

  function displayAccount(){
    console.log(accounts[0]);
  }
  async function getMetMaskAccounts(){
	  return window.ethereum.request({ method: 'eth_requestAccounts' });
  }
  
  async function getAccounts(){
		getMetMaskAccounts().then(variable => accounts = variable);
      return accounts;
    }

  function amount() {
    console.log("amount " + document.getElementById("amount").value.trim());
    return document.getElementById("amount").value.trim();
  }

  function tokenAddressFrom() {
    console.log("from " + document.getElementById("tokenAddressFrom").value);
    return document.getElementById("tokenAddressFrom").value.trim();
  }
  
  function fee() {
    console.log("fee " + document.getElementById("fee").value.trim());
    return document.getElementById("fee").value.trim();
  }

  function claimingFee() {
    console.log("claimingFee " + document.getElementById("claimingFee").value.trim());
    return document.getElementById("claimingFee").value.trim();
  }

  function totalFees() {
    var fee = document.getElementById("fee").value.trim();
    var claimingFee = document.getElementById("claimingFee").value.trim();
    return fee + claimingFee * 10000000000;
  }

  function to() {
    console.log("to " + document.getElementById("to").value.trim());
    return document.getElementById("to").value.trim();
  }
  

  function transfer(){

      var tokenAddressFrom = document.getElementById("tokenAddressFrom").value.trim();
      var to = document.getElementById("to").value.trim();
      var amount = document.getElementById("amount").value.trim();
      var fee = document.getElementById("fee").value.trim();
      var claimingFee = document.getElementById("claimingFee").value.trim();

      if(tokenAddressFrom == "0x0000000000000000000000000000000000000000"){bridgeContract.methods.transfer(amount, fee, claimingFee, to, tokenAddressFrom).send({from : accounts[0]}); return;}
      try{
          amount - 1;
          fee - 1;
          claimingFee - 1;
      }catch(error){document.getElementById("status").style.color = "red"; document.getElementById("status").innerHTML = "Invalid input0";}

      if(amount <= 0 || fee < 0 || claimingFee < 0 || !web3.utils.isAddress(tokenAddressFrom) || !web3.utils.isAddress(to) ){document.getElementById("status").style.color = "red"; document.getElementById("status").innerHTML = "Invalid input11"; return;}

      getBalance().then(value => processTransfer(value));
    }

    function processTransfer(balance) { //checks if users balance is enough
      if(balance >= amount()){getFTbalance().then(value => processTransfer1(value));}
      else{document.getElementById("status").style.color = "red"; document.getElementById("status").innerHTML = "Insufficient Balance";}
    }

    function processTransfer1(FTbalance) { //checks if user has enough FT to cover fees
      if(FTbalance >= totalFees()){getAllowance().then(value => processTransfer2(value));}
      else{document.getElementById("status").style.color = "red"; document.getElementById("status").innerHTML = "Insufficient FT to cover fees";}
    }

    function processTransfer2(Allowance) { //checks if user gave allowance to the bridge and forwards the request
      if(Allowance >= amount()){bridgeContract.methods.transfer(amount(), fee(), claimingFee(), to(), tokenAddressFrom()).send({from : accounts[0]});}
      else{approve(); document.getElementById("status").style.color = "blue"; document.getElementById("status").innerHTML = "Approving funds";}
    }
  

  

  async function getFTbalance() {
    return thisContract.methods.balanceOf(accounts[0]).call();
  }

  async function getBalance() {
    const contract = new web3.eth.Contract(ERC20abi, tokenAddressFrom());
    return contract.methods.balanceOf(accounts[0]).call();
  }
  async function getAllowance() {
    const contract = new web3.eth.Contract(ERC20abi, tokenAddressFrom());
    return contract.methods.allowance(accounts[0], bridge).call();
  }

  async function getDecimals() {
    const contract = new web3.eth.Contract(ERC20abi, token);
    return contract.methods.decimals().call();
  }

  function approve(){
    const contract = new web3.eth.Contract(ERC20abi, tokenAddressFrom());
    contract.methods.approve(bridge, 99999999999999).send({from : accounts[0]}).then(console.log);
  }

  function check(result) {
    console.log(result);
    if(!result){transferInProgress = false;}
  }

  function getName() {
    const contract = new web3.eth.Contract(ERC20abi, tokenAddressFrom());
    return contract.methods.name().call();
  }
  //var myVar1 = setInterval(getTokenAllowance, 1500);
  //var myVar2 = setInterval(allowanceCheck, 1500);
  //var myVar3 = setInterval(loadData, 1500);

  var myVar3 = setInterval(testoro, 1500);

  function testoro() {
    console.log(screen.width);
    //console.log(selectedToken);
  }

  function getTokenAllowance() {
    if(tokenAddressFrom() == "0x0000000000000000000000000000000000000000"){allowance = 99999999999999;}
    else{
      var contract = tokenAddressFrom();
      getAllowance().then(result => allowance = result);
    }
  }

  function allowanceCheck() {
    if(allowance < amount()){
      document.getElementById("submit").value = "Approve";
      document.getElementById("status").innerHTML = "";
    }
    else if(allowance >= amount()){
      document.getElementById("submit").value = "Transfer";
      document.getElementById("status").style.color = "green"; document.getElementById("status").innerHTML = "Ready For Transfer";}
  }

  function loadData() {
    getName().then(value => document.getElementById("tokenSymbol").innerHTML = value);
  }
