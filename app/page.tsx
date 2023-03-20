import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2 className="text-xl">Pages</h2>
      <ul>
        <li>
          <Link href="/log-in">Log In</Link>
        </li>
      </ul>
    </>
  );
}
