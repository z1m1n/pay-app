import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Button, Table } from 'reactstrap';
import { Card } from 'store/actions/cards/types';
import { RootState } from 'store/types';

const CardsPage: FC = () => {
  const cards: Card[] = useSelector<RootState, Card[]>(state => state.cards);

  return (
    <div className="page page-cards">
      <div className="page-header">
        <h1>Saved Cards</h1>
        <div className="page-header-actions">
          <Button color="primary">
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
                  <Button color="outline-primary">
                    Edit
                  </Button>
                  <Button color="outline-danger">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )
};

export default CardsPage;
