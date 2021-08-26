import store from '../redux/store';
import {set_web3_instance, set_accounts, add_contract} from '../redux/actions/web3Actions';
import {
    set_metamask_installed,
    set_connection,
    set_current_account,
    set_networkd_id
} from '../redux/actions/walletActions';

import Web3 from 'web3';

import bridgeABI from '../abis/bridge.json';
import erc20ABI from '../abis/ERC20.json';
import l2ABI from '../abis/ERC20.json';

import {ETH_ADDRESSES, BSC_ADDRESSES} from './addresses';

const initWeb3 = async () => {

    if(typeof window.ethereum !== 'undefined'){


        const ethereum = window.ethereum;
        store.dispatch( set_metamask_installed(true) );

        //instance web3
        const web3 = await new Web3(ethereum);
        store.dispatch( set_web3_instance(web3) );

        //instance contracts
        const bridge = new web3.eth.Contract(bridgeABI, '0x79e78D7a86638dc898DBC97987324B8d42fC0326');
        store.dispatch( add_contract("bridge", bridge) );

        //detect if metamask is connected to site
        const accArr = await web3.eth.getAccounts();
        if(accArr.length == 0) store.dispatch( set_connection(false) );
        else{
             store.dispatch( set_connection(true) );
             store.dispatch( set_current_account(accArr[0]) );
        }

        //listen to eth change events
        ethereum.on('accountsChanged', accounts => {
            console.log('accounts: ' + accounts);
            if(accounts.length > 0)
                store.dispatch( set_current_account(accounts[0]) );
            else{
                store.dispatch( set_connection(false) );
                store.dispatch( set_current_account('') );
            }

        });


        ethereum.on('connect', accounts => {
            store.dispatch( set_current_account(accounts[0]) );
        });

        ethereum.on('disconnect', error => {
            console.log(error);
        })


        ethereum.on('chainChanged', chainId => {
            console.log(chainId);
            store.dispatch( set_networkd_id(chainId) );

            console.log(store.getState());

        });

    }
}


export {initWeb3};
