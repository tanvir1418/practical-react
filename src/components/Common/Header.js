import { Fragment } from "react";
import { Link } from "react-router-dom";
import TopHeader from "./TopHeader";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Fragment>
      <TopHeader />
      <Container>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                src="https://cipp.app/img/CyberDrainIconOrangeWhite.png"
                height={40}
                alt="DevGuide"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" className="text-uppercase fw-bolder">
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/aboutus"
                  className="text-uppercase fw-bolder"
                >
                  About Us
                </Nav.Link>
                <Nav.Link href="#link" className="text-uppercase fw-bolder">
                  Services
                </Nav.Link>
                <Nav.Link href="#link" className="text-uppercase fw-bolder">
                  Portfolio
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="btn btn-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </Fragment>
  );
};

export default Header;
