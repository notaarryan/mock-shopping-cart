import styles from "./styles/Home.module.css";

function Home() {
  return (
    <section className={styles.homeSection}>
      <div className={styles.title}>Welcome to the store</div>
      <div className={styles.content}>
        This is a basic project to display my skills in React.js, this project
        showcases my abilities in using css modules, react-router-dom, and
        fetching data from api's using useEffect.
      </div>
    </section>
  );
}

export default Home;
