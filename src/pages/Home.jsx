import { Col, Container, Row } from "reactstrap";
import landscape1 from "../assets/la1.jpg";
import landscape2 from "../assets/la2.png";
import landscape3 from "../assets/la3.jpg";
import landscape4 from "../assets/la4.jpg";
import landscape5 from "../assets/la5.jpg";
import potrait1 from "../assets/hero1.jpg";
import PhotoFrame from "../components/PhotoFrame";
import ParallaxComponent from "../components/ParallaxComponent";
import px2 from "../assets/parallex/px2.jpg";
import { Content } from "../constants/content";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Container className="py-4">
        <Row className="g-4">
          {/* Main image: full‑width on xs, half on lg */}
          <Col xs={12} lg={6}>
            <PhotoFrame img={landscape1} />
          </Col>

          {/* Nested grid: full‑width on xs, half on lg */}
          <Col xs={12} lg={6}>
            <Row className="g-4">
              {/* First photo */}
              <Col xs={6} lg={6}>
                <PhotoFrame img={landscape2} />
              </Col>
              {/* Second photo */}
              <Col xs={6} lg={6}>
                <PhotoFrame img={landscape3} />
              </Col>
              {/* Third photo */}
              <Col xs={6} lg={6}>
                <PhotoFrame img={landscape4} />
              </Col>
              {/* Fourth photo */}
              <Col xs={6} lg={6}>
                <PhotoFrame img={landscape5} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Hero
        img={potrait1}
        title={Content.Hero1.title}
        subtitle={Content.Hero1.longDescription}
        btnDisplay={true}
        reverse={true}
      />
      <ParallaxComponent height="600px">
        <h1 className="display-1 bungee-regular">{Content.Home1.title}</h1>
        <h4 className="display-3 bebas-neue-regular">
          {Content.Home1.subtitle}
        </h4>
        <p className="lead bungee-regular">{Content.Home1.description}</p>
      </ParallaxComponent>
      <ParallaxComponent height="600px" image={px2}>
        <h1 className="display-1 bebas-neue-regular">{Content.Home2.title}</h1>
           <h4 className="display-3 bebas-neue-regular">
          {Content.Home1.description}
        </h4>
        <p className="lead bungee-regular">
         {Content.Home2.subtitle}
        </p>
      </ParallaxComponent>
    </>
  );
}
