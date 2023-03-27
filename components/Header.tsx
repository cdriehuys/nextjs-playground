import Link from "next/link";
import NavbarAuthLinks from "./NavbarAuthLinks";

export default function Header() {
  return (
    <header className="mb-4 bg-blue-500 p-2 shadow-md">
      <div className="mx-auto flex max-w-4xl justify-between">
        <Link href="/">
          <h1 className="text-xl text-white">My App</h1>
        </Link>
        <NavbarAuthLinks />
      </div>
    </header>
  );
}
