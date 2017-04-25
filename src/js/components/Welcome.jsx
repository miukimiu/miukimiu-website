import React from 'react';
import airBalloon from '../../images/airBalloon.svg';
import logo from '../../images/logo.svg';

const Welcome = () => (
  <section className="welcome">
    <img className="welcome__air-balloon" src={airBalloon} alt="" />
    <img className="welcome__logo" src={logo} alt="" />
  </section>
);

export default Welcome;
