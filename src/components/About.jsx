import React from "react";
import { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import Emojify from "react-emojione";
import Separator from "./common/Separator";
import { Section, Inner, Article } from "./common/Elements.styled";

const About = () => (
  <Section color="white">
    <Separator />
    <Inner>
      <Article className="about">
        <h2>
          Hello there!
          <Emojify>👋</Emojify>
        </h2>
        <p>
          My name is Miuki Miu (real name Elizabet <Emojify>🙃</Emojify>). I'm a
          designer who codes or probably a developer who loves to design!
        </p>
        <p>
          I started my career as a web developer and soon I realized that I like
          to be in the more visual aspects of the web. I love interaction
          design, front-end technologies, animations and I'm obsessed with
          making the web fun again!
        </p>
        <p>
          I love open source technologies and in April 2018, my project React
          Kawaii won the award "Fun Project of the Year" at React Amsterdam.
        </p>
        <p>
          I also love music and I was the first female solo hip-hop artist
          signing with a major label in Portugal, Universal Music. My music
          reached the top positions of the Portuguese MTV charts, but soon I
          realized that I was not meant to be an artist!
        </p>
        <p>
          I found out that I'm much happier doing code, design and sometimes
          giving some talks around the world!
        </p>
        <p>
          I'm currently employed at UnitedHealth Group, working on UX Design and
          Front-end development.
        </p>
      </Article>
    </Inner>
  </Section>
);

export default About;
