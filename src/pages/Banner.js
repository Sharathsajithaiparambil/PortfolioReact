import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap';
import Img from "../assets/iam.jpg" 
import "./Banner.css"
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
 const navigate = useNavigate();


  const handleClick = () =>{
navigate("/contact")
  }
  return (
    <div className="hero-section">
    <Container fluid>
      <Row className=''>
        <Col md={6} className="hero-image   ">
        
          <img   
            src={Img}
            alt="Profile"
            className="img-fluid  img1"
          />
        </Col>
        <Col md={6} className="hero-content d-flex flex-column justify-content-center align-items-start">
          <h1>Hi, I'm Sharath Saji</h1>
          <h2 className="display-4">
            <span className="highlight-text">Web</span> Developer
          </h2>
          <p className='text-white'>
            With a focus on user experience and innovative technologies, I am committed to continuous learning and growth in the ever-evolving field of web development.
          </p>
          <Button variant="info" onClick={handleClick} className="mt-3">Hire Me</Button>
          <div className='mt-5'>
                        <a href="https://wa.me/7510810975" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className=" me-2 footer-icon text-white" />
                        </a>
                        <a href="https://www.instagram.com/_sharath.saji/?utm_source=qr&igsh=cDdqdGkxaHV0bTl6" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className=" me-2 footer-icon text-white" />
                        </a>
                        <a href="https://github.com/yourgithubprofile" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="me-2 footer-icon text-white" />
                        </a>
                        <a href="https://www.linkedin.com/in/sharath-saji-45a33b217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="footer-icon text-white" />
                        </a>
                        </div>
        </Col>

    
             

                  
    
      </Row>
    </Container>
  </div>
  )
}

export default Banner