import Icon from 'components/Icon';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Button } from 'reactstrap';
import { makePayment } from 'store/actions/payments';
import { Payment } from 'store/actions/payments/types';
import { uniqueId } from 'utils';

import './ApplePay.scss';

const ApplePay: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const payWithApplePay = () => {
    const payment: Payment = {
      id: uniqueId(),
      name: 'Konstantin Zimin',
      applePay: true
    };

    dispatch(makePayment(payment));

    history.replace('/timeline')
  };

  return (
    <div className="apple-pay-container">
      <div className="apple-pay">
        <div className="page-header">
          <h1>Pay with Apple Pay</h1>
        </div>
        <div className="page-content">
          <Button
            block
            color="primary"
            onClick={payWithApplePay}
          >
            <Icon name="apple" />
            Pay
          </Button>
        </div>
      </div>
    </div>
  )
};

export default ApplePay;
