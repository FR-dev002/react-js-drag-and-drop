import React from "react";
import { Navbar, Nav} from 'react-bootstrap';

const NavbarComponent = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Event</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto"
					activeKey="/"
					onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
				>
          <Nav.Link href="hhome">Home</Nav.Link>
        </Nav>
				<Nav 
					className="justify-content-end"
					activeKey="/"
					onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
				>
          <Nav.Link href="blink">Login</Nav.Link>
				</Nav>

      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
