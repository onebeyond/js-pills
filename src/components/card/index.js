import React from "react";
import { Link } from "gatsby";

import { rhythm } from "../../utils/typography";

const Card = ({ node, title, description }) => {
  return (
    <Link
      style={{ boxShadow: `none`, width: "50%" }}
      to={node.frontmatter.slug}
    >
      <article className="article card preview-card">
        <span>💊</span>
        <div style={{ width: "80%" }}>
          <h3
            style={{
              marginBottom: rhythm(1 / 4),
              padding: rhythm(1 / 8),
            }}
          >
            {title}
          </h3>
          <p style={{ padding: rhythm(1 / 8), maxWidth: "80%" }}>
            {description}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default Card;
