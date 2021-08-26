import {
    SET_TX_DATA
} from '../constants';

const defaultState = {
    loading: true,
    error: false,
    result: {},
    txData: {}
};

const reducer = (state = defaultState, action) => {

    switch (action.type) {

        case SET_TX_DATA:
            return{
                ...state,
                txData: action.payload
            };

        default:
            return {...state};

    }

};

export default reducer;
