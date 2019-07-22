import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/header-logo.svg';

const StyledHeadroom = styled(Headroom)`
  height: 60px !important;

  .headroom--scrolled {
    background: ${props => props.theme.colors.background.dark};

    img {
      margin-bottom: 0;
    }
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;

  img {
    max-width: 180px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;

  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};

    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
`;

const NavBar = () => (
  <StyledHeadroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      <img src={logo} alt="Soundtracktor Logo" />
    </StyledLink>
    <Nav>
      <Link to="/">Blog</Link>
      {/* <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link> */}
    </Nav>
  </StyledHeadroom>
);

export default NavBar;
