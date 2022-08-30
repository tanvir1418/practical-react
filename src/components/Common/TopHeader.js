import React, { Fragment } from "react";
import { Container, Navbar } from "react-bootstrap";
import {
  BsFillEnvelopeFill,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsPersonPlusFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const TopHeader = () => {
  return (
    <Fragment>
      <Navbar bg="info">
        <Container>
          <Navbar.Text className="mx-2">
            <BsFillEnvelopeFill className="me-1" />
            <a className="text-decoration-none" href="mailto:info@devguide.com">
              info@devguide.com
            </a>
          </Navbar.Text>
          <Navbar.Text className="mx-2">
            <a href="facebook.com/dev-guide">
              <BsFacebook />
            </a>
          </Navbar.Text>
          <Navbar.Text className="mx-2">
            <a href="twitter.com/dev-guide">
              <BsTwitter />
            </a>
          </Navbar.Text>
          <Navbar.Text>
            <a href="linkedin.com/in/dev-guide">
              <BsLinkedin />
            </a>
          </Navbar.Text>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="mx-2 btn-header">
              <BsPersonPlusFill />{" "}
              <a className="text-decoration-none" href="google.com">
                SignUp
              </a>
            </Navbar.Text>
            <Navbar.Text className="btn-header">
              <a className="text-decoration-none" href="google.com">
                Login
              </a>
              <BsFillArrowRightCircleFill />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default TopHeader;
