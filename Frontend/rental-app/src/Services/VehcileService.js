// src/services/VehicleService.js
import axios from 'axios';


const API_URL = 'http://localhost:5241'; // Replace with your API URL

export const getVehicles = async () => {
    const response = await axios.get(API_URL)/api/Vehicle;
    return response.data.map(vehicle => new Vehicle(vehicle.id, ...vehicle)); // Convert API data to Vehicle objects
};

export const getVehicleById = async (id) => {
    const response = await axios.get(`<span class="math-inline">\{API\_URL\}/</span>{id}`);
    return new Vehicle(response.data.id, ...response.data);
};

export const createVehicle = async (vehicle) => {
    const response = await axios.post(API_URL, vehicle);
    return new Vehicle(response.data.id, ...response.data);
};

export const updateVehicle = async (id, updatedVehicle) => {
    const response = await axios.put(`<span class="math-inline">\{API\_URL\}/</span>{id}`, updatedVehicle);
    return new Vehicle(response.data.id, ...response.data);
};

export const deleteVehicle = async (id) => {
    await axios.delete(`<span class="math-inline">\{API\_URL\}/</span>{id}`);
};
