import React from "react";
import styles from '@/styles/_components/navbar.module.scss';

export default async function Navbar(): Promise<React.JSX.Element> {
  return (
	<nav className={styles.navbar}>
		  <div className={styles.navbar__logo}>
			<a href="/">
				  <img src="/CodingPowerLogo.webp" alt="Coding Power Logo" />
			  </a>
		  </div>
		  <div className={styles.navbar__links}>
			  <a href="/">Home</a>
			  <a href="/about">About</a>
			  <a href="/contact">Contact</a>
		  </div>
	</nav>
  );
}