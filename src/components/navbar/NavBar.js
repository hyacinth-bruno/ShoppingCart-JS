// // src/components/navbar/NavBar.js
// import { Link } from 'react-router-dom';
// import "./NavBar.css";
// import logo from '../../assets/logo.jpeg';

// // src/components/navbar/NavBar.js
// const NavBar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <img src={logo} alt="Logo" className="navbar-logo" />
//       </div>
//       <div className="navbar-menu">
//         <Link to="/">Home</Link>
//         <Link to="/cart">Cart</Link>
//       </div>
//     </nav>
//   );
// };
// export default NavBar;



import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <h1>Fashion</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
};

export default NavBar;
