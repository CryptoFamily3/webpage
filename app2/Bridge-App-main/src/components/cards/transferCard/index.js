import {useState, useEffect} from 'react';

import Dropdown from '../../base/dropdown';
import QuestionMarkHover from '../../base/questionmarkHover';

import transferSchema from './validationSchema';

import {start_transfer_tx, approveUnlimited_spender_tx} from '../../../redux/actions/txActions';
import {connect} from 'react-redux';

import { useFormik } from 'formik';

import {tokens, pairs} from './tokens';

import {getAllowanceByTokenName} from '../../../utils/utils';
import {token_db} from '../../../bd/token';

import './transferCard.scss';

const TransferCard = props => {

    const {txReducer, web3Reducer, wallet} = props;
    const {contracts} = web3Reducer;
    const [approved, setApproved] = useState(true);

    const formik = useFormik({
        initialValues: {
            token: '',
            pair: '',
            receiver: '',
            ammount: '',
            fee: '',
            feeToken: '',
            extraFee: 0,
        },
        validationSchema: transferSchema,
        onSubmit: async values => {
            //console.log(values);

            const allowanceVal = await getAllowanceByTokenName(
                values.token,
                wallet.currentAccount,
                contracts["bridge"].options.address
            );

            if(allowanceVal > 0){
                setApproved(true);
                props.start_transfer_tx(values);
            }
            else
                setApproved(false);
        }

    });

    const approveClicked = async (e, values) => {

        try {
            await props.approveUnlimited_spender_tx({
                token: values.token,
                spender: contracts["bridge"].options.address
            });
            setApproved(true);
        } catch (e) {

        }

    }

    return(
        <div className="box has-background-primary-half transfer-card">

            <form id="form" onSubmit={formik.handleSubmit}>

                <div className="field">
                    <div className="level mb-1 is-mobile is-mobile">
                        <div className="level-left">
                            <label className="label has-text-white is-size-4 has-text-weight-normal">Token:</label>
                        </div>
                        <div className="level-right">
                            <QuestionMarkHover>The token you want to transfer.</QuestionMarkHover>
                        </div>
                    </div>
                    <Dropdown
                        name="token"
                        options={tokens}
                        valueName="token"
                        formik={formik}
                    />
                    {formik.touched.token && formik.errors.token ? <div className="help is-danger"> {formik.errors.token}</div> : null }
                </div>


                <div className="field">
                    <div className="level mb-1 is-mobile">
                        <div className="level-left">
                            <label className="label has-text-white is-size-4 has-text-weight-normal">Pair:</label>
                        </div>
                        <div className="level-right">
                            <QuestionMarkHover>The blockchains you want to transfer from and to.</QuestionMarkHover>
                        </div>
                    </div>

                    <Dropdown
                        name="pair"
                        options={pairs}
                        valueName="pair"
                        formik={formik}
                    />
                    {formik.touched.pair && formik.errors.pair ? <div className="help is-danger"> {formik.errors.pair}</div> : null }
                </div>


                <div className="field">
                    <div className="level mb-1 is-mobile">
                        <div className="level-left">
                            <label className="label has-text-white is-size-4 has-text-weight-normal">Transfer to:</label>
                        </div>
                        <div className="level-right">

                            <QuestionMarkHover>The address you want to transfer the funds to.</QuestionMarkHover>
                        </div>
                    </div>
                    <div className="control">
                        <input className="input has-input-background has-text-white bordered" type="text" style={{height: '45px'}} name="receiver" onChange={formik.handleChange} value={formik.values.receiver}/>
                        {formik.touched.receiver && formik.errors.receiver ? <div className="help is-danger"> {formik.errors.receiver}</div> : null }
                    </div>
                </div>


                <div className="field">
                    <div className="level mb-1 is-mobile">
                        <div className="level-left">
                            <label className="label has-text-white is-size-4 has-text-weight-normal">Amount:</label>
                        </div>
                        <div className="level-right">
                            <QuestionMarkHover>The amount of funds you want to transfer.</QuestionMarkHover>
                        </div>
                    </div>
                    <div className="control">
                        <input className="input has-input-background has-text-white bordered" type="text"  style={{height: '45px'}} name="ammount" onChange={formik.handleChange} value={formik.values.ammount}/>
                        {formik.touched.ammount && formik.errors.ammount ? <div className="help is-danger"> {formik.errors.ammount}</div> : null }
                    </div>
                </div>


                <div className="field">
                    <div className="columns is-mobile">
                        <div className="column">
                            <div className="level mb-1 is-mobile">
                                <div className="level-left">
                                    <label className="label has-text-white is-size-4 has-text-weight-normal">Transaction fee:</label>
                                </div>
                                <div className="level-right">
                                    <QuestionMarkHover>Transaction fee of this transfer.<br/><br/>The transaction fee can be paid with the bridges coin (FT), or a token of your choice.<br/><br/>NOTE: Not all tokens are supported.<br/><br/>Minimum fee: 1 FT</QuestionMarkHover>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="columns is-mobile">
                        <div className="column">
                            <div className="control">
                                <input className="input has-input-background has-text-white bordered" type="text" style={{height: '45px'}} name="fee" onChange={formik.handleChange} value={formik.values.fee}/>
                                {formik.touched.fee && formik.errors.fee ? <div className="help is-danger"> {formik.errors.fee}</div> : null }
                            </div>
                        </div>

                        <div className="column">
                            <Dropdown
                                name="feeToken"
                                options={tokens}
                                valueName="feeToken"
                                formik={formik}
                            />
                            {formik.touched.feeToken && formik.errors.feeToken ? <div className="help is-danger"> {formik.errors.feeToken}</div> : null }
                        </div>
                    </div>
                </div>


                <div className="field">
                    <div className="level mb-1 is-mobile">
                        <div className="level-left">
                            <label className="label has-text-white is-size-4 has-text-weight-normal">Extra fee:</label>
                        </div>
                        <div className="level-right">
                            <QuestionMarkHover>Some custom tokens require an extra fee.<br/><br/>This can be left blank if the token you are transfering is a regular BEP20 token.</QuestionMarkHover>
                        </div>
                    </div>
                    <div className="control">
                        <input className="input has-input-background has-text-white bordered" type="text"  style={{height: '45px'}} name="extraFee"  onChange={formik.handleChange} value={formik.values.extraFee}/>
                    </div>
                </div>

                <br/>

                <div className="field">
                    <div className="control has-text-centered">
                        {
                            approved ?
                            <button className="button is-button-color is-large transfer-btn px-6" type="submit" >
                                <div>
                                    <span>Transfer</span>
                                    <span className="icon">
                                        <i className="fas fa-arrow-right"></i>
                                    </span>
                                </div>
                            </button>
                            :
                            <button className="button is-button-color is-large transfer-btn px-6" type="button" onClick={ e => approveClicked(e, formik.values)}>
                                <span>Approve</span>
                            </button>
                        }
                    </div>
                </div>

            </form>

        </div>
    );
}

const mapStateToProps = state => ({
    txReducer: state.txReducer,
    web3Reducer: state.web3Reducer,
    wallet: state.walletReducer
});

export default connect(
    mapStateToProps,
    {
        start_transfer_tx,
        approveUnlimited_spender_tx
    }
)(TransferCard);
