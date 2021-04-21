import FormError from 'components/form/Error';
import { Field, Form, Formik } from 'formik';
import { FC, useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { fieldInvalidClass } from 'utils';
import schema from './CreditCard.schema';

interface CreditCardProps {
  id?: string;
};

interface CreditCardForm {
  name: string;
  number: string;
  expiration: string;
  cvc: string; 
};

const CreditCard: FC<CreditCardProps> = ({ id }) => {
  const [formInitialValues, setFormInitialValues] = useState<CreditCardForm>({
    name: '',
    number: '',
    expiration: '',
    cvc: ''
  });

  useEffect(() => {
    if (!id) return;

    //setFormInitialValues();
  }, [id]);

  return <>
    <div className="page-header">
      <h1>Pay with Card</h1>
    </div>
    <Formik<CreditCardForm>
      validationSchema={schema}
      enableReinitialize={true}
      initialValues={formInitialValues}
      onSubmit={(values, actions) => {
        console.log(values)
      }}
    >
      {({
        values,
        touched,
        errors
      }) => (
        <Form>
          <div className="page-content">
            <div className="form-group">
              <label htmlFor="name">
                Name on Card
              </label>
              <Field 
                name="name"
                id="name"
                autoComplete="cc-name"
                className={`form-control ${fieldInvalidClass<CreditCardForm>(touched, errors, 'name')}`.trim()}
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
                className={`form-control ${fieldInvalidClass<CreditCardForm>(touched, errors, 'number')}`.trim()}
                placeholder="1234 1234 1234 1234"
              />
              <FormError name="number" />
            </div>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="expiration">
                    Expiration
                  </label>
                  <Field 
                    name="expiration"
                    id="expiration"
                    autoComplete="cc-exp"
                    className={`form-control ${fieldInvalidClass<CreditCardForm>(touched, errors, 'expiration')}`.trim()}
                    placeholder="MM/YY"
                  />
                  <FormError name="expiration" />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="cvc">
                    CVC
                  </label>
                  <Field 
                    name="cvc"
                    id="cvc"
                    autoComplete="cc-csc"
                    className={`form-control ${fieldInvalidClass<CreditCardForm>(touched, errors, 'cvc')}`.trim()}
                    placeholder="CVC"
                  />
                  <FormError name="cvc" />
                </div>
              </div>
            </div>
          </div>
          <div className="page-buttons">
            <Button
              type="submit" 
              color="primary"
            >
              Pay
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  </>;
};

export default CreditCard;