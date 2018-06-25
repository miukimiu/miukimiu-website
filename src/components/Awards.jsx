import React from "react";
import WorkItem from "./common/WorkItem";
import ProjectLink from "./common/ProjectLink";
import PageTitle from "./common/PageTitle";

import img1 from "../assets/images/work/cassette-tape@2x.png";
import img2 from "../assets/images/work/react-kawaii@2x.png";

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
          <a className="thumb" href="https://miukimiu.github.io/cassette-tape">
            <img src={img1} />
          </a>
        </div>
        <div className="col-xs-12 col-sm-8">
          <article className="projects__article">
            <h3>Fun Side Project of the Year</h3>
            <p>
              A Chrome experiment that I presented at the Google I/0 Dublin in
              2016. This project explores the web audio API.
            </p>

            <ProjectLink
              link="https://miukimiu.github.io/cassette-tape"
              text="miukimiu.github.io/cassette-tape"
            />
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default Awards;
