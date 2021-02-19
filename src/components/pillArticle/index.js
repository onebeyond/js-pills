import React from 'react';
import { Link } from 'gatsby';

const pillArticle = ({ node, title, description }) => {
  return (
    <Link
      style={{ boxShadow: `none`, width: '50%' }}
      to={node.frontmatter.slug}
    >
      <article className='article preview-card'>
        <span>💊</span>
        <div className='pill-article-content'>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </article>
    </Link>
  );
};

export default pillArticle;
