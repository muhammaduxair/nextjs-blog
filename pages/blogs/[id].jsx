import Link from "next/link";
import Meta from "../../components/Meta";
import { server } from "../../config/server";
import styles from "../../styles/Blog.module.css";

const Blogs = ({ articles }) => {
  return (
    <>
      <div className={styles.mainBox}>
        <Meta title={articles.title} description={articles.description} />
        <h1>{articles.title}</h1>
        <h3>{articles.excerpt}</h3>
        <p>{articles.body}</p>
        <Link href="/blogs">&#8592; Go Back</Link>
      </div>
    </>
  );
};
export default Blogs;

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};
