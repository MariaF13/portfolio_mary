import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import calculadora from "../assets/img/calculadora.png";
import login from "../assets/img/login.png";
import clone from "../assets/img/clone.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  imgUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "Formação React",
      description: "Calculadora simples",
      imgUrl: calculadora,
      githubUrl: "https://github.com/MariaF13/desafio-dio01", 
      liveUrl: "https://mariaf13.github.io/desafio-dio01/", 
    },
    {
      title: "Formação React",
      description: "Tela de login",
      imgUrl: login,
      githubUrl: "https://github.com/MariaF13/desafio-dio04", 
      liveUrl: "https://mariaf13.github.io/desafio-dio04/", 
    },
    {
      title: "Formação React",
      description: "Clone DIO",
      imgUrl: clone,
      githubUrl: "https://github.com/MariaF13/clone-dio", 
      liveUrl: "https://mariaf13.github.io/clone-dio/", 
    }
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }: { isVisible: boolean }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Alguns pequenos projetos realizados por mim!</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              title={project.title}
                              description={project.description}
                              imgUrl={project.imgUrl}
                              githubUrl={project.githubUrl}
                              liveUrl={project.liveUrl}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Loading...</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Loading...</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
