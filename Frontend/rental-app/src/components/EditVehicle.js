import React, { useContext } from 'react';
import VehicleForm from './VehicleForm';
import { useParams } from 'react-router-dom';
import VehiclesContext from '../context/VehiclesContext';

const EditVechile = ({ history }) => {
  const { vehicles, setVehicles } = useContext(VehiclesContext);
  const { id } = useParams();
  const vehicleToEdit = vehicles.find((vehicle) => vehicle.id === id);

  const handleOnSubmit = (vehicle) => {
    const filteredvehicles = vehicles.filter((vehicle) => vehicle.id !== id);
    setVehicles([vehicle, ...filteredvehicles]);
    history.push('/');
  };

  return (
    <div>
      <VehicleForm vehicle={vehicleToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditVechile;
