import React from 'react'
import "./header.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "./logo.png"

function OffcanvasExample() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <img src={logo} id="logo"/>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">INICIO</Nav.Link>

                  <NavDropdown
                    title="CATALOGO MAYORISTA"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">CAMISETAS</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">CAMPERAS </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">CONJUNTOS</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">BIKERS</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">PANTALONES</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">VESTIDOS</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">SHORTS</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">BUZOS</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">CALZAS</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">MUSCULOSAS</NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      MOSTRAR TODO
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action3">¿QUIENES SOMOS?</Nav.Link>
                  <Nav.Link href="#action4">UBICACION</Nav.Link>
                  <Nav.Link href="#action5">CONTACTO</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="buscar"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success"> 🔍</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;