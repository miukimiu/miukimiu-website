import React from 'react';
import { KawaiiPlanet } from 'react-kawaii';
import logo from '../../images/logo.svg';
import SocialLinks from './common/SocialLinks';

const Welcome = () => (
  <section className="section welcome">
    <KawaiiPlanet
      size={200}
      mood="blissful"
      color="#46F4D4"
    />
    <img className="welcome__logo" src={logo} alt="" />
    <SocialLinks />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 10"
      preserveAspectRatio="none"
      className="section__separator"
    >
      <polygon points="100 0 100 10 0 10" />
    </svg>
  </section>
);

export default Welcome;
