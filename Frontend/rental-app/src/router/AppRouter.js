import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddVehicle from '../components/AddVehicle';
import VehiclesList from '../components/VehiclesList';
import UseLocalStorage from '../hooks/UseLocalStorage';
import EditVehicle from '../components/EditVehicle';
import VehiclesContext from '../context/VehiclesContext';


const AppRouter = () => {
  const [vehicles, setVehicles] = UseLocalStorage('setVehicles', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <VehiclesContext.Provider value={{ vehicles, setVehicles }}>
            <Switch>
              <Route component={VehiclesList} path="/" exact={true} />
              <Route component={AddVehicle} path="/add" />
              <Route component={EditVehicle} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </VehiclesContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
