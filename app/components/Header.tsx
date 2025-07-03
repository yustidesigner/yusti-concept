import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full px-6 py-4 bg-twine shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl text-amber-700">
          <Link href="/">
            <Image
              src={"/images/yan-designer-logo.png"}
              alt="Fans Logo"
              height={200}
              width={150}
            />
          </Link>
        </div>

        {/* Links */}
        <nav className="flex items-center space-x-8 text-2xl font-extralight">
          <Link
            href="/"
            className="text-dark-coffee hover:text-amber-600 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-dark-coffee hover:text-amber-600 transition"
          >
            About
          </Link>
          <Link
            href="/work"
            className="text-dark-coffee hover:text-amber-600 transition"
          >
            Work
          </Link>
          <Link href="/contact">
            <span className="bg-dark-coffee text-white px-4 py-2 rounded-xl hover:bg-coffee transition">
              Contact
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
