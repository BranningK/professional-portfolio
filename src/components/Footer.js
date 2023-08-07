import { Container, Col, Row } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logoLight from "../assets/darkSignature.png";
import linkedInBlue from '../assets/logos/linkedIn/linkedInBlue.png';
import twitterBlue from '../assets/logos/twitter/twitterBlue.png';
import githubDark from '../assets/logos/github/githubDark.png';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className='align-items-center'>
          {/* <MailchimpForm /> */}
          <Col sm={6}>
            {/* <img className="footerLogo" src={logoLight} alt="Logo reading Branning Knight"/> */}
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="footer-social-icon">
              <a href="https://www.linkedin.com/in/branningknight/"><img src={linkedInBlue} alt="LinkedIn logo that links to Branning Knight's LinkedIn account"/></a>&nbsp;&nbsp;
              <a href="https://github.com/BranningK"><img src={githubDark} alt="GitHub logo that links to Branning Knight's GitHub account"/></a>&nbsp;&nbsp;
              <a href="https://twitter.com/BranningK"><img src={twitterBlue} alt="Twitter logo that links to Branning Knight's Twitter page"/></a>
            </div>
            <p>Copyright 2023. All rights reserved</p>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}