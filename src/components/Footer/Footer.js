import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import './Footerstyle.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <div className="footer-contact">
              <p>Email: goloshchapova2002@gmail.com</p>
              <p>Phone: +49 176 684 883 332</p>
              <a href="https://www.linkedin.com/in/your-linkedin-profile" className="link">LinkedIn</a> <br/>
              <a href="https://t.me/anuranura" className="link">Telegram</a>
            </div>
          </Col>
          <Col md={6}>
            <div className="footer-fem">
              <p>If you know Russian, check, please, our fem-channel! </p>
              <a href="https://t.me/baumfem" className="link">BauFem</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
