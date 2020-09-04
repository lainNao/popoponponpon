import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import { PostListing } from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./listing.css";


function Listing({ data, pageContext }) {

  const postEdges = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <div className="listing-container">
        <h1>{config.siteTitle}</h1>
        <div className="posts-container">
          <PostListing postEdges={postEdges} />
        </div>
        <Pagination pageContext={pageContext} />
      </div>
    </Layout>
  );
}

const Pagination = ({ pageContext }) => {
  const { currentPageNum, pageCount } = pageContext;
  const prevPage = currentPageNum - 1 === 1 ? "/" : `/${currentPageNum - 1}/`;
  const nextPage = `/${currentPageNum + 1}/`;
  const isFirstPage = currentPageNum === 1;
  const isLastPage = currentPageNum === pageCount;

  return (
    <div className="paging-container">
      {!isFirstPage && <Link to={prevPage}>前へ</Link>}
      {[...Array(pageCount)].map((_val, index) => {
        const pageNum = index + 1;
        return (
          <Link key={`listing-page-${pageNum}`} to={pageNum === 1 ? "/" : `/${pageNum}/`}>
            {pageNum}
          </Link>
        );
      })}
      {!isLastPage && <Link to={nextPage}>次へ</Link>}
    </div>
  );
}

export default Listing;

/* eslint no-undef: "off" */
export const listingQuery = graphql`
  query ListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
