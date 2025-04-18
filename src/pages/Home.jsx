import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import posts from '../data/posts'

function Home() {
  return (
    <Container className="mt-5">
      <h1 className="mb-4">Benvenuto nel mio Blog</h1>
      <Row>
        {posts.map((post) => (
          <Col md={4} key={post.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={post.image}
                alt={post.title}
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {new Date(post.date).toLocaleDateString('it-IT', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </Card.Subtitle>
                <Card.Text>{post.excerpt}</Card.Text>
                <Button as={Link} to={`/post/${post.id}`} variant="primary">
                  Leggi di più →
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Home
