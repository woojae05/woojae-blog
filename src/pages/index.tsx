import type { NextPage, GetStaticProps } from "next";
import PostCard from "../components/post/PostCard";
import { getAllDocs, DocType } from "../lib/easyDocs";

interface HomeProps {
  docs: DocType[];
}
const Home: NextPage<HomeProps> = ({ docs }) => {
  return (
    <div className="container m-auto grid grid-cols-3">
      {docs.map(({ slug, data }: DocType) => (
        <PostCard key={slug} slug={slug} data={data} />
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
