import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../layout/layout';
import SEO from '../../components/seo';
import Card from '../../components/card';

const Template = ({ data }) => {
  const { markdownRemark } = data;
  const { html } = markdownRemark;
  const pill = data.markdownRemark;
  const { title, description, date, author } = pill.frontmatter;
  console.log(pill.frontmatter);

  return (
    <Layout>
      <SEO title={title} description={description || pill.excerpt} />
      <div className='pill-post-container'>
        <Card className='pill-post'>
          <div
            className='pill-post-content'
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <i className='date-and-author'>
            {date} - {author !== '' ? author : 'author unknown'}
          </i>
        </Card>
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
        author
      }
    }
  }
`;

export default Template;
