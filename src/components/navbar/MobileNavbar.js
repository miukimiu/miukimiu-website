import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import rem from '../../utils/rem';
import { navbarHeight } from '../../utils/sizes';
import { mobile } from '../../utils/media';
import NavLinks from './NavLinks';
import Social from './Social';
import NavSeparator from './NavSeparator';
import NavButton from './NavButton';

const Wrapper = styled.div`
  display: none;

  ${mobile(css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${rem(navbarHeight)};
  `)}
`;

const SecondaryMenu = styled.div`
  position: absolute;
  top: 3.125rem;
  left: 0;
  right: 0;
  ${p =>
    p.open
      ? css`
          height: 3.125rem;
        `
      : css`
          height: 0;
        `}
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  transition: height 0.1s;
  user-select: none;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  overflow-y: hidden;
  background: #cecece;
  color: #868686;
`;

const LogoLink = styled(Link).attrs({
  to: '/',
  'aria-label': 'home'
})`
  display: inline-block;
  vertical-align: center;
  margin-left: 1.25rem;
  color: currentColor;
`;

const IconWrapper = styled.div`
  transition: transform 0.1s;
  color: white;
  ${p =>
    p.rotate &&
    css`
      transform-origin: 50% 55%;
      transform: rotate(180deg);
    `}
`;

const SecondaryMenuItem = styled.div`
  padding-right: 1.25rem;
`;

const MobileNavbar = ({ isMobileNavFolded, onMobileNavToggle }) => (
  <Wrapper>
    <LogoLink>
      <p>Logo</p>
    </LogoLink>

    <Wrapper>
      <NavButton onClick={onMobileNavToggle} active={!isMobileNavFolded}>
        <IconWrapper rotate={!isMobileNavFolded}>
          <FiMenu />
        </IconWrapper>
      </NavButton>
    </Wrapper>
    <SecondaryMenu open={!isMobileNavFolded}>
      <NavLinks />
      <NavSeparator />
      <SecondaryMenuItem>
        <Social />
      </SecondaryMenuItem>
    </SecondaryMenu>
  </Wrapper>
);

export default MobileNavbar;
