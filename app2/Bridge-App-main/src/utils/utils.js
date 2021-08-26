import store from '../redux/store';
import {token_db} from '../bd/token';


const ERC20ABI = require('../abis/ERC20.json');

export const getDecimals = async (contractAddress) =>  {
    const web3 = getWeb3Instance();

    console.log(contractAddress);
    const contract = new web3.eth.Contract(ERC20ABI, contractAddress);
    return await contract.methods.decimals().call();
}

export const getAllowance = async (contractAddress, owner, spender) => {
    const web3 = getWeb3Instance();
    const contract = new web3.eth.Contract(ERC20ABI, contractAddress);
    return await contract.methods.allowance(owner, spender).call();
}

export const getAllowanceByTokenName = async (tokenName, owner, spender) => {
    const web3 = getWeb3Instance();
    const contract = new web3.eth.Contract(ERC20ABI, token_db.get(tokenName.toLowerCase()).address);
    return await contract.methods.allowance(owner, spender).call();
}


const getWeb3Instance = () => {
    return store.getState().web3Reducer.web3;
}
