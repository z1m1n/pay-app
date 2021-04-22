
import CreditCardForm, { CreditCardFormFields } from 'forms/CreditCard';
import { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';
import { addCard, editCard } from 'store/actions/cards';
import { Card } from 'store/actions/cards/types';
import { RootState } from 'store/types';
import { uniqueId } from 'utils';

interface CardModalProps {
  title: string;
  isOpen: boolean;
  toggle(): void;
  editId?: string;
};

const FORM_EMPTY_VALUES = {
  name: '',
  number: '',
  expiration: '',
};

type CreditCardFields = Omit<CreditCardFormFields, 'cvc'>;

const CardModal: FC<CardModalProps> = (props: CardModalProps) => {
  const { title, isOpen, editId, toggle } = props;
  
  const dispatch = useDispatch();
  const cards: Card[] = useSelector<RootState, Card[]>(state => state.cards);
  
  const [formInitialValues, setFormInitialValues] = useState<CreditCardFields>(FORM_EMPTY_VALUES);
  const [submitForm, setSubmitForm] = useState<() => Promise<void>>(async () => {});

  const onSubmit = (values: CreditCardFields) => {
    if (editId) {
      dispatch(editCard({
        id: editId,
        ...values
      }));

      toggle();
      return;
    }

    dispatch(addCard({
      id: uniqueId(),
      ...values
    }));

    toggle();
  };

  useEffect(() => {
    if (!editId) return;

    const card: Card | undefined = cards.find((card: Card) => card.id === editId);
    
    if (card) {
      setFormInitialValues(card);
    }
  }, [editId, cards]);
  
  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
    >
      <ModalHeader toggle={toggle}>
        { title }
      </ModalHeader>
      <ModalBody>
        <CreditCardForm
          initialValues={formInitialValues}
          onSubmit={onSubmit}
          showCVC={false}
          setSubmitForm={setSubmitForm}
        />
      </ModalBody>
      <ModalFooter>
        <Button 
          color="outline-secondary"
          onClick={toggle}
        >
          Cancel
        </Button>
        <Button 
          color="primary"
          onClick={() => submitForm()}
        >
          {editId ? 'Save' : 'Add'}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CardModal;