import styles from "./styles.module.scss";
import logo from "../../assets/logo.svg";
import twitter from "../../assets/icons/twitter.svg";
import youtube from "../../assets/icons/youtube.svg";
import linkedin from "../../assets/icons/linkedin.svg";

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.leftContent}>
        <img className={styles.logo} src={logo} alt="Credischool logo" />
        <p className={styles.copyright}>
          Copyright © 2020 Credischool University. <br /> All Right Reserved
        </p>
      </div>
      <div className={styles.middleContent}>
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

        <nav className={styles.navContainer}>
          <ul className={styles.listOfItems}>
            <li className={styles.item}>
              <a href="#">Terms</a>
            </li>

            <li className={styles.item}>
              <a href="#">Privacy</a>
            </li>

            <li className={styles.item}>
              <a href="#">GDPR</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.socialMediaContainer}>
          <img src={twitter} alt="Twitter logo" />
          <img src={youtube} alt="Youtube logo" />
          <img src={linkedin} alt="Linkedin logo" />
        </div>
        <span>Development with ♥ by NitoBa</span>
      </div>
    </footer>
  );
}
