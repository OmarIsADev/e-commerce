import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <Navbar className="bg-[#43d93d]">
      <NavbarContent className="flex flex-row !justify-between w-full">
        <Link href="/">Home</Link>
        <p>Brand Name</p>
        <Link href="/cart">Cart</Link>
      </NavbarContent>
    </Navbar>
  );
}
