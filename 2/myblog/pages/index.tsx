import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getAllDocs, DocType } from "../lib/easyDocs";

interface HomeProps {
  docs: DocType[];
}
const Home: NextPage<HomeProps> = ({ docs }) => {
  return (
    <div>
      {docs.map(({ slug, data }: DocType) => (
        <div key={slug} className="grid place-items-center">
          <Link href={`/${slug}`}>
            <a className="text-3xl font-bold underline">{data.title}</a>
          </Link>
          <p>{data.description}</p>
          <p>{data.date}</p>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const docs = getAllDocs();
  return {
    props: { docs },
  };
};

export default Home;
