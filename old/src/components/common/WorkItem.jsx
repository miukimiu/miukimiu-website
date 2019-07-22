import React from 'react';

const WorkItem = props => (
  <div className="work__item">
    <a className="thumb" href={props.link}>
      <img src={props.img}></img>
    </a>
    <h4 className="title">{props.title}</h4>
    <h5 className="tag">{props.tag}</h5>
  </div>
);

export default WorkItem;
