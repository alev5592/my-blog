import { Container, Card, Row, Col, Image, Button } from 'react-bootstrap'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

function About() {
  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col md={4}>
          <Image
            src="/profile.jpg"
            roundedCircle
            fluid
            alt="Profilo"
            className="mb-4"
          />
        </Col>
        <Col md={8}>
          <Card className="p-4 shadow-sm">
            <h2 className="mb-3">Ciao! 👋</h2>
            <p>
              Mi chiamo <strong>Alessandro Vaccaro</strong> e sono uno sviluppatore web con passione per React,
              JavaScript e tutto ciò che riguarda il front-end.
            </p>
            <p>
              Questo blog nasce dalla voglia di condividere quello che imparo ogni giorno mentre
              lavoro su progetti, studio nuove tecnologie o semplicemente sperimento!
            </p>
            <p>
              In questo spazio troverai articoli su React, tips & tricks, best practices e pensieri
              personali sul mondo dello sviluppo.
            </p>
            <p>Grazie per essere passato, buona lettura! 😊</p>

            {/* Link Social */}
            <div className="mt-4">
              <h5>Seguimi sui social:</h5>
              <Button
                as="a"
                href="https://www.linkedin.com/in/alessandro-vaccaro-56897b212/"
                target="_blank"
                variant="outline-primary"
                className="me-2"
              >
                <FaLinkedin className="me-2" />
                LinkedIn
              </Button>
              <Button
                as="a"
                href="https://github.com/alev5592/my-blog"
                target="_blank"
                variant="outline-dark"
                className="me-2"
              >
                <FaGithub className="me-2" />
                GitHub
              </Button>
            </div>

            {/* Pulsante per il CV */}
            <div className="mt-4">
              <Button
                as="a"
                href="/Alessandro_Vaccaro_CV.pdf"
                download="Alessandro_Vaccaro_CV.pdf"
                variant="outline-secondary"
              >
                Scarica il mio CV
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default About
