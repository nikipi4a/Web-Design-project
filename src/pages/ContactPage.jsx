import React from 'react';
import { Container, Row, Col, Card, Form, Button, ListGroup } from 'react-bootstrap';
import { TelephoneFill, EnvelopeFill, GeoAltFill } from 'react-bootstrap-icons';

const ContactPage = () => {
  return (
    <Container className="my-5">
      
      <Row className="text-center mb-4">
        <Col>
          <h1 className="text-uppercase text-danger fw-bold">Свържете се с нас</h1>
          <p className="lead text-light">Имате въпроси? Попълнете формата или ни се обадете.</p>
          <hr className="w-25 mx-auto" style={{ borderColor: 'var(--bs-danger)', borderWidth: '2px' }}/>
        </Col>
      </Row>
      
      <Row>
        <Col md={7} className="mb-4">
          <Card className="shadow-lg border-secondary p-4">
            <Card.Body>
              <h3 className="text-danger mb-4">Изпратете ни запитване</h3>
              <Form>
                <Form.Group className="mb-3" controlId="formContactName">
                  <Form.Label>Име</Form.Label>
                  <Form.Control type="text" placeholder="Вашето име" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContactEmail">
                  <Form.Label>Имейл</Form.Label>
                  <Form.Control type="email" placeholder="Вашият имейл" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContactMessage">
                  <Form.Label>Съобщение</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Как можем да Ви помогнем?" />
                </Form.Group>

                <Button variant="danger" type="submit" className="fw-bold w-100 py-2">
                  ИЗПРАТИ
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5} className="mb-4">
          <Card className="shadow-lg border-danger p-4 h-100">
            <Card.Body>
              <h3 className="text-danger mb-4">Информация за контакт</h3>
              <ListGroup variant="flush">
                
                <ListGroup.Item className="d-flex align-items-center mb-3">
                  <TelephoneFill className="me-3 text-danger" size={24} />
                  <div>
                    <h5 className="text-light mb-0">Телефон</h5>
                    <p className="text-secondary mb-0">+359 888 123 456</p>
                  </div>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex align-items-center mb-3">
                  <EnvelopeFill className="me-3 text-danger" size={24} />
                  <div>
                    <h5 className="text-light mb-0">Имейл</h5>
                    <p className="text-secondary mb-0">info@apexauto.com</p>
                  </div>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex align-items-center">
                  <GeoAltFill className="me-3 text-danger" size={24} />
                  <div>
                    <h5 className="text-light mb-0">Адрес</h5>
                    <p className="text-secondary mb-0">ул. Цар Калоян No:6, 1000 София</p>
                  </div>
                </ListGroup.Item>

              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;