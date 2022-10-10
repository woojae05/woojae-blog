import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getAllDocs, DocType } from "../lib/easyDocs";
import styles from "../styles/Home.module.css";

const Home: NextPage = (props: any) => {
  const { docs } = props;

  return (
    <div>
      {docs.map(({ slug, data }: DocType) => (
        <>
          <div>
            <Link href={`/${slug}`}>
              <a>{data.title}</a>
            </Link>
            <p>{data.description}</p>
            <p>{data.date}</p>
          </div>
        </>
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
