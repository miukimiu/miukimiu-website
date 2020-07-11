import React from "react";
import {Row, Col} from "react-flexbox-grid";
import ProjectLink from "./common/ProjectLink";
import PageTitle from "./common/PageTitle";
import Separator from "./common/Separator";
import {Section, Inner} from "./common/Elements.styled";

const Articles = () => (
  <Section color="white">
    <Separator color="white" />
    <Inner>
      <Row>
        <Col xs={12}>
          <PageTitle title="Articles" />
        </Col>
      </Row>
      <h3>SVG illustrations as React Components</h3>
      <ProjectLink
        link="https://blog.prototypr.io/svg-illustrations-as-react-components-f0e7be304eb6"
        text="blog.prototypr.io/svg-illustrations-as-react-components"
      />
    </Inner>
  </Section>
);

export default Articles;
