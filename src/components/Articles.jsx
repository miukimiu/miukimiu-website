import React from 'react';
import ProjectLink from './common/ProjectLink';
import PageTitle from './common/PageTitle';

const Articles = () => (
  <section className="section section--light articles">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 829 60"
      preserveAspectRatio="none"
      className="section__separator--top"
    >
      <path fill="#FFF" fillRule="evenodd" d="M0,23.9290015 C206.010417,8.05185466 366.010417,0.11328125 480,0.11328125 C593.989583,0.11328125 710.322917,8.05185466 829,23.9290015 L829,60 L0,60 L0,23.9290015 Z"/>
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
        text="blog.prototypr.io/svg-illustrations-as-react-components"
      />
    </article>
  </section>
);

export default Articles;
