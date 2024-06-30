import React, { useState } from "react";
import Link from "next/link";
import styles from "/styles/MobileMenu.module.css";

const MobileMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu} className={styles.menubutton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {isMenuOpen && (
        <div className={styles.dropdown}>
          <Link href="posts/about">About</Link>
          <Link href="#">Selling</Link>
          <Link href="#">Buying</Link>
          <Link href="#">Advisors</Link>
          <Link href="#">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
