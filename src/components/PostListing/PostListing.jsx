import React from "react";
import { PostLink } from "./PostLink";
import 'twin.macro';
import { ShadowBox } from "src/components/ShadowBox";
import Masonry from 'react-masonry-css'
import "./PostListing.css"

export const PostListing = ({ postEdges }) => {
  const PostLinks = () => {
    const postList = [];

    postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });

    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      // 500: 1,
    };

    return (
      <div>
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
          {postList.map((post, index) =>
            <ShadowBox key={post.title + "#" + index} >
              <PostLink post={post} />
            </ShadowBox>
          )}
        </Masonry>

      </div>
    );
  }

  return (
    <div tw="flex">

      <div tw="md:w-1/3 md:block hidden pr-4">
        <ShadowBox >🥺</ShadowBox>
      </div>
      <div tw="md:w-2/3">
        <PostLinks />
      </div>
    </div>
  );
}

