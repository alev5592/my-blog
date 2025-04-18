import { useParams, Link } from 'react-router-dom'
import posts from '../data/posts'
import { Container, Card, Button } from 'react-bootstrap'

function BlogPost() {
  const { id } = useParams()
  const post = posts.find((p) => p.id === parseInt(id))

  if (!post) {
    return (
      <Container className="mt-4">
        <h2>Post non trovato</h2>
        <Link to="/" className="btn btn-secondary mt-3">Torna alla Home</Link>
      </Container>
    )
  }

  return (
    <Container className="mt-5">
      <Card className="shadow-sm p-4">
        <Card.Body>
        <Card.Img variant="top"
  src={post.image}
  alt={post.title}
  style={{ height: '300px', objectFit: 'cover' }}
  className="mb-4 rounded" />
<h1 className="mb-3">{post.title}</h1>
<p className="text-muted">{new Date(post.date).toLocaleDateString('it-IT', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})}</p>
<hr />
<p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>{post.content}</p>
<div className="mt-4">
  <Button as={Link} to="/" variant="secondary">
    ← Torna alla Home
  </Button>
</div>
        </Card.Body>
      </Card>
    </Container>
  )
  
}

export default BlogPost
