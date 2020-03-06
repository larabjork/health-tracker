import React from 'react';
import { Navbar, Nav }from 'react-bootstrap';
import './../Header.css';

function Header(){
  const HeaderGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    borderTop: '8px solid #3C0142cd ',
    borderBottom: '8px solid #3C0142cd ',
    backgroundColor: '#E5FCF5'
  }




  return (
    <>
    <Navbar style={HeaderGrid}>
      <Navbar.Brand href="#home" className="brandName">My MS Story</Navbar.Brand>
      <div id="header">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#medhistory">The Medical Version</Nav.Link>
            <Nav.Link href="#mslife">The Other Highlights</Nav.Link>
            <Nav.Link href="#mslife">My Everyday Life with MS</Nav.Link>
            <Nav.Link href="#about">About This App</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    </>
);
}

export default Header;
