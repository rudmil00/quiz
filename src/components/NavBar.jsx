import React from 'react';

import { Link } from "react-router-dom";



const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">

      <Link to="/" className="navBarItem"><span> &nbsp;&nbsp;<img className='logo' alt='altTekst' src="https://is2-ssl.mzstatic.com/image/thumb/Purple71/v4/10/88/00/1088007d-7b3c-89fd-245e-6929d1dc26d0/source/256x256bb.jpg"></img>&nbsp;&nbsp; </span> </Link>
      <Link to="/" className="navBarItem">HOME</Link>
      <Link to="about" className="navBarItem">About</Link>

    </nav>
  );
};

export default NavBar;