// import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import Link from "next/link";
import Meta from "../components/Meta";
import styles from "../styles/Home.module.css";
import { server } from "../config/server";

const Home = ({ articles }) => {
  return (
    <div className={styles.container}>
      <Meta title="Home | NextJS" />
      <div>
        <div className={styles.headerBox}>
          <h1>NextJS Testing Blog</h1>
        </div>
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
    </div>
  );
};
export default Home;

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};

// ===========================
// graphql api
// ===========================
// export const getStaticProps = async () => {
//   const client = new ApolloClient({
//     uri: `${server}/api/graphql`,
//     cache: new InMemoryCache(),
//   });
//   const { data } = await client.query({
//     query: gql`
//       query {
//         hello
//       }
//     `,
//   });
//   return {
//     props: {
//       data,
//     },
//   };
// };
