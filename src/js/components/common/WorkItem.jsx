import React from 'react';

const WorkItem = props => (
  <div className="work__item">
    <div className="thumb">
      <img src={props.img}></img>
    </div>
    <h4 className="title">{props.title}</h4>
    <h5 className="tag">{props.tag}</h5>
  </div>
);

export default WorkItem;
