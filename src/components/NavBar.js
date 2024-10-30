/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Navbar, Container, Nav, Button, Dropdown, Form, FormControl } from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>
            <img src="/images/image-removebg-preview (4).png" alt="FSBeats Logo" style={{ height: '40px', width: 'auto' }} />
          </Navbar.Brand>
        </Link>

        <Form className="d-flex mx-auto" style={{ width: '50%' }}>
          <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
          <Button variant="outline-light">Search</Button>
        </Form>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Dropdown align="end">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Menu
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} href="/shows">
                  Browse Shows
                </Dropdown.Item>
                <Dropdown.Item onClick={signOut}>Signout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
