import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from 'store/actions/cards';
import { RootState } from 'store/types';

const CheckoutPage: FC = () => {
  const dispatch = useDispatch();
  const payload = useSelector((state: RootState) => state.cards);

  console.log(payload);
  return (
    <div>
      <button onClick={() => dispatch(addCard({ id: '1'}))}>
        buttons
      </button>
    </div>
  );
};

export default CheckoutPage;
