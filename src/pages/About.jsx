import Hero from "../components/Hero";
import potrait2 from "../assets/hero2.jpg";
import { Content } from "../constants/content";
import { Col, Container, Row } from "reactstrap";
import CustomCard from "../components/CustomCard";
import card1 from '../assets/card1.jpg'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'
import ParallaxComponent from "../components/ParallaxComponent";
import px3 from "../assets/parallex/px3.jpg"
import px4 from "../assets/parallex/px4.jpg"

export default function About() {
  return (
    <>
      <div className="d-flex     fs-3">
        <Hero
          img={potrait2}
          title={Content.Hero2.title}
          subtitle={Content.Hero2.longDescription}
          btnDisplay={true}
        // reverse={true}
        />
      </div>
      <Container className="my-4">
        <Row>
          <Col>
            <h2 className="playwrite-au-qld text-center fs-2 my-4">About Transcend World : Beyond the Ordinary</h2>
          </Col>
        </Row>
        <Row className="g-4">
          <Col lg={4}>
            <CustomCard img={card1} title="Artic Adventures" />
          </Col>
          <Col lg={4}>
            <CustomCard img={card2} title="Ocean Wonders" />
          </Col>
          <Col lg={4}>
            <CustomCard img={card3} title="Exotic Areas" />
          </Col>
        </Row>
      </Container>
      <ParallaxComponent height="600px" image={px3}>
        <h1 className="display-1 bebas-neue-regular">{Content.About.title}</h1>
        <h4 className="display-3 ">
          {Content.About.mission}
        </h4>
        <p className="lead bungee-regular">
          {Content.About.subtitle}
        </p>
      </ParallaxComponent>
    </>
  );
}
