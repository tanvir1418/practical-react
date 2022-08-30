import { Fragment } from "react";

import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <Fragment>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.vecteezy.com/system/resources/previews/000/344/684/non_2x/programming-code-on-laptop-banner-vector-flat-illustration.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Programming Team</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://thumbs.dreamstime.com/b/web-blue-banner-software-ui-development-different-devices-laptop-smartphone-coding-app-business-dashboard-analytics-245636263.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>UI/UX Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://c8.alamy.com/comp/2J4955T/html-computer-programming-coding-language-website-developing-technology-background-mixed-media-banner-2J4955T.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>MERN Stack Developer Team</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default Banner;
