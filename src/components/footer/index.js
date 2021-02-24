import React from 'react';

import { twitterUrl, githubOrgUrl, linkedinUrl } from '../../settings/global';

const footer = () => {
  return (
    <footer>
      <p>
        <a
          className='footer-link'
          href={githubOrgUrl}
          rel='noopener noreferrer nofollow'
          target='_blank'
        >
          Github
        </a>
        <a
          className='footer-link'
          href={twitterUrl}
          rel='noopener noreferrer nofollow'
          target='_blank'
        >
          Twitter
        </a>
        <a
          className='footer-link'
          href={linkedinUrl}
          rel='noopener noreferrer nofollow'
          target='_blank'
        >
          Linkedin
        </a>
      </p>
      <p>
        {'Powered by '}
        <a
          href='gatsbyjs.com'
          rel='noopener noreferrer nofollow'
          target='_blank'
        >
          {'Gatsby'}
        </a>
        {' & '}
        <a
          href='github.com'
          rel='noopener noreferrer nofollow'
          target='_blank'
        >
          {'GitHub'}
        </a>
      </p>
    </footer>
  );
};

export default footer;
