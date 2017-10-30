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
  </section>
);

export default Welcome;
