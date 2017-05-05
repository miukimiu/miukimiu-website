import React, { Component } from 'react';
import { TweenLite } from 'gsap';
import Welcome from '../components/Welcome';
import About from '../components/About';

const App = () => (
  <div className="app">
    <Welcome />
    <About />
  </div>
)

export default App;
