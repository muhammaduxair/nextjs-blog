const dev = process.env.NODE_ENV;
export const server =
  dev === "development" ? "http://localhost:3000" : window.location.origin;
