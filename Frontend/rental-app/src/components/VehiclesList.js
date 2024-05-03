import React, { useContext } from 'react';
import _ from 'lodash';
import Vehicle from './Vehicle';
import VehiclesContext from '../context/VehiclesContext';

const VehiclesList = () => {
  const { vehicles, setVehicles } = useContext(VehiclesContext);

  const handleRemoveVehicle = (id) => {
    setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
  };

  return (
    <React.Fragment>
      <div className="Vehicle-list">
        {!_.isEmpty(vehicles) ? (
          vehicles.map((vehicle) => (
            <Vehicle key={vehicle.id} {...vehicle} handleRemoveVehicle={handleRemoveVehicle} />
          ))
        ) : (
          <p className="message">No Vehicles available.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default VehiclesList;
// import React from 'react';
// import _ from 'lodash';
// import Vehicle from './Vehicle';

// const VehicleList = ({ Vehicles, setVehicles }) => {

//   const handleRemoveBook = (id) => {
//     setVehicles(Vehicles.filter((vehicle) => vehicle.id !== id));
//   };

//   return (
//     <React.Fragment>
//       <div className="vechile-list">
//         {!_.isEmpty(Vehicles) ? (
//           Vehicles.map((vehicle) => (
//             <Vehicle key={vehicle.id} {...vehicle} handleRemoveBook={handleRemoveBook} />
//           ))
//         ) : (
//           <p className="message">No books available. Please add some books.</p>
//         )}
//       </div>
//     </React.Fragment>
//   );
// };

// export default VehicleList;