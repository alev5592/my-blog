import {
  Container,
  Card,
  Row,
  Col,
  Image,
  Button,
  Spinner,
} from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";

function About() {
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/alev5592") // <-- tuo username GitHub
      .then((response) => response.json())
      .then((data) => setGithubData(data))
      .catch((error) => console.error("Errore nel fetch GitHub:", error));
  }, []);

  return (
    <Container className="mt-5 mb-10">
      {/* Sezione iniziale: Foto + Presentazione */}
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
              Mi chiamo Alessandro Vaccaro e sono un Front-end Developer con una
              grande passione per il mondo della tecnologia.
            </p>
            <p>
              Fin da piccolo sono stato affascinato dal funzionamento di
              computer, reti e software, una curiosità che mi ha accompagnato
              nel tempo e mi ha portato a costruire competenze solide su diversi
              fronti: dall'hardware, al supporto tecnico, fino allo sviluppo
              web.
              </p>
              <p>
                Oggi, dopo esperienze lavorative e formative, mi concentro sul
                creare interfacce web moderne, performanti e accessibili. Negli anni ho avuto l'opportunità di lavorare come Web
                Master presso Sigmatelco, realizzando siti web tramite Joomla, e
                come Tecnico Informatico, offrendo assistenza clienti e
                occupandomi di riparazioni e gestione reti.
              </p>
            <p>
              Per rafforzare le mie competenze, ho frequentato il corso
              Full-Stack Web Development presso Develhope, dove ho approfondito
              linguaggi e tecnologie come React, JavaScript, TypeScript e
              Node.js. Qui ho avuto modo di lavorare in team su progetti
              concreti, simulando ambienti lavorativi reali e utilizzando
              metodologie Agile.
            </p>

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

      {/* Sezione GitHub + Descrizione tecnica */}
      <Row className="mt-5 ">
        {/* Colonna: Card profilo GitHub */}
        <Col md={6} className="mb-4">
          <h3 className="text-center mb-4">📂 Profilo GitHub</h3>
          {!githubData ? (
            <div className="text-center my-5">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : (
            <Card className="p-4 shadow-sm text-center h-100 d-flex flex-column align-items-center justify-content-center">
              <Image
                src={githubData.avatar_url}
                alt="Avatar GitHub"
                roundedCircle
                className="mb-3"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <h5 className="mb-1">{githubData.name}</h5>
              <p className="text-muted mb-2">@{githubData.login}</p>
              <p style={{ fontSize: "0.9rem" }}>{githubData.bio}</p>
              <Button
                variant="dark"
                href={githubData.html_url}
                target="_blank"
                size="sm"
              >
                Visita il profilo
              </Button>
            </Card>
          )}
        </Col>

        {/* Colonna: Spiegazione tecnica */}
        <Col md={6} className="mb-4">
          <h3 className="mb-4">🛠️ Come ho integrato GitHub</h3>
          <Card className="p-4 shadow-sm h-100">
            <p>
              Per rendere questa pagina più dinamica ho utilizzato{" "}
              <strong>fetch API</strong> e<strong> React Hooks</strong> (
              <code>useEffect</code> e <code>useState</code>) per recuperare
              direttamente dal mio profilo GitHub alcune informazioni, come
              l'avatar, il nome e la bio.
            </p>
            <p>
              L'anteprima viene caricata automaticamente all'apertura della
              pagina e viene gestito anche uno
              <strong> stato di caricamento</strong> per migliorare l'esperienza
              utente.
            </p>
            <p>
              Questa tecnica permette di integrare facilmente dati esterni e
              mantenere il sito aggiornato senza modifiche manuali.
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
