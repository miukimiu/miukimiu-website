import { createGlobalStyle } from "styled-components";
import remcalc from "remcalc";
import styledNormalize from "styled-normalize";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');

${styledNormalize}

  /*! http://devinhunt.github.io/typebase.css/ v0.1.0 | MIT License */
  /* Setup */
  html {
    font-size: 120.5%;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    background: #FFFFFF;
    font-size: ${remcalc(16)};
    color: ${props => props.theme.darkGray}

    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-sizing: border-box;
    }
  }


    /* Copy & Lists */
    p {
      font-size: ${remcalc(18)};
      line-height: 1.6;
      margin-top: 0.5rem;
      margin-bottom: 0;
    }
    ul,
    ol {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      font-size: ${remcalc(14)};
      list-style: none;
      margin-left: 0;
    }
    ul li,
    ol li {
      line-height: 1.5rem;
    }
    ul ul,
    ol ul,
    ul ol,
    ol ol {
      margin-top: 0;
      margin-bottom: 0;
    }
    blockquote {
      line-height: 1.5rem;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
    /* Headings */
    h1,
    h2,
    h3 {
      font-weight: 600;
      margin-top: 0;
      margin-bottom: 0;
      line-height: 1.4;
    }
    h1 {
      font-size: ${remcalc(32)};
      line-height: 1.5;
    }
    h2 {
      font-size: ${remcalc(28)};
      line-height: 1.4;
    }
    h3 {
      font-size: ${remcalc(20)};
     
    }
    h4 {
      font-size: ${remcalc(16)};
      font-weight: 600;
     
    }
    h5 {
      font-size: ${remcalc(14)};
      
    }
    h6 {
      font-size: 0.3535rem;
    }

    .section {
    position: relative;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 0 $space;

    @media screen and (min-width: ${props => props.theme.tablet}) {
      padding: 0 ${props => props.theme.space * 2};
    }

    &__separator {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 50px;
      fill: white;
    }
    &__separator--top {
      position: absolute;
      top: -49px;
      left: 0;
      width: 100%;
      height: 50px;
      fill: white;
    }


    &--light {
      color: ${props => props.theme.darkGray};
    }
    &--dark {
      color: white;
    }
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    outline: none;
    color: inherit;
    font: inherit;

    line-height: normal;

    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    -webkit-appearance: none;
  }


`;
