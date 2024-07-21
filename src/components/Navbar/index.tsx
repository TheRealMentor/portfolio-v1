"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import Logo from "../Logo";
import "./style.css";
import Tab from "./Tab";

const MENU_OPTIONS = [
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <section className="navbar-container flex items-end justify-between px-[100px] py-[72px] m-auto">
      <Link href={"/"}>
        <Logo />
      </Link>
      <div className="flex">
        {MENU_OPTIONS.map(({ name, href }, index) => (
          <Link key={index} href={href}>
            <Tab name={name} isSelected={pathname === href} />
          </Link>
        ))}
      </div>
    </section>
  );
}
