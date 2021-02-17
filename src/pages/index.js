import React from "react";
import { graphql, Link } from "gatsby";

import { rhythm } from "../utils/typography";
import Layout from "../layout/layout";

export default function Home({ data }) {
  const pills = data.allMarkdownRemark.edges;
  return (
    <Layout>
      {pills.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        const description = node.frontmatter.description;

        return (
          <Link
            key={node.id}
            style={{ boxShadow: `none`, width: "50%" }}
            to={node.frontmatter.slug}
          >
            <article className="article card preview-card">
              <span>💊</span>
              <div style={{ width: "80%"}}>
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
      })}
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            description
          }
          id
        }
      }
    }
  }
`;
