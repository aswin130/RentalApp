import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddVehicle from '../components/AddVehicle';
import VehicleList from '../components/VehicleList';
import useLocalStorage from '../hooks/UseLocalStorage';

const AppRouter = () => {
  const [vehicles, setVehicles] = useLocalStorage('vehicles', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
          <Route
              render={(props) => (
                <VehicleList {...props} vehicles={vehicles} setVehicles={setVehicles} />
              )}
              path="/"
              exact={true}
            />
            <Route
              render={(props) => (
                <AddVehicle {...props} vehicles={vehicles} setVehicles={setVehicles} />
              )}
              path="/add"
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;

// import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// //import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
// import Header from '../components/Header';
// import AddVehicle from '../components/AddVehicle';
// import VehicleList from '../components/VehicleList';
// import useLocalStorage from '../hooks/UseLocalStorage';


// const AppRouter = () => {
//   const [vehicles, setVehicles] = useLocalStorage('vehicles', []);
//   return (
//     <BrowserRouter>
//       <div>
//         <Header />
//         <div className="main-content">
//           <Switch>
//             <Route 
//             render = {(props)=>(<VehicleList {...props} vehicles={vehicles} setVehicles={setVehicles}/>)} path="/" exact={true} />
//             <Route
//                render={(props) => (
//                 <AddVehicle {...props} vehicles={vehicles} setVehicles={setVehicles} />
//                     )}
//                     path="/add"
//                   />
//           </Switch>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default AppRouter;