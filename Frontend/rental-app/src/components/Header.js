import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Vehicle Rental Management System</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          vehicles List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Vehicle
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
// import React from 'react';
// import { NavLink } from 'react-router-dom';


// const Header = () => {
//   return (
//     <header>
//       <h1>RENTAL MANAGEMENT APP</h1>
//       <hr />
//       <div className="links">
    
//         <NavLink to="/" className="link" activeClassName="active" exact>
//           Vehicle List
//         </NavLink>
//         <NavLink to="/add" className="link" activeClassName="active">
//           Add Vehicle
//         </NavLink>
//       </div>
//     </header>
//   );
// };

// export default Header;