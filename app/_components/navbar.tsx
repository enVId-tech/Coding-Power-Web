import React from "react";
import styles from '@/styles/_components/navbar.module.scss';

export default async function Navbar(): Promise<React.JSX.Element> {
  return (
	<nav className={styles.navbar}>
	  <ul>
		<li>
		  <a href="/">Home</a>
		</li>
		<li>
		  <a href="/about">About</a>
		</li>
	  </ul>
	</nav>
  );
}