import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const VehicleForm = (props) => {
  const [vehicle, setVehicles] = useState({
    vehiclename: props.vehicle ? props.vehicle.vehiclename : '',
    model: props.vehicle ? props.vehicle.model : '',
    rentalprice: props.vehicle ? props.vehicle.rentalprice : '',
    hireDate: props.vehicle ? props.vehicle.hireDate : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { vehiclename, model, rentalprice } = vehicle;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [vehiclename, model, rentalprice];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const vehicle = {
        id: uuidv4(),
        vehiclename,
        model,
        rentalprice,
        date: new Date()
      };
      props.handleOnSubmit(vehicle);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'rentalprice':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
            setVehicles((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setVehicles((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Vehicle Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="vehiclename"
            value={vehiclename}
            placeholder="Enter name of Vehicle"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="model">
          <Form.Label>Vehicle Model</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="model"
            value={model}
            placeholder="Enter the model of vehicle"
            onChange={handleInputChange}
          />
        </Form.Group>
        
        <Form.Group controlId="rentalprice">
          <Form.Label>Rental Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="rentalprice"
            value={rentalprice}
            placeholder="Enter price of Vehicle"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default VehicleForm;