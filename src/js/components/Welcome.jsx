import React from 'react';
import { KawaiiPlanet } from 'react-kawaii';
import logo from '../../images/logo.svg';

const Welcome = () => (
  <section className="welcome">
    <KawaiiPlanet
      size={200}
      mood="blissful"
      color="#46F4D4"
    />
    <img className="welcome__logo" src={logo} alt="" />
  </section>
);

export default Welcome;
