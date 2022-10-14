import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

const PostDetail = () => {
  const { query } = useRouter();
  const key = query.slug;
  const { data } = useSWR(key);
  return <div dangerouslySetInnerHTML={{ __html: data }} />;
};

export default PostDetail;
