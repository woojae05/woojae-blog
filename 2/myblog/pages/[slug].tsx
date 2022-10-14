import React from "react";
import useSWR, { SWRConfig } from "swr";
import { remark } from "remark";
import html from "remark-html";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import { getPostBySlug, getAllDocs } from "../lib/easyDocs";
import BlogDetail from "../components/BlogDetail";

interface PostDetailProps {
  fallback: {};
}

const PostDetail = ({ fallback }: PostDetailProps) => {
  const router = useRouter();
  const query = router.query.slug;
  return (
    <SWRConfig value={{ fallback }}>
      <BlogDetail queryKey={query} />
    </SWRConfig>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getPostBySlug(slug);
  const content = String(await remark().use(html).process(post.content));
  return {
    props: {
      fallback: {
        [slug]: content,
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

export default PostDetail;
