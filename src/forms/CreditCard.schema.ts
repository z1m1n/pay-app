import { ValidationMessage } from 'consts';
import * as yup from 'yup';

const schema = (showCVC: boolean) => yup.object({
  name: yup.string()
    .required(ValidationMessage.FIELD_REQUIRED),
  number: yup.number()
    .required(ValidationMessage.FIELD_REQUIRED)
    .test('len', ValidationMessage.CARD_NUMBER_LENGTH, (val?: number) => val ? val.toString().length === 16 : false)
    .typeError(ValidationMessage.ONLY_NUMBERS_ALLOWED),
  expiration: yup.string()
    .required(ValidationMessage.FIELD_REQUIRED)
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, ValidationMessage.EXPIRATION_FORMAT)
    .test('date', ValidationMessage.EXPIRATION_DATE, (val?: string) => {
      if (!val || val.length < 5) return false;

      const now: Date = new Date();
      const currentMonth: number = now.getMonth() + 1;
      const currentYear: number = +now.getFullYear().toString().substr(-2);

      const [month, year] = val.split('/');
      
      if (Number(year) < currentYear) return false;
      if (Number(month) < currentMonth && Number(year) <= currentYear) return false;
  
      return true;
    }),
  ...(showCVC && {
    cvc: yup.number().required(ValidationMessage.FIELD_REQUIRED)
      .test('len', ValidationMessage.CVC_NUMBER_LENGTH, (val?: number) => val ? val.toString().length === 3 : false)
      .typeError(ValidationMessage.ONLY_NUMBERS_ALLOWED)
  })
});

export default schema;