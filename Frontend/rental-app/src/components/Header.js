import React from 'react';
import { Link } from 'react-router-dom'; // For navigation links


const AppleHeader = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src="apple-logo.svg" alt="Apple Logo" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/mac">Mac</Link>
            </li>
            <li>
              <Link to="/iphone">iPhone</Link>
            </li>
            <li>
              <Link to="/ipad">iPad</Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
        {/* Add search bar or other elements here */}
      </div>
    </header>
  );
};

export default AppleHeader;
