import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { makePayment } from 'store/actions/payments';
import { uniqueId } from 'utils';
import { Payment } from 'store/actions/payments/types';
import { Card } from 'store/actions/cards/types';
import { addCard } from 'store/actions/cards';
import { useHistory } from 'react-router';
import { RootState } from 'store/types';
import CreditCardForm, { CreditCardFormFields } from 'forms/CreditCard';

interface CreditCardProps {
  id?: string;
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

  const [submitForm, setSubmitForm] = useState<() => Promise<void>>(async () => {});
  const [selectedCard, setSelectedCard] = useState<Card>();
  const [formInitialValues, setFormInitialValues] = useState<CreditCardFormFields>(FORM_EMPTY_VALUES);

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

  const onSubmit = (values: CreditCardFormFields) => {
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
    <div className="page-content">
      <CreditCardForm 
        initialValues={formInitialValues}
        onSubmit={onSubmit}
        setSubmitForm={setSubmitForm}
      />
    </div>
    <div className="page-buttons">
      <Button
        color="primary"
        block
        onClick={submitForm}
      >
        Pay
      </Button>
    </div>
  </>;
};

export default CreditCard;