import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import {BsGithub} from 'react-icons/bs'
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/netflix.png";
import projImg2 from "../assets/img/pokemon (1).png";
import projImg3 from "../assets/img/elearning (1).png";
import projImg4 from "../assets/img/landing.jpg";
import projImg5 from "../assets/img/news.jpg";
import projImg6 from "../assets/img/rlarq.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Netflix clone",
      description: "React js & Firebase",
      imgUrl: projImg1,
      link:'https://netflix-clon-tawny.vercel.app/'
    },
    {
      title: "Pokeapi Fetching",
      description: "HTML, CSS & Javascript",
      imgUrl: projImg2,
      link:'https://poke-challenge-arrieta-leonardo.vercel.app/'
    },
    {
      title: "E-learning platform UI",
      description: "Angular js & Typescript",
      imgUrl: projImg3,
      link:'https://e-learning-platform-angular.vercel.app/login'
    },
    {
      title: "Landing page",
      description: "Next js & Typescript",
      imgUrl: projImg4,
      link:'https://nextjs-drag-and-drop-app-9scs.vercel.app/'
    },
    {
      title: "App de noticias Angular",
      description: "Angular js js & API",
      imgUrl: projImg5,
      link:'https://nextjs-drag-and-drop-app-9jdo.vercel.app/'
    },
    {
      title: "RL-Arq estudio",
      description: "HTML, CSS  & Javascript",
      imgUrl: projImg6,
      link:'https://r-l-arq-leon2192.vercel.app/'
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Proyectos</h2>
                  <p>Estos son algunos de mis trabajos realizados.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Proyectos</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Info</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Code source</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Los proyectos seleccionados para mostrar en este portfolio incluyen desarrollos en los que empleo las tecnologías mencionadas en skills. Los mismos y las mismas se van actualizando a medida que se amplían tanto mi experiencia como mi formación académica.  </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="github-container">
                         
                          <BsGithub size={'3em'} />
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
