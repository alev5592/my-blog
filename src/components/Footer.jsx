import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; 2025 Il mio blog personale. Tutti i diritti riservati.</p>
            <p>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white">
                GitHub
              </a> | 
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                LinkedIn
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
