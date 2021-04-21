import FormError from 'components/form/Error';
import { Field, Form, Formik } from 'formik';
import { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';
import { addCard, editCard } from 'store/actions/cards';
import { Card } from 'store/actions/cards/types';
import { RootState } from 'store/types';
import { fieldInvalidClass, uniqueId } from 'utils';
import schema from './CardModal.schema';

interface CardModalProps {
  title: string;
  isOpen: boolean;
  toggle(): void;
  editId?: string;
};

interface CardForm {
  name: string;
  number: string;
  expiration: string;
};

const FORM_EMPTY_VALUES = {
  name: '',
  number: '',
  expiration: '',
};

const CardModal: FC<CardModalProps> = (props: CardModalProps) => {
  const { title, isOpen, editId, toggle } = props;
  
  const dispatch = useDispatch();
  const cards: Card[] = useSelector<RootState, Card[]>(state => state.cards);
  
  const [formInitialValues, setFormInitialValues] = useState<CardForm>(FORM_EMPTY_VALUES);
  
  const onSubmit = (values: CardForm) => {
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
      <Formik<CardForm>
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
          <ModalHeader toggle={toggle}>
            { title }
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label htmlFor="name">
                Name on Card
              </label>
              <Field 
                name="name"
                id="name"
                autoComplete="cc-name"
                className={`form-control ${fieldInvalidClass<CardForm>(touched, errors, 'name')}`.trim()}
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
                className={`form-control ${fieldInvalidClass<CardForm>(touched, errors, 'number')}`.trim()}
                placeholder="1234 1234 1234 1234"
              />
              <FormError name="number" />
            </div>
            <div className="form-group">
              <label htmlFor="expiration">
                Expiration
              </label>
              <Field 
                name="expiration"
                id="expiration"
                autoComplete="cc-exp"
                className={`form-control ${fieldInvalidClass<CardForm>(touched, errors, 'expiration')}`.trim()}
                placeholder="MM/YY"
              />
              <FormError name="expiration" />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button 
              color="outline-secondary"
              onClick={toggle}
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              color="primary"
            >
              {editId ? 'Save' : 'Add'}
            </Button>
          </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CardModal;