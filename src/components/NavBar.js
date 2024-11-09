/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ padding: '5px 0', paddingBottom: '5px' }}>
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>
            <img
              src="/images/image-removebg-preview (4).png"
              alt="FSBeats Logo"
              style={{ height: '80px', width: 'auto' }} // Increase the logo size here
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center' }}>
            {/* Browse Shows Button */}
            <Link passHref href="/shows">
              <Button variant="outline-warning" style={{ marginLeft: '15px', marginRight: '30px', height: '50px' }}>
                Browse Shows
              </Button>
            </Link>
            {/* Create New Show Button */}
            <Link passHref href="/shows/new">
              <Button variant="outline-warning" style={{ marginLeft: '15px', marginRight: '30px', height: '50px' }}>
                Create New Show
              </Button>
            </Link>
            <Link passHref href="/categories/new">
              <Button variant="outline-warning" style={{ marginLeft: '15px', marginRight: '30px', height: '50px' }}>
                Create Category
              </Button>
            </Link>
          </Nav>
          {/* Signout Button */}
          <Button variant="outline-warning" onClick={signOut} style={{ height: '50px' }}>
            Signout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
