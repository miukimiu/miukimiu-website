import React from 'react';
import separator from '../../assets/images/page-title/page-title-separator.svg';

const PageTitle = props => (
  <div className="page-title">
    <h2>{props.title}</h2>
    <img className="page-title__separator" src={separator} alt="" />
  </div>

);

export default PageTitle;
