import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projectimg1.jpg";
import projImg2 from "../assets/img/projectimg2.png";
import projImg3 from "../assets/img/projectimg3.png";
import projImg4 from "../assets/img/projectimg4.png";
import projImg5 from "../assets/img/projectimg5.jpg";
import projImg6 from "../assets/img/projectimg6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "FaceDetection by LBPH",
      description: "Artificial Intelligence",
      imgUrl: projImg1,
      link: "https://github.com/MinhHieuLiverpool/Face_Detection_by_LBPH",
    },
    {
      title: "Game Ninja 2D Platform",
      description: "Game Python",
      imgUrl: projImg2,
      link: "https://github.com/MinhHieuLiverpool/GameNinja_2D_python",
    },
    {
      title: "Web Manager Audio Car",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://github.com/MinhHieuLiverpool/WebBanXe",
    },
    {
      title: "Download Video On Youtube",
      description: "Python Application",
      imgUrl: projImg4,
      link: "https://github.com/MinhHieuLiverpool/Download_Video_from_Youtube",
    },
    {
      title: "Puzzle Game AI",
      description: "Java Game",
      imgUrl: projImg5,
      link: "https://github.com/MinhHieuLiverpool/puzzle_game_AI",
    },
    {
      title: "BookStore Manager App",
      description: "App JavaSwing",
      imgUrl: projImg6,
      link: "https://github.com/MinhHieuLiverpool/QuanLiCuaHangSach_Java",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Don't let the noise of other's opinions drown out your own inner voice. And most importantly, have the courage to follow your heart and intuition.</p>
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
