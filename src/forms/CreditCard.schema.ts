import { ValidationMessage } from 'consts';
import * as yup from 'yup';

const schema = (showCVC: boolean) => yup.object({
  name: yup.string().required(ValidationMessage.FIELD_REQUIRED),
  number: yup.string().required(ValidationMessage.FIELD_REQUIRED),
  expiration: yup.string().required(ValidationMessage.FIELD_REQUIRED),
  ...(showCVC && {
    cvc: yup.string().required(ValidationMessage.FIELD_REQUIRED)
  })
});

export default schema;