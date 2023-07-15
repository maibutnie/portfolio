import ProgressBar from '../elements/ProgressBar/Progressbar';
import { Col, Container, Row } from 'react-bootstrap';

import './Skillsstyle.css'

function Skills() {
    return (
        <section className='skills' id="skills">
            <Container>
                <h2>My Skills</h2>
                <Row>
                    <Col xs={12} md={6}>
                        <h3>Hard Skills</h3>
                        <ProgressBar
                            label="HTML"
                            backgroundColor="var(--yellow-rgba)"
                            visualParts={[
                                {
                                    percentage: "83%",
                                    color: "var(--yellow)"
                                }
                            ]}
                        />
                        <ProgressBar
                            label="CSS"
                            backgroundColor="var(--yellow-rgba)"
                            visualParts={[
                                {
                                    percentage: "83%",
                                    color: "var(--yellow)"
                                }
                            ]}
                        />
                        <ProgressBar
                            label="Figma"
                            backgroundColor="var(--yellow-rgba)"
                            visualParts={[
                                {
                                    percentage: "73%",
                                    color: "var(--yellow)"
                                }
                            ]}
                        />
                        <ProgressBar
                            label="React"
                            backgroundColor="var(--yellow-rgba)"
                            visualParts={[
                                {
                                    percentage: "78%",
                                    color: "var(--yellow)"
                                }
                            ]}
                        />
                        <ProgressBar
                            label="JavaScript"
                            backgroundColor="var(--yellow-rgba)"
                            visualParts={[
                                {
                                    percentage: "76%",
                                    color: "var(--yellow)"
                                }
                            ]}
                        />
                        <ProgressBar
                            label="TypeScript"
                            backgroundColor="var(--yellow-rgba)"
                            visualParts={[
                                {
                                    percentage: "72%",
                                    color: "var(--yellow)"
                                }
                            ]}
                        />
                        <ProgressBar
                            label="Git"
                            backgroundColor="var(--yellow-rgba)"
                            visualParts={[
                                {
                                    percentage: "80%",
                                    color: "var(--yellow)"
                                }
                            ]}
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <h3>Soft Skills</h3>
                        <ProgressBar
                            label="Russian"
                            backgroundColor="var(--yellow-rgba)"
                            visualParts={[
                                {
                                    percentage: "100%",
                                    color: "var(--yellow)"
                                }
                            ]}
                        />
                        <ProgressBar
                            label="English"
                            backgroundColor="var(--yellow-rgba)"
                            visualParts={[
                                {
                                    percentage: "90%",
                                    color: "var(--yellow)"
                                }
                            ]}
                        />
                        <ProgressBar
                            label="German"
                            backgroundColor="var(--yellow-rgba)"
                            visualParts={[
                                {
                                    percentage: "90%",
                                    color: "var(--yellow)"
                                }
                            ]}
                        />
                        <ProgressBar
                            label="Ukranian"
                            backgroundColor="var(--yellow-rgba)"
                            visualParts={[
                                {
                                    percentage: "75%",
                                    color: "var(--yellow)"
                                }
                            ]}
                        />
                        <ProgressBar
                            label="Time Management"
                            backgroundColor="var(--yellow-rgba)"
                            visualParts={[
                                {
                                    percentage: "83%",
                                    color: "var(--yellow)"
                                }
                            ]}
                        />
                        <ProgressBar
                            label="Adaptivity"
                            backgroundColor="var(--yellow-rgba)"
                            visualParts={[
                                {
                                    percentage: "84%",
                                    color: "var(--yellow)"
                                }
                            ]}
                        />
                        <ProgressBar
                            label="Sociability"
                            backgroundColor="var(--yellow-rgba)"
                            visualParts={[
                                {
                                    percentage: "82%",
                                    color: "var(--yellow)"
                                }
                            ]}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skills;