import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkedIn } from '../../assets/img/LinkedIn';
import './Navbarstyle.css';

function Navigation() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""} collapseOnSelect>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-body-tertiary" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto links">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About Me</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#contact" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="icon">
                  <a href="https://www.linkedin.com/in/anna-goloshchapova-a98751267/">
                    <LinkedIn />
                  </a>
                </div>
              </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}

export default Navigation;
