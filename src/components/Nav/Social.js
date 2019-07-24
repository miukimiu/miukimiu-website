import React from 'react';
import styled from 'styled-components';

import rem from '../../utils/rem';
import { navbarHeight } from '../../utils/sizes';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
`;

const SocialLink = styled.a`
  display: inline-block;
  margin-right: ${rem(20)};
  line-height: ${rem(navbarHeight)};
  color: currentColor;
  transition: opacity 0.2s, transform 0.2s;
  -webkit-transform: translateZ(0px);
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.95);
    opacity: 0.6;
  }
  svg {
    path {
      fill: currentColor;
    }
  }
`;

export default () => (
  <Wrapper>
    <SocialLink href="https://www.github.com/arsmth">
      {/* <FontAwesomeIcon icon={faGithub} /> */}
      Icon
    </SocialLink>
  </Wrapper>
);
