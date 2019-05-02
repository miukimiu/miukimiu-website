import React from "react";
import styled from "styled-components";
import { FiLink2 } from "react-icons/fi";
import iconLink from "../../assets/images/icons/link.svg";

const ProjectLinkEl = styled.a`
  text-decoration: none;
  color: ${props => props.theme.blue};
  display: inline-flex;
  margin-top: 1rem;
  transition: all 1s linear;
  align-items: center;

  svg {
    color: ${props => props.theme.blue};
    margin-right: 0.5rem;
    margin-top: 3px;
  }

  .text {
    position: relative;
    line-height: 1.5;

    @media screen and (max-width: ${props => props.theme.tablet}) {
      text-align: left;
    }

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -1px;
      left: 0;
      background-color: ${props => props.theme.blue};
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
    }
    &:hover:before {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`;

const ProjectLink = props => (
  <ProjectLinkEl href={props.link} target="_blank">
    <FiLink2 />
    <span className="text">{props.text}</span>
  </ProjectLinkEl>
);

export default ProjectLink;
