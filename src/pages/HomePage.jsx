import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'; 
import HeroBackgroundImage from '../assets/background-image.jpg'; 

const HomePage = () => {
  return (
    <div>
      <Container fluid 
        className="text-center text-light py-5" 
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 0.8)),
            url(${HeroBackgroundImage}) 
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          borderBottom: '3px solid var(--bs-danger)' 
        }}
      >
        <Container className="py-5"> 
          <h1 
            className="display-3 fw-bolder text-uppercase text-danger" 
            style={{ letterSpacing: '2px' }}
          >
            Apex Auto
          </h1>
          
          <p className="lead fs-4" style={{ color: '#ccc' }}>
            Вашият стандарт за премиум автомобили.
          </p>
          
          <p className="mt-4">
            <LinkContainer to="/inventory">
              <Button variant="danger" size="lg" className="fw-bold px-5 py-3">
                РАЗГЛЕДАЙ АВТОМОБИЛИТЕ
              </Button>
            </LinkContainer>
          </p>
        </Container>
      </Container>

      <Container className="my-5">
        <Row className="text-center mb-4">
          <Col>
            <h2 className="text-uppercase text-light">Защо Apex Auto?</h2>
            <hr className="w-25 mx-auto" style={{ borderColor: 'var(--bs-danger)', borderWidth: '2px' }}/>
          </Col>
        </Row>
        
        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100 p-3 border-secondary">
              <Card.Body className="text-center">
                <Card.Title as="h3" className="text-danger text-uppercase fw-bold">
                  Качество
                </Card.Title>
                <Card.Text className="text-light fs-5">
                  Всеки автомобил в нашата колекция е ръчно подбран и преминал пълна техническа инспекция.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 p-3 border-danger shadow-lg"> 
              <Card.Body className="text-center">
                <Card.Title as="h3" className="text-danger text-uppercase fw-bold">
                  Ексклузивност
                </Card.Title>
                <Card.Text className="text-light fs-5">
                  Предлагаме достъп до редки и премиум модели, които няма да намерите другаде.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 p-3 border-secondary">
              <Card.Body className="text-center">
                <Card.Title as="h3" className="text-danger text-uppercase fw-bold">
                  Обслужване
                </Card.Title>
                <Card.Text className="text-light fs-5">
                  Нашият екип е посветен на това да превърне покупката на автомобил в премиум изживяване.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;