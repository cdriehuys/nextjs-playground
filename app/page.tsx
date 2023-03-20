import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>My App</title>
      </Head>
      <main>
        <h1 className="text-3xl">My App</h1>

        <h2 className="text-xl">Pages</h2>
        <ul>
          <li>
            <Link href="/log-in">Log In</Link>
          </li>
        </ul>
      </main>
    </>
  );
}
