import React from "react";
import { Planet } from "react-kawaii";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import SocialLinks from "./common/SocialLinks";

const WelcomeSection = styled.section`
  display: flex;
  background: ${(props) => props.theme.purple};
  flex-direction: column;
  padding: 4rem 1rem 6rem;
  max-height: 560px;

  .kawaiiElementWrapper {
    margin: 0 auto;
  }
  .section__separator {
    fill: white;
  }
  .welcome__logo {
    max-width: 360px;
    width: 100%;
  }
`;

const Welcome = () => (
  <WelcomeSection className="section welcome">
    <Planet size={200} mood="blissful" color="#46F4D4" />
    <img className="welcome__logo" src={logo} alt="" />
    <SocialLinks />
  </WelcomeSection>
);

export default Welcome;
