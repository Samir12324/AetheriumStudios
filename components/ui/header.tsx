"use client";

import { GamepadIcon } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";
export default function Header() {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <header className="px-4 z-50 lg:px-6 h-16 flex items-center bg-black border-b border-yellow-900/30 shadow-lg">
      <Link 
        className="flex gap-2 items-center justify-center transition-transform hover:scale-105" 
        href="/"
      >
        <GamepadIcon className="h-6 w-6 text-yellow-500 " />
        <Image src={"/logo.jpeg"} width={130} alt="Hall" height={130} className="mt-10" />
      </Link>
      
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium text-yellow-100/80 hover:text-yellow-400 transition-colors"
          href="#"
        >
          Home
        </Link>
        <Link
          className="text-sm font-medium text-yellow-100/80 hover:text-yellow-400 transition-colors"
          href="/blogs"
        >
          Games
        </Link>
        <Link
          className="text-sm font-medium text-yellow-100/80 hover:text-yellow-400 transition-colors"
          href="/about"
        >
          create
        </Link>
        <Link
          className="text-sm font-medium text-yellow-100/80 hover:text-yellow-400 transition-colors"
          href="#"
        >
          Contact
        </Link>
        
        {session ? (
          <>
            <Link
              className="text-sm font-medium text-yellow-100/80 hover:text-yellow-400 transition-colors"
              href="/api/auth/signout"
            >
              Sign Out
            </Link>
            <Link
              className="text-sm font-medium px-4 py-1 bg-yellow-700 hover:bg-yellow-600 text-black rounded-md transition-colors"
              href="/create"
            >
              Create Game
            </Link>
          </>
        ) : (
          <Link
            className="text-sm font-medium px-4 py-1 bg-yellow-700 hover:bg-yellow-600 text-black rounded-md transition-colors"
            href="/api/auth/signin"
          >
            Sign In
          </Link>
        )}
      </nav>
    </header>
  );
}
