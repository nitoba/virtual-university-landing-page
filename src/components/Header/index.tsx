import logo from "../../assets/logo.svg";
import menu from "../../assets/icons/menu.svg";
import close from "../../assets/icons/close.svg";

import { Button } from "../Button";
import { useRef, useState } from "react";

import styles from "./styles.module.scss";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  return (
    <>
      {isOpen && (
        <div ref={menuRef} className={styles.menuMobile}>
          <img
            onClick={async () => {
              menuRef.current?.classList.add(styles.closeMenu);
              await new Promise((resolve) => setTimeout(resolve, 400));
              setIsOpen(false);
            }}
            className={styles.closeIcon}
            src={close}
            alt="close icon"
          />
          <div className={styles.actionButtons}>
            <button className={styles.login}>Login</button>
            <Button variant="red" title="Register" />
          </div>
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
        </div>
      )}
      <header className={styles.container}>
        <div className={styles.content}>
          <img className={styles.logo} src={logo} alt="Credischool logo" />
          <img
            onClick={() => setIsOpen(true)}
            className={styles.menuIcon}
            src={menu}
            alt="Menu icon"
          />

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
    </>
  );
}
