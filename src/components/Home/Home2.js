import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let Me <span className="purple"> Introduce </span> Myself
            </h1>
            <p className="home-about-body">
              I am a full stack software engineer with {new Date().getFullYear() - 2011} years of progressive experience in software development.
              I lead several teams to develop technological solutions that will work with the architecture already in place in various industries, including retial,
              banking, airline cargo handling, and maritime cargo booking.
              <br />
              <br />I am experienced in programming languages including
              <i>
                <b className="purple"> Java, JavaScript, Node JS, Ansible, Terraform, Bash, Shell, HTML, CSS</b>
              </i>
              , and SQL and No SQL dialects including
              <i>
                <b className="purple"> SQL Server, Oracle PL/SQL, PostgreSQL, MySQL, MongoDB, and CouchDB</b>.
              </i>
              <br />I am also have experienced using different frameworks and architectural style such as 
              <i>
                <b className="purple"> Spring, Springboot, REST, SOAP, Microservice, ReactJS, React Native, Express, Maven, Expo Dev</b>
              </i>
              <br />
              <br />
              I also founded/co-founded 2 startup company -  &nbsp;
              <i>
                <b className="purple">a personal computer rent-to-own solution</b> and {" "}
                <b className="purple">
                  a financial technology which is a wealth-building-tool that helps monitor financial health, track goal progress, and share finances to others.
                </b>
              </i>
              <br />

            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/johnjavier"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/john-kevin-javier-83b70263/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
