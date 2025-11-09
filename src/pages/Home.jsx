import styles from "./styles/Home.module.css";

function Home() {
  return (
    <section>
      <div className={styles.title}>Welcome to the store</div>
      <div className={styles.content}>
        This is a basic project to display my skills in React.js, this project
        showcases my abilities in using css modules, react-router, and fetching
        data from api's using useEffect.
      </div>
    </section>
  );
}

export default Home;
