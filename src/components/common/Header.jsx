import React from "react";
import { withTheme } from "styled-components";
import styled from "styled-components";
import { HeaderEl } from "./Elements.styled";
import { FiMenu } from "react-icons/fi";

const Inner = styled.div`
  padding: 0 30px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;

  img {
    max-width: 40px;
  }

  @media screen and (min-width: 576px) {
    padding: 0 50px;
  }
`;

class HeaderComp extends React.Component {
  state = {
    active: "in-viewport",
    sidebarOpen: false
  };

  componentDidMount() {
    document.addEventListener("scroll", this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.trackScrolling);
  }

  trackScrolling = () => {
    const heroSection = document.querySelector(".welcome");

    const boundingSection = heroSection.getBoundingClientRect();

    if (
      boundingSection.top >= 0 &&
      boundingSection.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    ) {
      this.setState({
        active: "in-viewport"
      });
    } else {
      this.setState({
        active: "not-in-viewport"
      });
    }
  };

  render() {
    const { active } = this.state;

    const { theme, children } = this.props;

    return (
      <HeaderEl active={active}>
        <Inner>
          <div>
            <svg width="40" height="40" viewBox="0 0 40 40">
              <g fill="none" fillRule="evenodd">
                <rect
                  fill={active === "in-viewport" ? "#08061D" : theme.darkBlue}
                  width="40"
                  height="40"
                  rx="20"
                />
                <path
                  d="M9.72024656,-1.0658141e-14 L10.2536747,-1.0658141e-14 C11.0676507,-1.0658141e-14 11.7788811,0.538805512 12.3873874,1.6164327 L12.1740161,5.9269199 C12.1740161,7.14024829 12.3518237,8.11408936 12.7074443,8.84847234 C12.8575952,8.84048991 13.5727769,8.11809141 14.8530109,6.68125516 C15.0900913,6.60941335 16.5125522,5.20851902 19.1204362,2.47853014 C20.1003684,1.1135357 21.1000423,0.43104872 22.1194879,0.43104872 L22.8662873,0.32328654 C23.5617231,0.482935012 23.9528998,0.698457217 24.0398293,0.96985962 C24.1978829,0.96985962 24.5179366,1.25722256 25,1.83195706 L25,2.04748142 C25,2.77388197 23.9647646,5.43598031 21.8942627,10.0338563 C21.1909243,11.7580598 20.7286245,12.6201486 20.5073495,12.6201486 L20.6140351,12.7279108 L20.6140351,12.835673 L19.2271219,15.6374897 C19.100679,15.6454721 18.5316946,16.8348354 17.5201517,19.2056152 L16.7733523,20.1754748 L16.0265529,20.1754748 L16.0265529,19.9599505 L15.5998103,20.1754748 C15.5998103,20.0158263 15.3508797,19.8721449 14.8530109,19.7444261 L14.6396396,19.9599505 C14.4420727,19.9360032 14.2998266,19.7564013 14.2128971,19.4211396 C13.9284007,19.4211396 13.7861546,19.3492988 13.7861546,19.2056152 L13.7861546,18.4512799 C13.7861546,17.0543558 14.8530002,14.3563371 16.9867236,10.3571429 C15.8724458,11.3948579 14.8056002,12.6879912 13.7861546,14.2365813 C13.5490742,14.2365813 13.2250692,14.4521035 12.8141299,14.8831544 L12.7074443,14.8831544 C11.9487871,14.348332 11.2375567,14.0250487 10.5737316,13.9132948 C9.85458784,13.4183845 9.21448044,11.9456495 8.65339023,9.49504542 L8.5467046,9.49504542 C5.44095175,16.6951915 3.73004742,20.4349009 3.41394026,20.7142857 L3.20056899,20.7142857 L2.66714083,20.3909992 L2.34708393,20.4987614 L2.24039829,20.3909992 L2.13371266,20.4987614 L1.92034139,20.0677126 L1.70697013,20.283237 L1.6002845,20.1754748 L0.640113798,20.3909992 C0.482060218,19.9998604 0.268691086,19.7843382 -6.07514039e-13,19.7444261 L-6.07514039e-13,19.3133774 C-6.07514039e-13,17.5891739 2.03095804,12.6960216 6.09293504,4.63377374 C7.0491592,1.68825943 7.83151268,0.21552436 8.44001897,0.21552436 L9.72024656,-1.0658141e-14 Z"
                  transform="translate(7 10)"
                  fill="#46F4D4"
                />
              </g>
            </svg>
          </div>
          <nav>{children}</nav>
        </Inner>
      </HeaderEl>
    );
  }
}

export default withTheme(HeaderComp);
