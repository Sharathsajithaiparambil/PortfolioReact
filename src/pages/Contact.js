


import React, { useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './Contact.css'; // Custom styles

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8w7l257', 'template_a82acyj', form.current, 'TMniLPm3sSLwgNuCd')
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
    }, (error) => {
      console.error('Failed to send the message:', error);
      alert('Failed to send the message, please try again.');
    });
};

  return (
    <div className='hero-section'>
      <Container className="my-5">
        <Row className="justify-content-center hero-image">
          <Col md={8}>
            <h2 className="text-center mb-4 hero-image">Want To Get In Touch?</h2>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="user_name" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="user_email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mt-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={3} placeholder="Enter your message" />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-4">
                Submit Now
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;

