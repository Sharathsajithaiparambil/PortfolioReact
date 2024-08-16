import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Services.css'; // Custom styles

const Services = () => {
  return (
    <div className='hero-section'>
    <Container className="my-5 hero-image">
      <h2 className="text-center mb-5">What I Do For You</h2>
      <Row >
        <Col md={4} className="text-center">
          <div className="service-box">
            <i className="fas fa-code service-icon"></i>
            <h3 className='text-dark'>Web Development</h3>
            <p>I utilize programming languages like HTML, CSS, and JavaScript, as well as frameworks and libraries, to create dynamic and interactive web experiences.</p>
          </div>
        </Col>
        <Col md={4} className="text-center">
          <div className="service-box">
            <i className="fas fa-mobile-alt service-icon"></i>
            <h3 className='text-dark'>Responsive Design</h3>
            <p>This results in improved usability, readability, and overall user satisfaction, as visitors can easily navigate and interact with the site regardless of their device preferences.</p>
          </div>
        </Col>
        <Col md={4} className="text-center">
          <div className="service-box">
            <i className="fas fa-camera service-icon"></i>
            <h3 className='text-dark'>Photography</h3>
            <p>Photography can serve as a form of artistic expression, storytelling, documentation, or communication, allowing individuals to convey emotions, perspectives, and stories through visual imagery.</p>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Services;
