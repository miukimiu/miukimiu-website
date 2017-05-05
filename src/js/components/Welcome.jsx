import React from 'react';
import { KawaiiPlanet } from 'react-kawaii';
import logo from '../../images/logo.svg';
import SocialLinks from './SocialLinks';
import SectionSeparator from './SectionSeparator';

const Welcome = () => (
  <section className="section welcome">
    <KawaiiPlanet
      size={200}
      mood="blissful"
      color="#46F4D4"
    />
    <img className="welcome__logo" src={logo} alt="" />
    <SocialLinks />
    <SectionSeparator />
  </section>
);

export default Welcome;
