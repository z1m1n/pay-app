import { FC } from 'react';
import { useParams } from 'react-router';
import ChoosePayment from 'components/checkout/ChoosePayment';
import ApplePay from 'components/checkout/ApplePay';

interface ParamTypes {
  type?: string;
  id?: string;
};

const CheckoutPage: FC = () => {
  const { type, id } = useParams<ParamTypes>();

  return (
    <div className="page page-checkout">
      {!type && (
        <ChoosePayment />
      )}
      {type === 'apple' && (
        <ApplePay />
      )}
      {type === 'card' && (
        <div>
          card
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
