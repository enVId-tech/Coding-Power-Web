import Image from "next/image";
import styles from "@/styles/homepage.module.scss";

export default async function Page(): Promise<React.JSX.Element> {
  return (
    <div className={styles.homePage}>
      <h1>Welcome to Next.js!</h1>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={72}
        height={16}
      />
    </div>
  )
}