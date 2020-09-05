import React from "react";
import { Link } from "gatsby";
import { ShadowBox } from "src/components/ShadowBox";
import tw, { css } from "twin.macro"
import "twin.macro";
import moment from 'moment';
import 'moment/locale/ja';
moment.locale("ja");

const MyBadge = ({ text }) => (
  <a tw="px-2 py-1 text-xxs text-gray-900 bg-green-200 rounded-full hover:text-gray-900 focus:text-gray-900 hover:bg-gray-300" href="#">
    {text}
  </a>
)

export const PostLink = ({ post }) => {

  return (
    <Link to={post.path}>
      <div tw="break-all">
        <h1 tw="inline  text-lg">{post.title}</h1>
        <span tw="ml-1 text-xs text-gray-700">（{moment(post.date).format("YYYY-MM-DD")}）</span>
        <div tw="mt-2 clamp-2 text-xs text-gray-600">{post.excerpt}</div>
      </div>
    </Link>
  )
}
