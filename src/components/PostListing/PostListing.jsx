import React from "react";
import { Link } from "gatsby";

export const PostListing = ({ postEdges }) => {
  const PostLink = () => {
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

    return (
      <div>
        {postList.map((post, index) => (
          <Link to={post.path} key={post.title + "#" + index}>
            <h1>{post.title}</h1>
          </Link>
        ))
        }
      </div>
    );
  }

  return (
    <div>
      <PostLink />
    </div>
  );
}

