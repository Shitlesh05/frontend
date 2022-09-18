import React from 'react'
import 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Home() {
    return (
        <div>
            <div className='component1'>
            <NavLink to="/Login">Login</NavLink>
            <br/>
            <NavLink to="/Registration">Registration</NavLink>   
            </div>
            <div className='component2'>
            <Navbar bg="light" variant="light">
                
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#aboutus">AboutUs</Nav.Link>
                            <Nav.Link href="#contactus">Contact Us</Nav.Link>
                        </Nav>
               
                </Navbar>
            </div>
        </div>
    )
}


    

export default Home;