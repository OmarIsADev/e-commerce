import { Navbar, NavbarContent } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <Navbar className="bg-[#43d93d]">
      <NavbarContent className="flex flex-row !justify-between w-full">
        <Link href="/" className="w-1/3">الصفحه الرئيسيه</Link>
        <p className="font-bold text-2xl text-center w-1/3">عمر ستورز</p>
        <div className="w-1/3"></div>
      </NavbarContent>
    </Navbar>
  );
}
