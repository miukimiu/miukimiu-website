import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.colors.background.dark};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;

  a {
    color: white;
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <span>
        <a href="https://soundtracktor.com">Soundtracktor</a>
      </span>
    </Text>
  </Wrapper>
);
export default Footer;
