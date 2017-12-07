import React from 'react';
import Welcome from '../components/Welcome';
import About from '../components/About';
import Projects from '../components/Projects';
import Articles from '../components/Articles';
import Talks from '../components/Talks';

const App = () => (
  <div className="app">
    <Welcome />
    <About />
    <Projects />
    <Articles />
    <Talks />
  </div>
)

export default App;
