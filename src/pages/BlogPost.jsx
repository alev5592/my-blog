import { useParams } from 'react-router-dom';
import { Container, Card, Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import posts from '../data/posts';

// Funzione per controllare la disponibilità di localStorage
function isLocalStorageAvailable() {
  try {
    const test = "__test__";
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id.toString() === id);

  // Chiave per salvare i commenti nel localStorage
  const localStorageKey = `comments_post_${id}`;

  // Stato per commenti
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');

  // Carica i commenti dal localStorage se disponibili
  useEffect(() => {
    if (!isLocalStorageAvailable()) return; // Se localStorage non è disponibile, esci

    const savedComments = localStorage.getItem(localStorageKey);
    if (savedComments) {
      try {
        setComments(JSON.parse(savedComments));
      } catch (error) {
        console.error("Errore nel parsing dei commenti:", error);
      }
    }
  }, [id]);

  // Salva i commenti nel localStorage
  useEffect(() => {
    if (!isLocalStorageAvailable()) return; // Se localStorage non è disponibile, esci

    if (comments.length > 0) {
      localStorage.setItem(localStorageKey, JSON.stringify(comments));
    }
  }, [comments, id]);

  // Gestisce l'aggiunta di un nuovo commento
  const handleAddComment = () => {
    if (newComment.trim() === '' || authorName.trim() === '') return;

    const comment = {
      id: Date.now(),
      author: authorName,
      text: newComment,
    };

    setComments((prevComments) => [...prevComments, comment]);
    setNewComment('');
    setAuthorName('');
  };

  if (!post) {
    return (
      <Container className="mt-4">
        <h2>Post non trovato</h2>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Card className="shadow-sm">
        <Card.Img variant="top" src={post.image} style={{ maxHeight: '400px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.content}</Card.Text>
        </Card.Body>
      </Card>

      <hr className="my-4" />
      <h4>Commenti</h4>

      {/* Se non ci sono commenti, mostra il messaggio */}
      {comments.length === 0 ? (
        <p>Nessun commento ancora. Sii il primo a commentare!</p>
      ) : (
        <ul className="list-unstyled">
          {comments.map((comment) => (
            <li key={comment.id} className="mb-2">
              <strong>{comment.author}:</strong> {comment.text}
            </li>
          ))}
        </ul>
      )}

      <Form className="mt-3">
        <Form.Group className="mb-2" controlId="authorInput">
          <Form.Label>Il tuo nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Mario Rossi"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="commentInput">
          <Form.Label>Commento</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="Scrivi qualcosa..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleAddComment}>
          Invia
        </Button>
      </Form>
    </Container>
  );
}

export default BlogPost;
