import React, { useState } from 'react';
import {Container, Card, Row, Col, Button, Carousel, Image, Form, Badge} from 'react-bootstrap';
import posts from '../data/posts';
import { Link } from 'react-router-dom';

import reactLogo from '../assets/react.png';
import bootstrapLogo from '../assets/bootstrap.png';
import jsLogo from '../assets/javascript.png';
import profilePic from '../assets/profile.jpg';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtra i post in base al testo della search bar
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mt-4">
       {/* Search bar */}
       <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Cerca un post..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>
      {/* Sezione Anteprima About */}
      
<Row className="align-items-center">
  <Col md={4} className="text-center mb-3 mb-md-0">
    <img
      src={profilePic}
      alt="Foto profilo"
      className="img-fluid rounded-circle shadow"
      style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
    />
  </Col>
  <Col md={8}>
    <h4>Ciao! Sono [Tuo Nome]</h4>
    <Badge bg="success" className="mb-2">
      Disponibile per nuove opportunità 💼
    </Badge>
    <p>
      Sono uno sviluppatore front-end con una grande passione per la creazione
      di interfacce moderne e performanti. Questo blog è il mio spazio per
      condividere progetti, idee e conoscenze con chi condivide il mio stesso entusiasmo
      per il web.
    </p>
    <Button as={Link} to="/about" variant="outline-primary">
      Scopri di più
    </Button>
  </Col>
</Row>
      {/* Carousel animato delle tecnologie */}
      <Carousel className="mb-5">
        <Carousel.Item interval={2500}>
          <Image src={reactLogo} alt="React" className="d-block mx-auto" style={{ height: '200px' }} />
          {/*<Carousel.Caption>
            <h5>React</h5>
            <p>Libreria per costruire interfacce moderne.</p>
            
          </Carousel.Caption>
          */}
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <Image src={bootstrapLogo} alt="Bootstrap" className="d-block mx-auto" style={{ height: '200px' }} />
          {/*<Carousel.Caption>
            <h5>React</h5>
            <p>Libreria per costruire interfacce moderne.</p>
            
          </Carousel.Caption>
          */}
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <Image src={jsLogo} alt="JavaScript" className="d-block mx-auto" style={{ height: '200px' }} />
           {/*<Carousel.Caption>
            <h5>React</h5>
            <p>Libreria per costruire interfacce moderne.</p>
            
          </Carousel.Caption>
          */}
        </Carousel.Item>
      </Carousel>

     

      {/* Lista dei post filtrati */}
      <Row>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Col md={4} key={post.id} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={post.image} style={{ height: '180px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.content.substring(0, 100)}...</Card.Text>
                  <Button as={Link} to={`/post/${post.id}`} variant="primary">
                    Leggi di più
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <p>Nessun post trovato.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Home;
