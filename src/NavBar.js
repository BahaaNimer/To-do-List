import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


export default function NavBar() {
  return (
    <>
      <Navbar style={{ backgroundColor: '#282C34', marginBottom:'25px' }}>
        <Container>
          <Navbar.Brand href="/">To-Do List</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Created by: <a href="https://github.com/BahaaNimer">Bahaa Nimer</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
