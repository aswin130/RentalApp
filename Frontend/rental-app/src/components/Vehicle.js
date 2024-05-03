import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Vehicle = ({
  id,
  vehiclename,
  model,
  rentalprice,
  date,
  handleRemoveBook
}) => {
    const history = useHistory();
  return (
    <Card style={{ width: '18rem' }} className="vehicle">
      <Card.Body>
        <Card.Title className="vehicle-title">{vehiclename}</Card.Title>
        <div className="vehicle-details">
          <div>Model: {model}</div>
          <div>Rental Price: {rentalprice} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}> Edit</Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveBook(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Vehicle;