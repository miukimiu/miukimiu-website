import React, { Component } from 'react';
import { TweenLite } from 'gsap';
import Welcome from '../components/Welcome';
import About from '../components/About';
import Projects from '../components/Projects';
import Work from '../components/Work';
import Articles from '../components/Articles';


const App = () => (
  <div className="app">
    <Welcome />
    <About />
    <Projects />
    <Articles />
  </div>
)

export default App;
