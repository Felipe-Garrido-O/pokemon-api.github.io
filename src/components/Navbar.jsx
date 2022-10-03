import React from 'react';
import { NavLink} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';


const Navigation = () => {
  
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");

  return (
    
    <div>
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Pokemon API</Navbar.Brand>
          <Nav className="d-flex justify-content-end">
          <NavLink end className={setActiveClass} to = "/">
           Home    
          </NavLink>
          {"  -   "}
          <NavLink className={setActiveClass} to = "/personajes">
          Personajes
          </NavLink> 
          </Nav>
        </Container>
      </Navbar>
            
    </div>
  );
}

export default Navigation;