import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function PrivacyPolicy() {
    return (
        <Container fluid className="about-section">
            <Container>
            <h1 className="project-heading">
                Privacy Policy
            </h1>
            </Container>
            <Container>
                <Row>
                <p className="home-about-body">
                    We understand that privacy is important and take the protection of your personal information seriously. 
                    This Privacy Policy describes the types of information we collect through our mobile application, "Spot Reserve," and how we use, disclose, and protect that information.
                </p>

                <p className="home-about-body">
                    <strong>Information Collection and Use</strong>
                    <br />
                    <br />
                    When you use Spot Reserve, we collect the following information:
                    <br/>
                    <br/>
                    User Information: To use Spot Reserve, you need to register first and we collect information such as your preferred display name, email, and contact number which is optional for the purpose of displaying it in the application if preferred.
                    <br/>
                    <br/>
                    Booking Information: When you reserve a parking spot, we collect information such as date, time, and parking spot code you reserved.
                    <br/>
                    <br/>
                    We use this information to provide you with the Spot Reserve services and to improve our services. 
                    We do not collect any sensitive information such as your financial information or government-issued identification numbers.
                </p>

                <p className="home-about-body">
                    <strong>Information Sharing</strong>
                    <br />
                    <br />
                    We do not share, sell, rent, or trade any of your personal information to any third parties for their promotional purposes.
                    <br/>
                    <br/>
                    We may share your information in the following circumstances:
                    <br/>
                    <br/>
                    Service Providers: We may share your information with service providers who assist us in providing the Spot Reserve services, such as a cloud storage provider.
                    <br/>
                    <br/>
                    Compliance with Laws: We may disclose your information to government authorities or other third parties if we are required to do so by law or in response to a valid request.
                </p>

                <p className="home-about-body">
                    <strong>Advertising</strong>
                    <br />
                    <br />
                    Spot Reserve does not contain any advertisements.
                </p>

                <p className="home-about-body">
                    <strong>Security</strong>
                    <br />
                    <br />
                    We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, or destruction. 
                    However, no security measures can guarantee 100% security.
                </p>

                <p className="home-about-body">
                    <strong>Changes to this Privacy Policy</strong>
                    <br />
                    <br />
                    We may modify this Privacy Policy from time to time. 
                    Your continued use of Spot Reserve after the effective date of any changes means that you accept the revised Privacy Policy.
                </p>

                <p className="home-about-body">
                    <strong>Contact Us</strong>
                    <br />
                    <br />
                    If you have any questions or concerns about this Privacy Policy, please contact us at noclueful@gmail.com
                    <br />
                    <br />
                    Thank you for using Spot Reserve!
                </p>
                </Row>
            </Container>
        </Container>
    );
}

export default PrivacyPolicy;