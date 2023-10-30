import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="nav bg-cyan-100 flex gap-8 p-4">
      <Link href="/">Home</Link>
      <Link href="/users">Users</Link>
      <Link href="/products">Products</Link>
    </nav>
  );
};

export default Navbar;
