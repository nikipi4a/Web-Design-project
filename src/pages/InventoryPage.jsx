import React, { useState } from 'react';
import { useFetchData } from '../hooks/useFetchData';
import { Container, Card, Spinner, Alert, Form, Button, Row, Col } from 'react-bootstrap'; 

const InventoryPage = () => {
  const [makeFilter, setMakeFilter] = useState(''); 
  const [queryParams, setQueryParams] = useState({ 
    _limit: 30 
  }); 

  const { data: cars, isLoading, isError, error } = useFetchData(
    '/cars',
    'inventory',
    queryParams 
  );
  
  const handleSearch = (e) => {
    e.preventDefault();
    const newParams = { _limit: 30 };
    if (makeFilter) {
      newParams.make = makeFilter;
    }
    setQueryParams(newParams);
  };

  if (isLoading) { 
    return (
        <Container className="text-center my-5">
            <Spinner animation="border" variant="danger" />
            <p className="mt-3 text-light">Зареждане на автомобилите...</p>
        </Container>
    );
   }

  if (isError) { 
    return (
        <Container className="my-5">
            <Alert variant="danger">
            Възникна грешка при зареждане на данни: **{error.message}**
            </Alert>
        </Container>
    );
   }

  return (
    <Container className="my-5">
      
      <h1 className="text-center mb-4 text-danger fw-bold">Налични Автомобили</h1>

      <Card className="mb-4 shadow-sm border-secondary">
        <Card.Body>
          <Form onSubmit={handleSearch}>
            <Row className="align-items-end">
              <Col xs={12} md={9} className="mb-3 mb-md-0">
                <Form.Group controlId="formMake">
                  <Form.Label>Търсене по Марка (Оставете празно за всички)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Напр. Honda, Toyota, BMW"
                    value={makeFilter}
                    onChange={(e) => setMakeFilter(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={3}>
                <Button variant="danger" type="submit" className="w-100 fw-bold">
                  ТЪРСИ
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      <Row xs={1} md={2} lg={3} className="g-4">
        {cars && cars.map((car) => (
          <Col key={car.id}> 
            <Card className="shadow-sm h-100 border-danger">
              
              <Card.Img 
                variant="top" 
                src={car.image_url} 
                alt={`${car.make} ${car.model}`} 
                style={{ height: '200px', objectFit: 'cover' }} 
              />

              <Card.Body>
                <Card.Title className="text-danger fw-bold">{car.make} {car.model}</Card.Title>
                <Card.Subtitle className="mb-2 text-light">Година: {car.year}</Card.Subtitle>
                <hr className="border-secondary"/>
                
                <Card.Text className="text-light">
                  <span className="fw-bold text-danger">Клас:</span> {car.class} <br />
                  <span className="fw-bold text-danger">Гориво:</span> {car.fuel_type} <br />
                  <span className="fw-bold text-danger">Трансмисия:</span> {car.transmission}
                </Card.Text>

              </Card.Body>
              <Card.Footer className="text-end border-danger">
                <h5 className="fw-bold" style={{color: 'var(--bs-danger)'}}>
                  €{car.price.toLocaleString('de-DE')} 
                </h5>
              </Card.Footer>
            </Card>
          </Col>
        ))}
        
        {cars && cars.length === 0 && (
          <Alert variant="info" className="w-100 mt-4">
            Няма намерени автомобили за това търсене.
          </Alert>
        )}
      </Row>
    </Container>
  );
};

export default InventoryPage;