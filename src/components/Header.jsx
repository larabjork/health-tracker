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
  const btnStyle = {
    backgroundColor: '#210124',
    borderColor: '#210124',
    color: 'white',
    fontWeight: 'bold'
  }



  return (
    <>
    <Navbar style={HeaderGrid}>
      <Navbar.Brand href="#home" className="brandName">MS Journal</Navbar.Brand>
      <div id="header">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#medhistory">What I Tell Doctors</Nav.Link>
            <Nav.Link href="#mslife">Journaling My Life with MS</Nav.Link>
            <Nav.Link href="#mslife">My Personal MS Milestones</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    </>
);
}

export default Header;
