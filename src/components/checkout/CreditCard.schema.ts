import * as yup from 'yup';

export default yup.object({
  name: yup.string().required('This field is required'),
  number: yup.string().required('This field is required'),
  expiration: yup.string().required('This field is required'),
  cvc: yup.string().required('This field is required')
});