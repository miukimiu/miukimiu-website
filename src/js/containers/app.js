import React, { Component } from 'react';
import { TweenLite } from 'gsap';
import Welcome from '../components/Welcome';
import About from '../components/About';
import Work from '../components/Work';

const App = () => (
  <div className="app">
    <Welcome />
    <About />
  </div>
)

export default App;
