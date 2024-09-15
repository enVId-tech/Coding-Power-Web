"use server";
import styles from "@/styles/homepage.module.scss";

export default async function Page(): Promise<React.JSX.Element> {
  return (
    <div className={styles.homepage}>
      <div className={styles.homepageTitle}>
        <div className={styles.title}>
          <div className={styles.titleContent}>
            <h4>Java & Python Classes</h4>
            <h1>Starting Soon(TM)</h1>
            <p>Empowering the next generation of programmmers</p>
            <a className={styles.registerButton} href="/register">Register</a>
          </div>
        </div>
      </div>
    </div>
  )
}