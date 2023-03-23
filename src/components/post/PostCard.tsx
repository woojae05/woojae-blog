import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";
import React from "react";

interface IPostCardProps {
  slug: string;
  data: {
    [key: string]: any;
  };
}

const PostCard = ({ slug, data }: IPostCardProps) => {
  console.log(data.thumbnail);

  return (
    <CardContainer>
      <Link href={`/${slug}`}>
        <div className="bg-white w-80 rounded-lg px-6 py-8 container place-content-center ring-1 pl-16 ring-slate-900/5 shadow-xl cursor-pointer">
          {<Image src={`${data.thumbnail}`} width="320" height="200" />}
          <br />
          <a className="text-3xl font-bold text-stone-900">{data.title}</a>
          <p>{data.description}</p>
          <p>{data.date}</p>
        </div>
      </Link>
    </CardContainer>
  );
};

export default PostCard;

const CardContainer = styled.div``;
