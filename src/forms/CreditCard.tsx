import { Field, Formik } from "formik";
import { FC } from "react";
import { Form } from "reactstrap";
import FormError from 'components/form/Error';
import { fieldInvalidClass } from 'utils';
import SubmitArea from "components/form/SubmitArea";
import schema from "./CreditCard.schema";

export interface CreditCardFormFields {
  name: string;
  number: string;
  expiration: string;
  cvc?: string;
};

interface CreditCardFormProps {
  setSubmitForm: any;
  onSubmit(values: CreditCardFormFields): void;
  initialValues: CreditCardFormFields;
  showCVC?: boolean;
};

const CreditCardForm: FC<CreditCardFormProps> = (props: CreditCardFormProps) => {
  const { setSubmitForm, onSubmit, initialValues, showCVC = true } = props;

  return (
    <Formik<CreditCardFormFields>
      validationSchema={schema(showCVC)}
      enableReinitialize={true}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({
        values,
        touched,
        errors
      }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="name">
              Name on Card
            </label>
            <Field
              name="name"
              id="name"
              autoComplete="cc-name"
              className={`form-control ${fieldInvalidClass<CreditCardFormFields>(touched, errors, 'name')}`.trim()}
              placeholder="John Doe"
              value={values.name}
            />
            <FormError name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="number">
              Card Number
            </label>
            <Field 
              name="number"
              id="number"
              autoComplete="cc-number"
              className={`form-control ${fieldInvalidClass<CreditCardFormFields>(touched, errors, 'number')}`.trim()}
              placeholder="1234 1234 1234 1234"
            />
            <FormError name="number" />
          </div>
          <div className="row">
            <div className={showCVC ? 'col-6' : 'col-12'}>
              <div className="form-group">
                <label htmlFor="expiration">
                  Expiration
                </label>
                <Field 
                  name="expiration"
                  id="expiration"
                  autoComplete="cc-exp"
                  className={`form-control ${fieldInvalidClass<CreditCardFormFields>(touched, errors, 'expiration')}`.trim()}
                  placeholder="MM/YY"
                />
                <FormError name="expiration" />
              </div>
            </div>
            {showCVC && (
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="cvc">
                    CVC
                  </label>
                  <Field 
                    name="cvc"
                    id="cvc"
                    autoComplete="cc-csc"
                    className={`form-control ${fieldInvalidClass<CreditCardFormFields>(touched, errors, 'cvc')}`.trim()}
                    placeholder="CVC"
                  />
                  <FormError name="cvc" />
                </div>
              </div>
            )}
          </div>
          <SubmitArea
            setSubmitForm={setSubmitForm}
          />
        </Form>
      )}
    </Formik>
  );
};

export default CreditCardForm;