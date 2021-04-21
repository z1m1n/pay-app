import { FC } from 'react';
import { useParams } from 'react-router';
import ChoosePayment, { PaymentType } from 'components/checkout/ChoosePayment';
import ApplePay from 'components/checkout/ApplePay';
import CreditCard from 'components/checkout/CreditCard';

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
      {type === PaymentType.ApplePay && (
        <ApplePay />
      )}
      {type === PaymentType.CreditCard && (
        <CreditCard 
          id={id} 
        />
      )}
    </div>
  );
};

export default CheckoutPage;
