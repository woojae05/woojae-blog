import React from "react";
import Router from "next/router";
import useSWR from "swr";

interface BlogDetail {
  queryKey: string | string[] | undefined;
}
const BlogDetail = ({ queryKey }: BlogDetail) => {
  const { data } = useSWR(queryKey);
  return <div dangerouslySetInnerHTML={{ __html: data }} />;
};

export default BlogDetail;
