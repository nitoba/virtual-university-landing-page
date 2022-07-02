import styles from "./styles.module.scss";
import logo from "../../assets/logo.svg";
import { Button } from "../Button";
export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img className={styles.logo} src={logo} alt="Credischool logo" />
        <nav className={styles.navContainer}>
          <ul className={styles.listOfItems}>
            <li className={styles.item}>
              <a href="#">Home</a>
            </li>

            <li className={styles.item}>
              <a href="#">Campus</a>
            </li>

            <li className={styles.item}>
              <a href="#">Education</a>
            </li>

            <li className={styles.item}>
              <a href="#">Alumni</a>
            </li>

            <li className={styles.item}>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        <div className={styles.actionButtons}>
          <button className={styles.login}>Login</button>
          <Button variant="red" title="Register" />
        </div>
      </div>
    </header>
  );
}
