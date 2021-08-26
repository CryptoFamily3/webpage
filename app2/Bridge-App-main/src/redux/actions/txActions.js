import {
    SET_TX_DATA
} from '../constants';

import axios from 'axios';
import {getDecimals, getAllowance} from '../../utils/utils';
import {token_db} from '../../bd/token';
import ERC20ABI from '../../abis/ERC20.json';


const MAX_INT = '115792089237316195423570985008687907853269984665640564039457584007913129639935';


export const approveUnlimited_spender_tx = txData => {
    return async (dispatch, getState) => {

        const {web3Reducer, walletReducer} = getState();
        const {web3, contracts} = web3Reducer;
        const {token, spender} = txData;

        const erc20_contract = new web3.eth.Contract(ERC20ABI, token_db.get(token.toLowerCase()).address );
        const decimals = await erc20_contract.methods.decimals().call();

        const tx = await erc20_contract.methods.approve(spender, MAX_INT);

        try {
            await tx.send({
                from: walletReducer.currentAccount
            });
        } catch (e){ throw e;}
    }
}


export const start_transfer_tx = txData => {


    return async (dispatch, getState) => {



        const {receiver, ammount, extraFee, fee, pair, token} = txData;
        const {web3Reducer, walletReducer} = getState();
        const {web3, accounts, contracts} = web3Reducer;

        //get token data: address, decimals and allowance
        const tokenData = token_db.get(token.toLowerCase());
        const decimals = await getDecimals(tokenData.address);


        if(!tokenData.l2){

        }
        else{

        }


        // console.log(decimals);

        const tx = await contracts["bridge"].methods.transfer(
            receiver,
            "0x0000000000000000000000000000000000000000",
            (ammount * 10 ** decimals).toString(),
            (fee * 10 ** decimals).toString(),
            (extraFee * 10 ** decimals).toString()
        );

        const gas = await tx.estimateGas({
            from: walletReducer.currentAccount
        });

        try {
            await tx.send({
                from: walletReducer.currentAccount,
                gas
            });
            //console.log('successful tx');

        } catch (e) {

        }

    }
}
