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
// import React from 'react';
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import Header from '../components/Header';
// import AddVehicle from '../components/AddVehicle';
// import VehiclesList from '../components/VehiclesList';
// import UseLocalStorage from '../hooks/UseLocalStorage';
// import EditVechile from '../components/EditVechile';
// // import VehiclesContext from '../context/VehiclesContext';

// const AppRouter = () => {
//   const [vehicles, setVehicles] = UseLocalStorage('vehicles', []);

//   return (
//     <BrowserRouter>
//       <div>
//         <Header />
//         <div className="main-content">
//           <VehiclesContext.Provider value={{ vehicles, setVehicles }}>
//             <Switch>
//               <Route component={VehiclesList} path="/" exact={true} />
//               <Route component={AddVehicle} path="/add" />
//               <Route component={EditVechile} path="/edit/:id" />
//               <Route component={() => <Redirect to="/" />} />
//             </Switch>
//           </VehiclesContext.Provider>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default AppRouter;
// // import React from 'react';
// // import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// // import Header from '../components/Header';
// // import AddVehicle from '../components/AddVehicle';
// // import VehicleList from '../components/VehicleList';
// // import useLocalStorage from '../hooks/UseLocalStorage';
// // import EditVechile from '../components/EditVehicle';

// // const AppRouter = () => {
// //   const [vehicles, setVehicles] = useLocalStorage('vehicles', []);

// //   return (
// //     <BrowserRouter>
// //       <div>
// //         <Header />
// //         <div className="main-content">
// //           <Switch>
// //           <Route
// //               render={(props) => (
// //                 <VehicleList {...props} vehicles={vehicles} setVehicles={setVehicles} />
// //               )}
// //               path="/"
// //               exact={true}
// //             />
// //             <Route
// //               render={(props) => (
// //                 <AddVehicle {...props} vehicles={vehicles} setVehicles={setVehicles} />
// //               )}
// //               path="/add"
// //             />
// //             <Route
// //             render={(props) => (
// //               <EditVechile {...props} vehicles={vehicles} setVehicles={setVehicles} />
// //             )}
// //             path="/edit/:id"
// //           />
// //           <Route component={() => <Redirect to="/" />} />
// //           </Switch>
// //         </div>
// //       </div>
// //     </BrowserRouter>
// //   );
// // };

// // export default AppRouter;

// // import React from 'react';
// // import { BrowserRouter, Route, Switch } from 'react-router-dom';
// // //import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
// // import Header from '../components/Header';
// // import AddVehicle from '../components/AddVehicle';
// // import VehicleList from '../components/VehicleList';
// // import useLocalStorage from '../hooks/UseLocalStorage';


// // const AppRouter = () => {
// //   const [vehicles, setVehicles] = useLocalStorage('vehicles', []);
// //   return (
// //     <BrowserRouter>
// //       <div>
// //         <Header />
// //         <div className="main-content">
// //           <Switch>
// //             <Route 
// //             render = {(props)=>(<VehicleList {...props} vehicles={vehicles} setVehicles={setVehicles}/>)} path="/" exact={true} />
// //             <Route
// //                render={(props) => (
// //                 <AddVehicle {...props} vehicles={vehicles} setVehicles={setVehicles} />
// //                     )}
// //                     path="/add"
// //                   />
// //           </Switch>
// //         </div>
// //       </div>
// //     </BrowserRouter>
// //   );
// // };

// // export default AppRouter;