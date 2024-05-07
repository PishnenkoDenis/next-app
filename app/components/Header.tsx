import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <strong>Header</strong>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
