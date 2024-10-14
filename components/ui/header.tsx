import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex gap-2 items-center justify-center" href="/">
        <BookOpen className="h-6 w-6" />
        <span className=" text-black ">Acme Blog</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Home
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/blogs"
        >
          Blog
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/about"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
