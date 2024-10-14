"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          signIn("google", { callbackUrl: "/blog" });
        }}
      >
        Login
      </button>
    </div>
  );
}
