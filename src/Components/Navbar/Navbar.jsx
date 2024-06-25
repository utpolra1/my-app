"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div>
      <navbar className="flex h-16 bg-slate-400 justify-between text-center items-center">
        <h1 className="font-bold text-3xl">NextJs</h1>
        <ul className="bg-slate-400 gap-5 flex items-center">
          <li>
            <Link className={`text-white ${pathname === "/" ? 'bg-orange-600':" "}`} href="/">Home</Link>
          </li>
          <li>
            <Link className={`text-white ${pathname === "/blog" ? 'bg-orange-600' : ''}`} href="/blog">Blog</Link>
          </li>
          <li>
            <Link className={`text-white ${pathname === "/about" ? 'bg-orange-600' : ''}`} href="/about">About</Link>
          </li>
        </ul>
        <Link href='/login'><button className="btn px-4">Login</button></Link>
      </navbar>
    </div>
  );
};

export default Navbar;
