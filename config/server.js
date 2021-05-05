const dev = process.env.NODE_ENV;
export const server =
  dev === "development"
    ? "http://localhost:3000"
    : "https://nextjs-blog-lrhb9x8sn-muhammaduxair.vercel.app/";
