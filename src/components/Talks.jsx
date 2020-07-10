import React from "react";
import { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import PageTitle from "./common/PageTitle";
import CardEvent from "./common/CardEvent";
import Separator from "./common/Separator";
import { Section, Inner, Subtitle } from "./common/Elements.styled";
import photo from "../assets/images/photos/Elizabet_Oliveira.jpg";

const Photo = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const Talks = () => (
  <Section color="white">
    <Separator color="white" />
    <Inner>
      <Row>
        <Col xs={12}>
          <PageTitle title="Talks" />
        </Col>
        <Col xs={12}>
          <Row>
            <Col xs={12} lg={8}>
              {/* <Subtitle>Upcoming</Subtitle> */}
              <Subtitle>Past</Subtitle>
              <Row>
                <Col xs={12} sm={6}>
                  <CardEvent
                    title="React Day Berlin"
                    talk="Exploring audio with React and SVGs"
                    date="December 6, 2019"
                    location="Berlin, Germany"
                    youtube="https://youtu.be/DjhGQAeHHEY"
                  />
                </Col>
                <Col xs={12} sm={6}>
                  <CardEvent
                    title="Intersection Conference"
                    talk="An SVG's tale"
                    date="October 1 & 2, 2019"
                    location="Milan, Italy"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={6}>
                  <CardEvent
                    title="React Live"
                    talk="Animating an SVG Cat"
                    date="September 13, 2019"
                    location="Amsterdam, Netherlands"
                  />
                </Col>
                <Col xs={12} sm={6}>
                  <CardEvent
                    title="JNation"
                    talk="An SVG's tale"
                    date="June 4, 2019"
                    location="Coimbra, Portugal"
                  />
                </Col>
                <Col xs={12} sm={6}>
                  <CardEvent
                    title="React Conf Armenia"
                    talk="An SVG's tale"
                    date="May 25, 2019"
                    location="Yerevan, Armenia"
                  />
                </Col>
                <Col xs={12} sm={6}>
                  <CardEvent
                    title="React Not A Conf"
                    talk="An SVG's tale"
                    date="May 11, 2019"
                    location="Sofia, Bulgaria"
                  />
                </Col>
                <Col xs={12} sm={6}>
                  <CardEvent
                    title="React Amsterdam 2019"
                    talk="An SVG's tale"
                    date="April 10-12, 2019"
                    location="Amsterdam, Netherlands"
                    youtube="https://youtu.be/BISiYX5s_Qw"
                  />
                </Col>
                <Col xs={12} sm={6}>
                  <CardEvent
                    title="Typeof Conf 2019"
                    talk="SVG Illustrations as Components"
                    date="March 28 & 29, 2019"
                    location="Porto, Portugal"
                  />
                </Col>
                <Col xs={12} sm={6}>
                  <CardEvent
                    title="DevFest Coimbra 2018"
                    talk="SVG Illustrations as Components"
                    date="November 24, 2018"
                    location="Coimbra, Portugal"
                  />
                </Col>
                <Col xs={12} sm={6}>
                  <CardEvent
                    title="React Conf 2018"
                    talk="SVG Illustrations as Components"
                    date="October 25 & 26, 2018"
                    location="Las Vegas, USA"
                    youtube="https://youtu.be/1gG8rtm-rq4"
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={4}>
              <Photo>
                <img src={photo} />
              </Photo>
            </Col>
          </Row>
        </Col>
      </Row>
    </Inner>
  </Section>
);

export default Talks;
