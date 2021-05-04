import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import Meta from "../components/Meta";
import styles from "../styles/Home.module.css";

const Home = (props) => {
  console.log(props);
  return (
    <div className={styles.container}>
      <Meta title="Home | NextJS" />
      <div>
        <h1>NextJS Blog</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          itaque nihil. Ex vitae facilis laboriosam dolorem odio harum iure
          enim?
        </p>
      </div>
    </div>
  );
};
export default Home;

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query {
        hello
      }
    `,
  });
  return {
    props: {
      data,
    },
  };
};
