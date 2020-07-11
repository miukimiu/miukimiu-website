import React from "react";
import {Row, Col} from "react-flexbox-grid";
import ProjectLink from "./common/ProjectLink";
import PageTitle from "./common/PageTitle";
import awards from "../assets/images/awards/award.png";
import Separator from "./common/Separator";
import {Section, Thumb, Article, Inner} from "./common/Elements.styled";

const Awards = () => (
  <Section color="#f4f5f9">
    <Separator color="#f4f5f9" />
    <Inner>
      <Row className="row">
        <Col xs={12}>
          <PageTitle title="Awards" />
        </Col>
      </Row>
      <Row className="item">
        <Col xs={12} sm={4}>
          <Thumb
            className="thumb"
            href="https://www.youtube.com/watch?v=7-qDVeAOTmc"
          >
            <img src={awards} />
          </Thumb>
        </Col>
        <Col xs={12} sm={8}>
          <Article>
            <h3>Fun Side Project of the Year</h3>
            <p>
              On April 2018, my open source project React Kawaii won the award
              for Fun Side Project of the Year during the React Amsterdam
              Conference!
            </p>

            <ProjectLink
              link="https://www.youtube.com/watch?v=7-qDVeAOTmc"
              text="React Open Source Awards 2018"
            />
          </Article>
        </Col>
      </Row>
    </Inner>
  </Section>
);

export default Awards;
