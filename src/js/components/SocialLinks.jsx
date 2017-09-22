import React from 'react';
import codepenImg from '../../images/social-icons/codepen.svg';
import dribbbleImg from '../../images/social-icons/dribbble.svg';
import githubImg from '../../images/social-icons/github.svg';
import linkedinImg from '../../images/social-icons/linkedin.svg';
import mediumImg from '../../images/social-icons/medium.svg';
import twitterImg from '../../images/social-icons/twitter.svg';

const SocialLinks = () => (
  <section className="social-links">

    <a href="https://codepen.io/miukimiu">
      <img alt="" src={codepenImg} />
    </a>
    <a href="https://dribbble.com/miukimiu">
      <img alt="" src={dribbbleImg} />
    </a>
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
  </section>
);

export default SocialLinks;
