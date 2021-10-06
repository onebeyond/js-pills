import React from 'react';
import { Link } from 'gatsby';

const pillArticle = ({ node, title, description }) => {
  return (
    <article className='article preview-card'>
      <span id='pill'>💊</span>
      <div className='pill-article-content'>
        <h3>
          <Link
            style={{ boxShadow: `none`, width: '50%' }}
            to={node.frontmatter.slug}
            data-cy='article-link'
          >
            {title}
          </Link>
        </h3>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default pillArticle;
