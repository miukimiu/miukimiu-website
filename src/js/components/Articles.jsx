import React from 'react';
import ProjectLink from './common/ProjectLink';
import PageTitle from './common/PageTitle';

const Articles = () => (
  <section className="section section--light articles">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 10"
      preserveAspectRatio="none"
      className="section__separator--top"
    >
      <polygon points="100 0 100 10 0 10" />
    </svg>
    <article className="section__container">
      <div className="row">
        <div className="col-xs-12">
          <PageTitle title="Articles" />
        </div>
      </div>
      <h3>
        SVG illustrations as React Components
      </h3>
      <ProjectLink
        link="https://blog.prototypr.io/svg-illustrations-as-react-components-f0e7be304eb6"
        text="blog.prototypr.io/svg-illustration..."
      />
    </article>
  </section>
);

export default Articles;
