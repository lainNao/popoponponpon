import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";
import 'twin.macro';



export default function PostTemplate({ data, pageContext }){
  const { slug } = pageContext;
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;

  if (!post.id) {
    post.id = slug;
  }

  return (
    <Layout>
      <div>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div>
          <h1 tw="font-black text-gray-700 text-xl py-5 mb-3 text-center">{post.title}</h1>
          <div tw="text-sm text-gray-900" dangerouslySetInnerHTML={{ __html: postNode.html }} />
        </div>
      </div>
    </Layout>
  )
}


/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
