import { Card, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import posts from '../data/posts'

function Home() {
  return (
    <div>
      <h1>Benvenuto nel mio Blog!</h1>
      <Row>
        {posts.map((post) => (
          <Col key={post.id} sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{post.date}</Card.Subtitle>
                <Card.Text>{post.excerpt}</Card.Text>
                <Button as={Link} to={`/post/${post.id}`} variant="primary">
                  Leggi di più
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Home
