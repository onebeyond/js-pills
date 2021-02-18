import React from "react";
import { graphql } from "gatsby";

import Layout from "../../layout/layout";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { html } = markdownRemark;
  return (
    <Layout>
      <div className="pill-post-container">
        <div className="pill-post card">
          <div
            className="pill-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
