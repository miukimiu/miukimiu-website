import React from "react";
import styled from "styled-components";
import dribbbleImg from "../../assets/images/social-icons/dribbble.svg";
import githubImg from "../../assets/images/social-icons/github.svg";
import linkedinImg from "../../assets/images/social-icons/linkedin.svg";
import mediumImg from "../../assets/images/social-icons/medium.svg";
import twitterImg from "../../assets/images/social-icons/twitter.svg";

const SocialLinksEl = styled.div`
  -ms-flex-pack: center;
  justify-content: center;
  display: -ms-flexbox;
  display: flex;
  padding: 1rem;

  > a {
    padding: 0 0.5rem;
    color: hsla(0, 0%, 100%, 0.8);
  }
`;

const SocialLinks = () => (
  <SocialLinksEl>
    <a href="https://github.com/miukimiu">
      <img alt="" src={githubImg} />
    </a>
    <a href="https://www.linkedin.com/in/elizabetoliveira/">
      <img alt="" src={linkedinImg} />
    </a>
    <a href="https://medium.com/@miukimiu">
      <img alt="" src={mediumImg} />
    </a>
    <a href="https://twitter.com/miuki_miu">
      <img alt="" src={twitterImg} />
    </a>
    <a href="https://dribbble.com/miukimiu">
      <img alt="" src={dribbbleImg} />
    </a>
  </SocialLinksEl>
);

export default SocialLinks;
