import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts/mainLayout';
import Card from '../layouts/cardLayout';
import SEO from '../components/seo';
import PillArticle from '../components/pillArticle';

const renderPills = pills => {};

const Home = ({ data }) => {
  const pills = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title='All Pills' />
      {pills.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        const description = node.frontmatter.description;

        return (
          <Card key={node.id}>
            <PillArticle node={node} title={title} description={description} />
          </Card>
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
