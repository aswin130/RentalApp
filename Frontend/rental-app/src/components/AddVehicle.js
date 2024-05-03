import React from 'react';
import VehicleForm from './VehicleForm';

const AddVehicle = ({ history, vehicles, setVehicles }) => {
  const handleOnSubmit = (vehicle) => {
    setVehicles([vehicle, ...vehicles]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <VehicleForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddVehicle;
