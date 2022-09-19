import React from 'react'
import 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Home() {
    return (
        <div>
            <div className='component1'>
            <Navbar bg="primary" variant="dark">
                <Container>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#aboutus">AboutUs</Nav.Link>
                            <Nav.Link href="#contactus">Contact Us</Nav.Link>
                        </Nav>
                </Container>
                </Navbar>
            </div>
            <div className='component2'>
                <NavLink to="/Login">Login</NavLink>
                <NavLink to="/Registration">Registration</NavLink>   
            </div>
        </div>
    )
}

export default Home;