import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { BrowserRouter as Router } from "react-router-dom";
import 'animate.css';

import CV from '../../assets/img/cv.pdf';
import Photo from "../../assets/img/Photo/Photo.js";

import './Bannerstyle.css';

function Banner() {

    return (
        <Router>
            <section className="banner" id="home">
                <Container>
                    <Row className="aligh-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <div>
                                <h1>Hi! I'm Anna<br />Frontend Developer</h1>
                                <p>Currently, I live and study in Germany. I love dancing and beautiful, user-friendly websites. I strive to improve my frontend skills and find my dream job. This website is created to introduce potential employers to my candidacy.</p>
                                <div className="buttons">
                                    <a download='' href={CV} className="cv">Download CV<ArrowRightCircle size={25} className="circle" /></a>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <Photo />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Router>
    );
}

export default Banner;