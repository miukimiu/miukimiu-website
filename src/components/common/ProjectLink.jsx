import React from 'react';
import iconLink from '../../assets/images/icons/link.svg';

const ProjectLink = props => (
  <a href={props.link} className="project-link">
    <img alt="" className="project-link__img" src={iconLink} />
    <span className="project-link__text">{props.text}</span>
  </a>
);

export default ProjectLink;
