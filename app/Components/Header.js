import Link from "next/link";
import React from "react";
Link;
const Header = () => {
  return (
    <>
      <div
        id="Header"
        class="flex justify-between  text-white bg-zinc-800 h-10 items-center flex-wrap px-5"
      >
        <h2 id="logo" class="text-2xl">
          Krishna
        </h2>
        <div id="nav" class="flex gap-5">
          <Link href="./About" class="cursor-progress">
            About
          </Link>
          <Link href="./Product">Product</Link>
          <Link href="./Course">Course</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
