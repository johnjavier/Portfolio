import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

// import BlogCard from "./BlogsCards";
import Particle from "../Particle";

 import spotReserve from "../../Assets/SpotReserve/Spot_Reserve_Icon.png";
// import emotion from "../../Assets/Projects/emotion.jpeg";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import algo from "../../Assets/Projects/algo.png";
// import plant from "../../Assets/Projects/plant.jpeg";  

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotReserve}
              spotReserveimgPath={spotReserve}
              isBlog={false}
              title="Spot Reserve"
              description="Mobile app for managing car and motor parking reservations"
              link="spot-reserve/about"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={}
              //isBlog={false}
              //title=""
              //description=""
              //link="https://github.com/beebus/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={}
              //isBlog={false}
              //title=""
              //description=""
              //link="https://github.com/beebus/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={}
              //isBlog={false}
              //title=""
              //description=""
              //link="https://github.com/beebus/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={}
              //isBlog={false}
              //title=""
              //description=""
              //link="https://github.com/beebus/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
