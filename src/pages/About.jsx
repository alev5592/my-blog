import { Container, Card, Row, Col, Image } from 'react-bootstrap'

function About() {
  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col md={4}>
          <Image
            src="https://i.pravatar.cc/300?img=5" // puoi cambiare questo con una tua immagine
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
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default About
