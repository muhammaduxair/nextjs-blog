import Nav from "./Nav";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
import Meta from "../components/Meta";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Meta />
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
