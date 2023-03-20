import Link from "next/link";
import "./global.css";

export const metadata = {
  title: "My App",
  description: "A playground for Next.js",
};

const Header = () => (
  <header className="mb-4 bg-blue-500 p-2 shadow-md">
    <div className="mx-auto max-w-4xl">
      <Link href="/">
        <h1 className="text-xl text-white">My App</h1>
      </Link>
    </div>
  </header>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
