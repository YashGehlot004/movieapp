import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function OffcanvasExample() {
  return (
    <>
      {[ 'md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="nav mb-3 position-sticky top-0 left-0 z-3 ">
          <Container>
            <Navbar.Brand className='fs-2  btn2b' > <span className='word'>M</span> 
            ovie App</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="nav2"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className='fs-2  btn2b ' id={`offcanvasNavbarLabel-expand-${expand}`}>
                <span className='word'>M</span>ovie App
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link className="text-decoration-none px-lg-4 py-2 py-lg-0 btn2b"  to={'/'}> Home </Link>
                <Link className="text-decoration-none px-lg-4 btn2b" to={'/Playlist'}>Playlist   </Link>
                 
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;