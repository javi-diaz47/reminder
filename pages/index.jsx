import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-3xl font-bold text-primary">
        <Link href="login"> Ingresar </Link>
        <Link href="sing-up"> Registrar </Link>
        Welcome to <a href="">MyDocRminder</a>
      </main>
    </div>
  );
}
