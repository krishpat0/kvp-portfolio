import Link from "next/link";
import React from "react";
Link;
const Header = () => {
  return (
    <>
      <div id="Header" className="">
        <h2 id="logo">Krishna</h2>
        <div id="nav" className="">
          <Link href="./About">About</Link>
          <Link href="./Product">Product</Link>
          <Link href="./Course">Course</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
