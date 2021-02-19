import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout/layout';
import Card from '../components/card';
import SEO from '../components/seo';

const Home = ({ data }) => {
  const pills = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title='All Pills' />
      {pills.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        const description = node.frontmatter.description;

        return (
          <Card
            key={node.id}
            node={node}
            title={title}
            description={description}
          />
        );
      })}
    </Layout>
  );
};

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

export default Home;
