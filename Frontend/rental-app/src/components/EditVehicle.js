import React from 'react';
import BookForm from './BookForm';
import { useParams } from 'react-router-dom';

const EditVechile = ({ history, vehicles, setVehicles }) => {
  const { id } = useParams();
  const VehicleToEdit = vehicles.find((vechile) => book.id === id);

  const handleOnSubmit = (vehicle) => {
    const filteredvehicles = vehicles.filter((vechile) => vechile.id !== id);
    setVehicles([vehicle, ...filteredvehicles]);
    history.push('/');
  };

  return (
    <div>
      <VehicleForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditVechile;