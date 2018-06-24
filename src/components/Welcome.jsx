import React from "react";
import { Planet } from "react-kawaii";
import logo from "../assets/images/logo.svg";
import SocialLinks from "./common/SocialLinks";

const Welcome = () => (
  <section className="section welcome">
    <Planet size={200} mood="blissful" color="#46F4D4" />
    <img className="welcome__logo" src={logo} alt="" />
    <SocialLinks />
  </section>
);

export default Welcome;
