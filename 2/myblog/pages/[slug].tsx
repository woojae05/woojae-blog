import React from "react";
import fs from "fs";
import { remark } from "remark";
import html from "remark-html";
import { GetStaticProps, GetStaticPaths } from "next";
import { getPostBySlug, getAllDocs } from "../lib/easyDocs";

interface PostDetailProps {
  content: any;
}

const PostDetail = ({ content }: PostDetailProps) => {
  function createMarkup() {
    return { __html: content };
  }
  return <div dangerouslySetInnerHTML={createMarkup()}></div>;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params?.slug as string);
  const content = String(await remark().use(html).process(post.content));
  return {
    props: {
      content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const docs = getAllDocs();
  return {
    paths: docs.map((doc) => ({ params: { slug: doc.slug } })),
    fallback: false,
  };
};

export default PostDetail;
