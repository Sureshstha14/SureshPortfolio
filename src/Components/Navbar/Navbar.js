import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Navbar.css'
// import AdminLogin from '../Admin/adminLogin';
import { useNavigate } from 'react-router-dom';
function BasicExample() {
  const navigate = useNavigate();
  const gotoAdmin =()=>{
    navigate('/admin/login')
  }

  return (
    <Navbar expand="lg" className="bg-blue-400 text-white  shadow">
      <Container>
        {/* Navbar Brand with Personalization */}
        <Navbar.Brand href="/" className="bold font-mono text-2xl text-red-600 ml-0">
          Suman Adhikari
        </Navbar.Brand>

        {/* Navbar Toggle for small screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Collapse Section for large screens */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-red">
            {/* Navigation Links using react-router-dom Link */}
            <Nav.Link>
              <Link to="/" className='text-white no-underline link-underline text-xl font-mono '>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" className='text-white no-underline link-underline text-xl font-mono '>About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/projects" className='text-white no-underline link-underline text-xl font-mono '>Projects</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact" className='text-white no-underline link-underline text-xl font-mono '>Contact</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/team" className='text-white no-underline link-underline text-xl font-mono '>Team</Link>
            </Nav.Link>

            {/* Dropdown Example */}
            <NavDropdown title="More" id="basic-nav-dropdown" className='text-white font-bold '>
              <NavDropdown.Item>
                <Link to="/skills"className='text-white no-underline link-underline text-xl font-mono bg-blue-400 w-full'>Skills</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/education" className='text-white no-underline link-underline text-xl font-mono bg-blue-400 w-full'>Education</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/experience" className='text-white no-underline link-underline text-xl font-mono bg-blue-400 w-full '>Experience</Link>
              </NavDropdown.Item>to
            </NavDropdown>
            {/* <AdminLogin/> */}
            <button className='bg-slate-600 rounded-xl p-2 hover:bg-slate-400 transition-all' onClick={gotoAdmin}>Admin</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
