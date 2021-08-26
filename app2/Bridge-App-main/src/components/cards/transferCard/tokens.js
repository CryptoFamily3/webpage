import {
    baseURL,
    TETHER,
    BUSD,

    ETHBSC, BSCETH,
    POLBSC1, BSCPOL1,
    POLBSC, BSCPOL,
    ETHPOL, POLETH,
} from '../../../images';

export const tokens = [
    {
        id: 0,
        name: 'BUSD',
        iconurl: baseURL + BUSD
    },
    {
        id: 1,
        name: 'TETHER',
        iconurl: baseURL + TETHER
    },
    {
        id: 2,
        name: 'CFT',
        iconurl: baseURL + TETHER
    },

];

export const pairs = [
    {
        id: 0,
        name: "ETH / BSC",
        iconurl: baseURL + ETHBSC
    },
    {
        id: 1,
        name: "BSC / ETH",
        iconurl: baseURL + BSCETH
    },
    {
        id: 2,
        name: "POL / BSC",
        iconurl: baseURL + POLBSC
    },
    {
        id: 3,
        name: "BSC / POL",
        iconurl: baseURL + BSCPOL
    },
    {
        id: 4,
        name: "ETH / POL",
        iconurl: baseURL + ETHPOL
    },
    {
        id: 4,
        name: "POL / ETH",
        iconurl: baseURL + POLETH
    }
];
