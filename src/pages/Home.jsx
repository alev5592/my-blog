import React, { useState } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Carousel,
  Image,
  Form,
  Badge,
} from "react-bootstrap";
import posts from "../data/posts";
import { Link } from "react-router-dom";

import reactLogo from "../assets/react.png";
import bootstrapLogo from "../assets/bootstrap.png";
import jsLogo from "../assets/javascript.png";
import profilePic from "../assets/profile.jpg";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtra i post in base al testo della search bar
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mt-4">
      {/* Sezione Anteprima About */}

      <Row className="align-items-center">
        <Col md={4} className="text-center mb-3 mb-md-0">
          <img
            src={profilePic}
            alt="Foto profilo"
            className="img-fluid rounded-circle shadow"
            style={{ width: "100%", maxWidth: "400px", height: "auto" }}
          />
        </Col>
        <Col md={8}>
          <h4>Benvenuto nel mio blog!</h4>
          <Badge bg="success" className="mb-2">
            Disponibile per nuove opportunità 💼
          </Badge>
          <p>
            Sono uno sviluppatore front-end con una grande passione per la
            creazione di interfacce moderne e performanti. Questo blog è il mio
            spazio per condividere progetti, idee e conoscenze con chi condivide
            il mio stesso entusiasmo per il web.
            
          </p>
          <Button as={Link} to="/about" variant="outline-primary">
            Scopri di più
          </Button>
        </Col>
      </Row>
      <div style={{ marginTop: "60px" }}></div>

      {/* Sezione Tecnologie + Carousel in orizzontale */}
      <Row className="my-5 align-items-center">
        {/* Colonna descrizione */}
        <Col md={6}>
          <h4 className="mb-3">🔧 Tecnologie utilizzate</h4>
          <p>
            Questo blog è stato sviluppato usando <strong>React</strong>, una
            potente libreria JavaScript che permette di creare interfacce utente
            reattive e dinamiche.
          </p>
          <p>
            Per la gestione delle pagine ho usato <strong>React Router</strong>,
            mentre <strong>React Bootstrap</strong> mi ha permesso di ottenere
            uno stile moderno e responsive.
          </p>
          <p>
            I dati sono simulati via JSON e i commenti sono gestiti con{" "}
            <strong>localStorage</strong>, così da essere mantenuti anche dopo
            un refresh.
          </p>
        </Col>

        {/* Colonna Carousel */}
        <Col md={6}>
          <Carousel interval={3000}>
            <Carousel.Item>
              <Row className="align-items-center px-3">
                <Col xs={5} className="text-center">
                  <Image
                    src={reactLogo}
                    alt="React"
                    className="img-fluid"
                    style={{ height: "120px", objectFit: "contain" }}
                  />
                </Col>
                <Col xs={7}>
                  <h5 className="mb-2">React</h5>
                  <p className="mb-0" style={{ fontSize: "0.9rem" }}>
                    Libreria per UI moderne e dinamiche. Cuore dell'app.
                  </p>
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className="align-items-center px-3">
                <Col xs={5} className="text-center">
                  <Image
                    src={bootstrapLogo}
                    alt="Bootstrap"
                    className="img-fluid"
                    style={{ height: "120px", objectFit: "contain" }}
                  />
                </Col>
                <Col xs={7}>
                  <h5 className="mb-2">React Bootstrap</h5>
                  <p className="mb-0" style={{ fontSize: "0.9rem" }}>
                    UI kit elegante e rapido da integrare.
                  </p>
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className="align-items-center px-3">
                <Col xs={5} className="text-center">
                  <Image
                    src={jsLogo}
                    alt="JavaScript"
                    className="img-fluid"
                    style={{ height: "120px", objectFit: "contain" }}
                  />
                </Col>
                <Col xs={7}>
                  <h5 className="mb-2">JavaScript</h5>
                  <p className="mb-0" style={{ fontSize: "0.9rem" }}>
                    La logica e l'interattività dell'app girano tutte intorno a
                    lui.
                  </p>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      {/* Search bar */}
      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Cerca un post..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>
      {/* Lista dei post filtrati */}
      <Row>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Col md={4} key={post.id} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={post.image}
                  style={{ height: "180px", objectFit: "cover" }}
                />
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
