import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap';




const Main = () => {
  return (
    <div>

<>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">SHARATH SAJI</Navbar.Brand>
          <Nav className="float-end">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>

          </Nav>
        </Container>
      </Navbar>

    </>

    </div>
  )
}

export default Main