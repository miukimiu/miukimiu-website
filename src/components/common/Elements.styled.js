import styled from "styled-components";
import { lighten } from "polished";

export const Section = styled.div`
  padding: 3rem 0 6rem;
  background: ${props => props.color};
  text-align: left;
  position: relative;

  @media screen and (min-width: ${props => props.theme.tablet}) {
    padding: 6rem 0 12rem;
  }

  .item {
    padding-bottom: 2rem;

    @media screen and (max-width: ${props => props.theme.tablet}) {
      padding-bottom: 4rem;
    }
  }
`;

export const Inner = styled.div`
  max-width: 48em;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
`;

export const Thumb = styled.a`
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  display: block;
  margin: 0 1rem 1rem 0;

  @media screen and (max-width: ${props => props.theme.tablet}) {
    max-width: 400px;
  }

  img {
    cursor: pointer;
    display: block;
    width: 100%;
    height: auto;
    border-radius: 10px;
    transition: ease all 0.2s;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 20px 80px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const Article = styled.article`
  text-align: center;

  @media screen and (min-width: ${props => props.theme.tablet}) {
    text-align: left;
  }

  p {
    margin-bottom: 0;
  }

  &.about {
    p {
      padding-bottom: 1rem;
    }
  }
`;

export const HeaderEl = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  align-items: center;
  padding: 10px 0;
  z-index: 999;
  background: ${props => (props.active === "in-viewport" ? "none" : "white")};
  box-shadow: ${props =>
    props.active === "in-viewport"
      ? "none"
      : "0 1px 2px 0 rgba(36, 50, 66, 0.1)"};

  > div {
    display: flex;
    flex: 1;
    align-items: center;
    > div {
      flex: 1;
    }
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
      margin: 0;
      padding: 0;
    }

    li {
      display: inline-flex;
    }
    button {
      color: ${props =>
        props.active === "in-viewport" ? "white" : props.theme.darkGray};
      text-decoration: none;
      padding: 2px;
      margin-left: 20px;

      &:hover {
        color: ${props => props.theme.blue};
      }
    }
  }
`;

export const Subtitle = styled.h3`
  color: ${props => lighten(0.2, props.theme.darkGray)};
`;
