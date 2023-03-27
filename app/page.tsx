export default function Home() {
  return (
    <section className="mx-auto max-w-4xl">
      <h2 className="mb-4 text-3xl">Pages</h2>
      <ul className="list-inside list-disc">
        <li>
          {/* Use an anchor tag as instructed by @auth0/nextjs-auth0 */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a className="text-blue-500 underline" href="/api/auth/login">
            Auth0 Log In
          </a>
        </li>
      </ul>
    </section>
  );
}
