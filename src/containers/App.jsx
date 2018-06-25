import React from "react";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Projects from "../components/Projects";
import Articles from "../components/Articles";
// import Awards from "../components/Awards";

const App = () => (
  <div className="app">
    <Welcome />
    <About />
    <Projects />
    <Articles />
  </div>
);

export default App;
