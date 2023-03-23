import React from "react";
import useSWR, { SWRConfig } from "swr";
import { remark } from "remark";
import html from "remark-html";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { getDocBySlug, getAllDocs } from "../lib/easyDocs";
import PostDetail from "../components/PostDetail";

interface PostsProps {
  fallback: {};
}

const Posts: NextPage<PostsProps> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <PostDetail />
    </SWRConfig>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getDocBySlug(slug);

  const htmledContent = String(await remark().use(html).process(post.content));

  return {
    props: {
      fallback: {
        [slug]: htmledContent,
      },
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

export default Posts;
