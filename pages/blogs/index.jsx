import Meta from "../../components/Meta";
import styles from "../../styles/Blog.module.css";
import Link from "next/link";
import { server } from "../../config/server";

const Blogs = ({ articles }) => {
  return (
    <div>
      <Meta title="Blogs | NextJS" />
      <div className={styles.blogBox}>
        {articles.map((v) => (
          <Link href={`/blogs/${v.id}`} key={v.id}>
            <div className={styles.card}>
              <h2>{v.title}</h2>
              <p>{v.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Blogs;

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
