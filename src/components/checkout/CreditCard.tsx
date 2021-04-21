import FormError from 'components/form/Error';
import { Field, Form, Formik } from 'formik';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { makePayment } from 'store/actions/payments';
import { fieldInvalidClass, uniqueId } from 'utils';
import schema from './CreditCard.schema';
import { Payment } from 'store/actions/payments/types';
import { Card } from 'store/actions/cards/types';
import { addCard } from 'store/actions/cards';
import { useHistory } from 'react-router';
import { RootState } from 'store/types';

interface CreditCardProps {
  id?: string;
};

interface CreditCardForm {
  name: string;
  number: string;
  expiration: string;
  cvc: string; 
};

const FORM_EMPTY_VALUES = {
  name: '',
  number: '',
  expiration: '',
  cvc: ''
};

const CreditCard: FC<CreditCardProps> = ({ id }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cards: Card[] = useSelector<RootState, Card[]>(state => state.cards);

  const [selectedCard, setSelectedCard] = useState<Card>();
  const [formInitialValues, setFormInitialValues] = useState<CreditCardForm>(FORM_EMPTY_VALUES);

  useEffect(() => {
    if (!id) return;

    const card: Card | undefined = cards.find((card: Card) => card.id === id);
    
    if (card) {
      setSelectedCard(card);
      setFormInitialValues({
        ...card,
        cvc: ''
      });
    }
  }, [id, cards]);

  const onSubmit = (values: CreditCardForm) => {
    const card: Card = selectedCard ?? {
      id: uniqueId(),
      ...values
    };

    const payment: Payment = {
      id: uniqueId(),
      card: card,
      name: card.name,
      applePay: false
    };

    if (!selectedCard) {
      dispatch(addCard(card));
    }

    dispatch(makePayment(payment));

    history.replace('/timeline');
  };

  return <>
    <div className="page-header">
      <h1>Pay with Card</h1>
    </div>
    <Formik<CreditCardForm>
      validationSchema={schema}
      enableReinitialize={true}
      initialValues={formInitialValues}
      onSubmit={onSubmit}
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
              block
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