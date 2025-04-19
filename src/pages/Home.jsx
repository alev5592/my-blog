import { useState } from 'react';
import { Card, Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import posts from '../data/posts';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Benvenuto nel mio Blog!</h1>

      {/* Search bar */}
      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Cerca un post..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>

      <Row>
        {posts
          .filter((post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((post) => (
            <Col md={4} className="mb-4" key={post.id}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={post.image}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.excerpt}</Card.Text>
                  <Button variant="primary" as={Link} to={`/post/${post.id}`}>
                    Leggi di più
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Home;
