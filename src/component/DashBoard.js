import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Registration from './Registration';
 

const DashBoard = () => {
  return (
    <div>
      <div>
        <h1>Welcome to Dashboard</h1>
      </div>
      <div>
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>

  );
}



export default DashBoard;