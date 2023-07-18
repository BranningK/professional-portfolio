import { Container, Row, Col, TabContainer } from 'react-bootstrap';
import { Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import randomPic from '../assets/logos/github/githubDark.png';


export const Projects = () => {

  const projects = [
    {
      title: "Workplace Manager",
      description: "Keeps track of the employees",
      imgUrl: randomPic
    },
    {
      title: "",
      description: "",
      imgUrl: ""
    },
    {
      title: "",
      description: "",
      imgUrl: ""
    },
    {
      title: "",
      description: "",
      imgUrl: ""
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Lorem Ipsum</p>
            <Tab.Container id='project-tabs' defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
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
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return(
                          <ProjectCard 
                            key={index}
                            {...project}
                          />
                        )
                      } )
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">

                </Tab.Pane>
                <Tab.Pane eventKey="third">

                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )

}