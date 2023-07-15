import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Col, Row } from "react-bootstrap";
import "./Contactstyle.css";
import { Blob } from "../../assets/img/Blob";

function Contact() {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const isValidEmail = (email) => {
    const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = ref.current;
    const nameInput = form.elements.name;
    const emailInput = form.elements.email;
    const messageInput = form.elements.message;

    let hasError = false;
    if (nameInput.value === "") {
      nameInput.classList.add("error");
      hasError = true;
    } else {
      nameInput.classList.remove("error");
    }

    if (emailInput.value === "" || !isValidEmail(emailInput.value)) {
      emailInput.classList.add("error");
      hasError = true;
    } else {
      emailInput.classList.remove("error");
    }

    if (messageInput.value === "") {
      messageInput.classList.add("error");
      hasError = true;
    } else {
      messageInput.classList.remove("error");
    }

    if (hasError) {
      return;
    }

    emailjs
      .sendForm("service_lwsb65q", "template_ta32glg", form, "kms9kh4ZnjAblxN8o")
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <div className="blob">
              <Blob />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <h2>Get In Touch</h2>
              <form ref={ref} onSubmit={handleSubmit}>
                <Row>
                  <Col xs={12} className="px-1">
                    <input type="text" placeholder="Name" name="name" />
                  </Col>
                  <Col xs={12} className="px-1">
                    <input placeholder="Email" name="email" />
                  </Col>
                  <Col xs={12} className="px-1">
                    <textarea
                      placeholder="Write your message"
                      name="message"
                      rows={5}
                    ></textarea>
                    <button type="submit" >Contact!</button>
                    <div className="message">
                      {success && "Your message has been sent. I'll get back to you soon"}
                    </div>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
