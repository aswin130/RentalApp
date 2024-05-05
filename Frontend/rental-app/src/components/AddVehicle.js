import React, { useContext } from 'react';
import VehicleForm from './VehicleForm';
import VehiclesContext from '../context/VehiclesContext';

const AddVehicle = ({ history}) => {
  const {vehicles, setVehicles} = useContext(VehiclesContext);
  
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
