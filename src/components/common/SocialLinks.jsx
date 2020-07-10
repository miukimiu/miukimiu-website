import React from "react";
import styled from "styled-components";
import {
  Dribbble,
  Github,
  Linkedin,
  Medium,
  Twitter,
  Instagram,
} from "@icons-pack/react-simple-icons";

const SocialLinksEl = styled.div`
  -ms-flex-pack: center;
  justify-content: center;
  display: -ms-flexbox;
  display: flex;
  padding: 1rem;

  > a {
    padding: 0 0.5rem;
    color: hsla(0, 0%, 100%, 0.8);
  }
`;

const SocialLinks = () => (
  <SocialLinksEl>
    <a href="https://github.com/miukimiu">
      <Github />
    </a>
    <a href="https://www.linkedin.com/in/elizabetoliveira/">
      <Linkedin />
    </a>
    <a href="https://medium.com/@miukimiu">
      <Medium />
    </a>
    <a href="https://twitter.com/miuki_miu">
      <Twitter />
    </a>
    <a href="https://dribbble.com/miukimiu">
      <Dribbble />
    </a>
    <a href="https://instagram.com/miukimiu">
      <Instagram />
    </a>
  </SocialLinksEl>
);

export default SocialLinks;
