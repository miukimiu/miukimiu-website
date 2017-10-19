import React from 'react';
import logo from '../../images/logo.svg';
import SocialLinks from './common/SocialLinks';
import KawaiiPlanet from './common/KawaiiPlanet';

const Welcome = () => (
  <section className="section welcome">
    <KawaiiPlanet />
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
