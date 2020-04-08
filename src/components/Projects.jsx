import React from "react";
import { Row, Col } from "react-flexbox-grid";
import ProjectLink from "./common/ProjectLink";
import PageTitle from "./common/PageTitle";
import img1 from "../assets/images/work/cassette-tape@2x.png";
import img2 from "../assets/images/work/react-kawaii@2x.png";
import img3 from "../assets/images/work/soundtracktor@2x.png";
import Separator from "./common/Separator";
import { Section, Thumb, Article, Inner } from "./common/Elements.styled";

const Projects = () => (
  <Section color="#f4f5f9">
    <Separator color="#f4f5f9" />
    <Inner>
      <Row>
        <Col xs={12}>
          <PageTitle title="Projects" />
        </Col>
      </Row>
      <Row className="item">
        <Col xs={12} sm={4}>
          <Thumb
            href="https://miukimiu.github.io/cassette-tape"
            target="_blank"
          >
            <img src={img1} />
          </Thumb>
        </Col>
        <Col xs={12} sm={8}>
          <Article>
            <h3>Cassette Tape</h3>
            <p>
              A Chrome experiment that I presented at the Google I/0 Dublin in
              2016. This project explores the web audio API.
            </p>
            <ProjectLink
              link="https://miukimiu.github.io/cassette-tape"
              text="miukimiu.github.io/cassette-tape"
            />
          </Article>
        </Col>
      </Row>
      <Row className="row item">
        <Col xs={12} sm={4}>
          <Thumb
            href="https://github.com/miukimiu/react-kawaii"
            target="_blank"
          >
            <img src={img2} />
          </Thumb>
        </Col>
        <Col xs={12} sm={8}>
          <Article>
            <h3>React Kawaii</h3>
            <p>
              React Kawaii is a library of cute SVG illustrations (react
              components). Ideal to give some cuteness and personality to your
              react application.
            </p>
            <ProjectLink
              link="https://github.com/miukimiu/react-kawaii"
              text="github.com/miukimiu/react-kawaii"
            />
          </Article>
        </Col>
      </Row>
    </Inner>
  </Section>
);

export default Projects;
