import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        copyright © 2020 | Powered by{" "}
        <a href="https://nextjs.org/" target="_">
          NextJS
        </a>
      </p>
      <p>
        Created By{" "}
        <a href="https://www.facebook.com/m.uzair17/" target="_">
          Muhammad Uzair
        </a>
      </p>
    </footer>
  );
};

export default Footer;
