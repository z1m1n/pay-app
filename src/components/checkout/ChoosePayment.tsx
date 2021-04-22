import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { RootState } from 'store/types';
import { Card } from 'store/actions/cards/types';
import { useHistory } from 'react-router';
import { maskCardNumber } from 'utils';

export enum PaymentType {
  CreditCard = 'card',
  ApplePay = 'apple',
  SavedCard = 'saved-card'
};

const ChoosePayment: FC = () => { 
  const history = useHistory();
  const cards: Card[] = useSelector<RootState, Card[]>(state => state.cards);
  const [selectedPayment, setSelectedPayment] = useState<PaymentType>(PaymentType.CreditCard);
  const [selectedCard, setSelectedCard] = useState<Card>();

  useEffect(() => {
    if (selectedPayment !== PaymentType.SavedCard) {
      setSelectedCard(undefined);
    }
  }, [selectedPayment]);

  const goToCheckout = (): void => {
    if (selectedPayment === PaymentType.SavedCard && selectedCard) {
      history.push(`/checkout/${PaymentType.CreditCard}/${selectedCard.id}`);
      return;
    }

    history.push(`/checkout/${selectedPayment}`);
  };

  return <>
    <div className="page-header">
      <h1>Choose a Payment</h1>
    </div>
    <div className="page-content">
      <div className="form-group">
        <select
          value={selectedPayment}
          onChange={e => setSelectedPayment(e.target.value as PaymentType)}
          className="form-control"
        >
          <option 
            value={PaymentType.CreditCard}
          >
            Credit Card
          </option>
          <option 
            value={PaymentType.ApplePay}
          >
            Apple Pay
          </option>
          <option 
            value={PaymentType.SavedCard} 
            disabled={!cards.length}
          >
            Saved Card
          </option>
        </select>
      </div>
      {selectedPayment === PaymentType.SavedCard && (
        <div className="form-group">
          <select
            value={selectedCard?.id ?? ''}
            onChange={e => setSelectedCard(cards.find((card: Card) => card.id === e.target.value))}
            className="form-control"
          >
            <option>Select Card</option>
            {cards.map((card: Card) => (
              <option
                value={card.id}
                key={card.id}
              >
                {maskCardNumber(card.number)}
              </option>           
            ))}
          </select>
        </div>
      )}
    </div>
    <div className="page-buttons">
      <Button
        color="primary"
        block
        disabled={selectedPayment === PaymentType.SavedCard && !selectedCard}
        onClick={goToCheckout}
      >
        Continue to Checkout
      </Button>
    </div>
  </>;
};

export default ChoosePayment;