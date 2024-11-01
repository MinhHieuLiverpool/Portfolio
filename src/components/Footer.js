import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/github-142-svgrepo-com.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
           <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>MinhHieudev</h1>
          </Col>

          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/MinhHieuLiverpool"  target="_blank" ><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100053793093125"  target="_blank" ><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/thanhhieu1608/"  target="_blank" ><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
