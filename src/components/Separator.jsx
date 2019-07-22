import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

export const SeparatorSvg = styled.svg`
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 50px;
  fill: ${props => props.color};
`;

const Separator = ({ color }) => (
  <SeparatorSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 829 60"
    preserveAspectRatio="none"
    fill={color}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M0,23.9290015 C206.010417,8.05185466 366.010417,0.11328125 480,0.11328125 C593.989583,0.11328125 710.322917,8.05185466 829,23.9290015 L829,60 L0,60 L0,23.9290015 Z"
    />
  </SeparatorSvg>
);

Separator.defaultProps = {
  color: '#fff',
};

Separator.propTypes = {
  color: PropTypes.string,
};

export default Separator;
