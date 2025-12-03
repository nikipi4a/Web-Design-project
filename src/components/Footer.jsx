import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { TelephoneFill, EnvelopeFill, GeoAltFill, Facebook, Instagram, Tiktok } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Container fluid as="footer" className="bg-dark text-secondary py-5 mt-5 border-top border-danger">
      <Container>
        <Row>
          
          <Col xs={12} md={6} lg={3} className="mb-4">
            <h5 
              className="text-uppercase text-danger fw-bolder mb-3" 
              style={{ letterSpacing: '1px' }}
            >
              Apex Auto
            </h5>
            <p>© {new Date().getFullYear()} Всички права запазени.</p>
            <div>
              <a href="#!" className="text-light me-3"><Facebook size={24} /></a>
              <a href="#!" className="text-light me-3"><Instagram size={24} /></a>
              <a href="#!" className="text-light"><Tiktok size={24} /></a>
            </div>
          </Col>

          <Col xs={6} lg={3} className="mb-4">
            <h5 className="text-light fw-bold mb-3">Проследяване</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/contact" className="text-secondary p-0 mb-2">За нас</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-secondary p-0 mb-2">FAQ</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-secondary p-0 mb-2">Блог</Nav.Link>
            </Nav>
          </Col>

          <Col xs={6} lg={3} className="mb-4">
            <h5 className="text-light fw-bold mb-3">Политика</h5>
            <Nav className="flex-column">
              <Nav.Link href="#!" className="text-secondary p-0 mb-2">Политика за поверителност</Nav.Link>
              <Nav.Link href="#!" className="text-secondary p-0 mb-2">Карта на сайта</Nav.Link>
            </Nav>
          </Col>

          <Col xs={12} md={6} lg={3} className="mb-4">
            <h5 className="text-light fw-bold mb-3">Контакти</h5>
            <p className="d-flex align-items-center mb-2">
              <TelephoneFill className="me-2 text-danger" /> +359 888 123 456
            </p>
            <p className="d-flex align-items-center mb-2">
              <EnvelopeFill className="me-2 text-danger" /> info@apexauto.com
            </p>
            <p className="d-flex align-items-center mb-2">
              <GeoAltFill className="me-2 text-danger" /> ул. Цар Калоян No:6, София
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;