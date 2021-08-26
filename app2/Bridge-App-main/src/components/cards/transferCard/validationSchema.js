import * as Yup from 'yup';

 const transferSchema = Yup.object().shape({
     token: Yup.string().required(),
     pair: Yup.string().required(),
     receiver: Yup.string().required(),
     ammount: Yup.number().positive().required(),
     fee: Yup.number().positive().required(),
     feeToken: Yup.string().required(),
     extraFee: Yup.number().required()

 });

export default transferSchema;
