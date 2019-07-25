import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import SEO from './SEO';
import theme from '../../config/theme';
import useBuildTime from '../hooks/useBuildTime';
import NavBar from './navbar/NavBar';
import 'typeface-cantata-one';
import 'typeface-open-sans';

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Footer = styled.footer`
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: #cecece;
  color: #868686;
`;

const Layout = ({ children, customSEO, noFooter }) => {
  const buildTime = useBuildTime();

  const [isMobileNavFolded, setMobileNavFolded] = useState(true);

  const toggleMobileNav = () => {
    setMobileNavFolded(!isMobileNavFolded);
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        {!customSEO && <SEO buildTime={buildTime} />}
        <GlobalStyle />
        <NavBar
          isMobileNavFolded={isMobileNavFolded}
          onMobileNavToggle={toggleMobileNav}
        />
        {children}

        {!noFooter && (
          <Footer>
            &copy; 2019 by Miukimiu. All rights reserved. <br />
            <a href="https://github.com/miukimiu/miukimiu-website/">
              GitHub Repository
            </a>{' '}
            <br />
            <span>Last build: {buildTime}</span>
          </Footer>
        )}
      </Wrapper>
    </ThemeProvider>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  customSEO: PropTypes.bool,
  noFooter: PropTypes.bool
};

Layout.defaultProps = {
  customSEO: false,
  noFooter: false
};
