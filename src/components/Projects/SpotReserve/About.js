import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import spotReserveDashboard from "../../../Assets/SpotReserve/spotreserve_dashboard.png";
import spotReserveDrawer from "../../../Assets/SpotReserve/spotreserve_drawer.png";
import { Link } from "react-router-dom";

function About(){
    return (
        <Container fluid className="about-section">
            <Container>
            <h1 className="project-heading">
                Spot Reserve
            </h1>
            </Container>
            <Container>
                <Row>
                    <Col md >
                        <img src={spotReserveDashboard} style={{ width: "150px", height: "300px" }}/>
                    </Col>
                    <Col md >
                        <img src={spotReserveDrawer} style={{ width: "150px", height: "300px" }}/>
                    </Col>
                </Row>
                <Row>
                <p className="home-about-body">
                    Mange your establishment parking slot and help user to find and book their 
                    preferred parking spot in advance with Spot Reserve mobile app. <br />
                    No more circling around searching for a spot. Get peace of mind and arrive
                    on time with our convinient and hassle-free solution. <br/>
                    <ul>
                        <li> Dashboard to immediately remind you of what is your reserve parking for the day</li>
                        <li> Reserve Parking Slot for coming week</li>
                        <li> Reserve or cancel parking slot for the day</li>
                        <li> Manage Parking Slot for Car and Motor</li>
                    </ul>
                </p>
                <Link to="/spot-reserve/privacy-policy" className="nav-link"> Privacy Policy</Link>
                </Row>
            </Container>
        </Container>
    );
}

export default About;