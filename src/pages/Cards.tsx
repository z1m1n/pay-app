import CardModal from 'components/cards/CardModal';
import DeleteCardModal from 'components/cards/DeleteModal';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Table } from 'reactstrap';
import { Card } from 'store/actions/cards/types';
import { RootState } from 'store/types';

const CardsPage: FC = () => {
  const cards: Card[] = useSelector<RootState, Card[]>(state => state.cards);
  const [addCardOpen, setAddCardOpen] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<string>();
  const [editId, setEditId] = useState<string>();

  return (
    <div className="page page-cards">
      <div className="page-header with-actions">
        <h1>Saved Cards</h1>
        <div className="page-header-actions">
          <Button 
            color="primary"
            onClick={() => setAddCardOpen(true)}
          >
            Add Card
          </Button>
        </div>
      </div>
      <div className="page-content">
        <Table
          responsive={true}
          striped={true}
        >
          <thead>
            <tr>
              <th>Card</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {!cards.length && (
              <tr>
                <td colSpan={2}>
                  You have no cards yet
                </td>
              </tr>
            )}
            {cards.map((card: Card) => (
              <tr key={card.id}>
                <td>
                  {card.name}
                  {card.number}
                </td>
                <td>
                  <Button 
                    color="outline-primary"
                    onClick={() => setEditId(card.id)}
                  >
                    Edit
                  </Button>
                  <Button 
                    color="outline-danger"
                    onClick={() => setDeleteId(card.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <DeleteCardModal 
          isOpen={!!deleteId}
          toggle={() => setDeleteId(undefined)}
          deleteId={deleteId}
        />
        <CardModal
          title="Add Card"
          isOpen={addCardOpen}
          toggle={() => setAddCardOpen(false)}
        />
        <CardModal
          title="Edit Card"
          isOpen={!!editId}
          toggle={() => setEditId(undefined)}
          editId={editId}
        />
      </div>
    </div>
  )
};

export default CardsPage;
