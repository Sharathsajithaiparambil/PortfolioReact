import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import './About.css'; // Custom styles

const AboutPage = () => {
  return (
    <div className=" main">
      <Row>
        <Col md={6} className="bar text-center">
       
        <h1 className="mb-3 " >ABOUT ME</h1>
<Container>
<p className='justify-align text-white'>As a passionate computer science enthusiast, I am deeply immersed in the ever-evolving world of technology. My insatiable curiosity drives me to constantly expand my knowledge and skills, tackling challenges head-on. I thrive on problem-solving and innovation, always seeking new opportunities to learn and grow. Committed to lifelong learning, I embrace every chance to push the boundaries of what’s possible. Collaboration and making a meaningful impact are at the core of my journey in the dynamic landscape of technology. </p></Container>
                  </Col>
        <Col md={6} className='about' >
          <h1 className="mb-3">Technologies</h1>
           <Container>
          <div className="progress-bars mt-4">
            <div className="mb-3 ">
              <span>REACT JS</span>
              <ProgressBar now={80} label={`${80}%`} />
            </div>
            <div className="mb-3">
              <span>Javascript</span>
              <ProgressBar now={80} label={`${80}%`} />
            </div>
            <div className="mb-3">
              <span>HTML/CSS</span>
              <ProgressBar now={90} label={`${90}%`} />
            </div>
            <div className="mb-3">
              <span>DBMS</span>
              <ProgressBar now={85} label={`${85}%`} />
            </div>

          </div>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default AboutPage;
