import React, { Component } from 'react';
import { TweenLite } from 'gsap';
import Welcome from '../components/Welcome';
import About from '../components/About';
import Projects from '../components/Projects';
import Work from '../components/Work';

const App = () => (
  <div className="app">
    <Welcome />
    <About />
    <Work />
    <Projects />
  </div>
)

export default App;
