"use client";
import React from "react";
import styles from '@/styles/_components/navbar.module.scss';

interface NavbarProps {
	activePage: string;
}

type PagesObject = {
	[key: string]: string;
}

const pages: PagesObject = {
	Home: '/',
	About: '/about',
	Contact: '/contact'
}

export default function Navbar({ activePage }: NavbarProps): React.JSX.Element {
	React.useEffect((): void => {
		const links = document.querySelectorAll('.navbar__links a');
		links.forEach(link => {
			if (link.textContent === activePage) {
				link.classList.add(styles.active);
			} else {
				if (link.classList.contains(styles.active)) {
					link.classList.remove(styles.active);
				}
			}
		});
	}, [activePage]);

	return (
	<nav className={styles.navbar}>
		  <div className={styles.navbar__logo}>
			<a href={pages.Home}>
				  <img src="/CodingPowerLogo.webp" alt="Coding Power Logo" />
			  </a>
		  </div>
			<div className={styles.navbar__links}>
				{
					Object.keys(pages).map((page: string) => {
						return (
							<a href={pages[page]} key={page}>
								{page}
							</a>
						);
					})
				}
		  </div>
	</nav>
  );
}