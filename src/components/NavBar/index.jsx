import styles from "./NavBar.module.scss";
import { FaGithub, FaEnvelope, FaUserTie } from 'react-icons/fa'

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navBar__container}>
        <a href="/"><h1 title="">Alexandre nogueira de Lira</h1></a>
        <div className={styles.navBar__left}>
          <div className={styles.navBar__left__tag}>
            <FaEnvelope />
            <a href="#">Contact-me</a>
          </div>
          <div className={styles.navBar__left__tag}>
            <FaUserTie />
            <a href="#">About-me</a>
          </div>
          <div className={styles.navBar__left__tag}>
            <FaGithub />
            <a href="https://github.com/Alxdelira">Github</a>
          </div>
        </div>
      </div>

    </nav>
  );
}