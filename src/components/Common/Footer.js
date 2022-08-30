import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer p-5">
        <Container>
          <Row>
            <Col sm={3}>
              <h5>
                <img
                  src="https://cipp.app/img/CyberDrainIconOrangeWhite.png"
                  height={40}
                  alt="DevGuide"
                />
              </h5>
              <p>
                DevGuide is a for-profit open online course provider aimed at
                professional adults and students. It was founded in August 2022
                by Tanvir Ahmed
              </p>
            </Col>
            <Col sm={3}>
              <h5>Navigation</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#aboutus">About Us</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
              </ul>
            </Col>
            <Col sm={3}>
              <h5>Services</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#home">Web Services</a>
                </li>
                <li>
                  <a href="#aboutus">Rest API</a>
                </li>
                <li>
                  <a href="#services">React Module</a>
                </li>
                <li>
                  <a href="#portfolio">Bootstrap Design</a>
                </li>
              </ul>
            </Col>
            <Col sm={3}>
              <h5>Contact Info</h5>
              <span>Dhaka, Bangladesh</span>
              <p>
                Email:{" "}
                <a
                  className="text-dark text-decoration-none"
                  href="mailto:devguide@gmail.com"
                >
                  devguide@gmail.com
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-bottom p-2">
        <Container>
          <p className="text-center mt-2">
            Copyright <FaCopyright /> Design & Developed By DevGuide
          </p>
        </Container>
      </div>
    </Fragment>
  );
};

export default Footer;
