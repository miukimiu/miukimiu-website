import React from 'react';
import ProjectLink from './ProjectLink';

const Projects = () => (
  <section className="section section--light projects">
    <svg
      className="projects__separator"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path d="M0 100 C 20 0 50 0 100 100 Z" />
    </svg>
    <div className="section__container">
      <h2>Projects</h2>
      <div className="projects__articles">
        <article className="projects__article">
          <h3>Cassette Tape</h3>
          <p>A Chrome experiment that I presented at the Google I/0 Dublin in 2016. This project explores the web audio API.</p>

          <ProjectLink
            link="https://miukimiu.github.io/cassette-tape"
            text="miukimiu.github.io/cassette-tape"
          />
        </article>
        <article className="projects__article">
          <h3>React Kawaii</h3>
          <p>React Kawaii is a library of cute SVG illustrations (react components). Ideal to give some cuteness and personality to your react application.</p>
          <ProjectLink
            link="https://miukimiu.github.io/cassette-tape"
            text="miukimiu.github.io/cassette-tape"
          />
        </article>
      </div>
    </div>
  </section>
);

export default Projects;
