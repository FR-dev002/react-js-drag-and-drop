import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

export interface Props {
	auth: any;
}

const NavbarComponent: React.FC<Props> = ({auth, ...props}) => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">Event</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto" activeKey="/">
					<LinkContainer to="/project" className="pl-2">
						<Nav.Link>Project</Nav.Link>
					</LinkContainer>
				</Nav>
				{auth.user === undefined ? (
					<Nav className="justify-content-end" activeKey="/">
						<LinkContainer to="/register" className="pl-2">
							<Nav.Link>Register</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/login" className="pl-2">
							<Nav.Link>Login</Nav.Link>
						</LinkContainer>
					</Nav>
				) : (
					""
				)}
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarComponent;
