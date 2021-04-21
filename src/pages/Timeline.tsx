import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/types';
import { Payment } from 'store/actions/payments/types';
import { Table } from 'reactstrap';
import Icon from 'components/icon';

const TimelinePage: FC = () => {
  const payments: Payment[] = useSelector<RootState, Payment[]>(state => state.payments);

  return (
    <div className="page page-timeline">
      <div className="page-header">
        <h1>Timeline</h1>
      </div>
      <div className="page-content">
        <Table
          responsive={true}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Payment Type</th>
            </tr>
          </thead>
          <tbody>
            {!payments.length && (
              <tr>
                <td colSpan={2}>You have no payments yet</td>
              </tr>
            )}
            {payments.map((payment: Payment) => (
              <tr key={payment.id}>
                <td>{payment.name}</td>
                {payment.applePay && (
                  <td>
                    <Icon name="apple" />
                    Apple Pay
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default TimelinePage;
