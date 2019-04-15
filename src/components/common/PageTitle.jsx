import React from "react";
import styled from "styled-components";
import separator from "../../assets/images/page-title/page-title-separator.svg";

const PageTitleEl = styled.div`
  margin-bottom: 1rem;

  @media screen and (max-width: ${props => props.theme.tablet}) {
    text-align: center;
    justify-content: center;
  }
`;

const PageTitle = props => (
  <PageTitleEl>
    <h2>{props.title}</h2>
    <img className="page-title__separator" src={separator} alt="" />
  </PageTitleEl>
);

export default PageTitle;
