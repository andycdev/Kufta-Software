import React, { useState } from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/logo/banner_logo.png";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header({ onNavigate }) {
  const [open, setOpen] = useState(false);

  const handleNav = (index) => {
    onNavigate(index);
    setOpen(false);
  };

  const handleHablemos = () => {
    setOpen(false);

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <header className={styles.container}>
      <img className={styles.logo} src={Logo} alt="Logo" />

      <div className={`${styles.list_items} ${open ? styles.open : ""}`}>
        <p onClick={() => handleNav(0)}>Kufta Software</p>
        <p onClick={() => handleNav(1)}>Portafolio</p>
        <p onClick={() => handleNav(2)}>Sobre mí</p>
      </div>

      <button
        className={`${styles.btn_hablemos} ${styles.mobileOnly}`}
        onClick={handleHablemos}
      >
        Hablemos
      </button>

      <button className={styles.menu_btn} onClick={() => setOpen(!open)}>
        {open ? <FiX /> : <FiMenu />}
      </button>
    </header>
  );
}
