import Image from "next/image";
import styles from "@/styles/homepage.module.scss";

export default async function Page(): Promise<React.JSX.Element> {
  return (
    <div className={styles.homepage}>
      <h1 className={styles.title}>Welcome to Next.js!</h1>
      <p className={styles.description}>
        Get started by editing <code>pages/index.tsx</code>
      </p>
    </div>
  )
}