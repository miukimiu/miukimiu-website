import React from "react";
import WorkItem from "./common/WorkItem";
import ProjectLink from "./common/ProjectLink";
import PageTitle from "./common/PageTitle";

import img1 from "../assets/images/awards/award.png";

const Awards = () => (
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
      <div className="row">
        <div className="col-xs-12">
          <PageTitle title="Awards" />
        </div>
      </div>
      <div className="row projects__item">
        <div className="col-xs-12 col-sm-4">
          <a
            className="thumb"
            href="https://www.youtube.com/watch?v=7-qDVeAOTmc"
          >
            <img src={img1} />
          </a>
        </div>
        <div className="col-xs-12 col-sm-8">
          <article className="projects__article">
            <h3>Fun Side Project of the Year</h3>
            <p>
              On April 2018, my open source project React Kawaii won the award
              for Fun Side Project of the Year during the React Amsterdam
              Conference!
            </p>

            <ProjectLink
              link="https://www.youtube.com/watch?v=7-qDVeAOTmc"
              text="React Open Source Awards 2018"
            />
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default Awards;
