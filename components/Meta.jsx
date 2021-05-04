import Head from "next/head";

const Meta = ({ title, description, keywords }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta charSet="utf-8" />
    </Head>
  );
};

Meta.defaultProps = {
  title: "NextJS Blog",
  description: "Built in NextJS Created by Muhammad Uzair",
  keywords: "blog, nextjs",
};

export default Meta;
