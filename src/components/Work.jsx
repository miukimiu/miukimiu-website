import React from "react";
import { KawaiiIceCream } from "react-kawaii";
import WorkItem from "./common/WorkItem";
import PageTitle from "./common/PageTitle";
import img1 from "../assets/images/work/iGuide@2x.png";
import img2 from "../assets/images/work/worldlx@2x.png";
import img3 from "../assets/images/work/charts@2x.png";

const Work = () => (
  <section className="section section--light work">
    <svg
      className="work__separator"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path d="M0 100 C 20 0 50 0 100 100 Z" />
    </svg>
    <div className="section__container">
      <div className="row">
        <div className="col-xs-12">
          <PageTitle title="UX/UI Design Works" />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-4">
          <WorkItem img={img1} title="iGuide" tag="lorem ipsum" />
        </div>
        <div className="col-xs-12 col-sm-4">
          <WorkItem img={img2} title="World LX" tag="lorem ipsum" />
        </div>
        <div className="col-xs-12 col-sm-4">
          <WorkItem img={img3} title="Charts" tag="lorem ipsum" />
        </div>
      </div>
    </div>
  </section>
);

export default Work;
