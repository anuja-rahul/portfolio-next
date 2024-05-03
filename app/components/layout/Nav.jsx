"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import "./index.scss";
import CustomA from "./CustomA";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const ActiveLink = ({ children, ...rest }) => {
  const { href } = rest;
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      {...rest}
      className={clsx(isActive ? "active" : "", "nav-links my-1 mt-1")}
    >
      {children}
    </Link>
  );
};

const NavLinks = () => {
  return (
    <>
      <ActiveLink href="/">{"home"}</ActiveLink>
      <ActiveLink href="/about">{<CustomA />}</ActiveLink>
      <ActiveLink href="/projects">{"Projects"}</ActiveLink>
      <ActiveLink href="/contact">{"Contact"}</ActiveLink>
    </>
  );
};

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="header-nav flex w-1/3 justify-end">
        <div className="hidden w-full justify-between text-xl text-white md:flex">
          <NavLinks />
        </div>
        <div className="text-white md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="mobile-nav flex basis-full flex-col items-center">
          <NavLinks />
        </div>
      )}
    </>
  );
}

export default Nav;
