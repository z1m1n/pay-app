import { ValidationMessage } from 'consts';
import * as yup from 'yup';

export default yup.object({
  name: yup.string().required(ValidationMessage.FIELD_REQUIRED),
  number: yup.string().required(ValidationMessage.FIELD_REQUIRED),
  expiration: yup.string().required(ValidationMessage.FIELD_REQUIRED),
  cvc: yup.string().required(ValidationMessage.FIELD_REQUIRED)
});