import React from "react";
import { graphql } from "gatsby";

import Layout from "../../layout/layout";
import SEO from "../../components/seo";

const Template = ({ data }) => {
  const { markdownRemark } = data;
  const { html } = markdownRemark;
  const pill = data.markdownRemark;

  return (
    <Layout>
      <SEO
        title={pill.frontmatter.title}
        description={pill.frontmatter.description || pill.excerpt}
      />
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
};

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

export default Template;
