"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
      </nav>
      <h1>Welcome</h1>
      <p> This is the home page of our Next.js app.</p>
    </main>
  );
}
