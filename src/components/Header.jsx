import React from 'react';
import { Navbar, Nav }from 'react-bootstrap';
import './../Header.css';

function Header(){
  const HeaderGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    borderTop: '8px solid #210124',
    borderBottom: '8px solid #210124',
    backgroundColor: '#E5FCF5'
  }




  return (
    <>
    <Navbar style={HeaderGrid}>
      <Navbar.Brand href="#home" className="brandName">My MS Story</Navbar.Brand>
      <div id="header">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#medhistory">My Official MS Story</Nav.Link>
            <Nav.Link href="#mslife">My MS Milestones</Nav.Link>
            <Nav.Link href="#mslife">My Everyday Life with MS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    </>
);
}

export default Header;
