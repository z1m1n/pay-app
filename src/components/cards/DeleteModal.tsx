import { FC } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { deleteCard } from 'store/actions/cards';

interface DeleteCardModalProps {
  isOpen: boolean;
  toggle(): void;
  deleteId?: string;
};

const DeleteCardModal: FC<DeleteCardModalProps> = ({ isOpen, toggle, deleteId }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    if (!deleteId) return;

    dispatch(deleteCard(deleteId));
    toggle();
  };

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
    >
      <ModalHeader toggle={toggle}>
        Confirm delete
      </ModalHeader>
      <ModalBody>
        Are you sure you want to delete this card? 
      </ModalBody>
      <ModalFooter>
        <Button 
          color="outline-secondary"
          onClick={toggle}
        >
          Cancel
        </Button>
        <Button 
          color="danger"
          onClick={onDelete}
        >
          Delete
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteCardModal;