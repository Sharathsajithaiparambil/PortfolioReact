import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col xs={12}>
                        <h2 className="footer-name">SHARATH SAJI</h2>
                    </Col>
                </Row>
                <Row className="justify-content-center text-center footer-info">
                    <Col xs={12} md={4} className="footer-item">
                        <FaPhoneAlt className="footer-icon" />
                        <span>+91 7510810975</span>
                    </Col>
                    <Col xs={12} md={4} className="footer-item">
                        <FaEnvelope className="footer-icon" />
                        <span>sajjsharathsaji@gmail.com</span>
                    </Col>
                    <Col xs={12} md={4} className="footer-item">
                        <FaMapMarkerAlt className="footer-icon" />
                        <span>Mananthavady, Kerala</span>
                    </Col>
                </Row>
                <Row className="justify-content-center text-center mt-4">
                    <Col xs={12} className="footer-social">
                        <a href="https://wa.me/7510810975" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className=" me-2 footer-icon" />
                        </a>
                        <a href="https://www.instagram.com/_sharath.saji?utm_source=qr&igsh=cDdqdGkxaHV0bTl6" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className=" me-2 footer-icon" />
                        </a>
                        <a href="https://github.com/yourgithubprofile" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="me-2 footer-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/sharath-saji-45a33b217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="footer-icon" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
