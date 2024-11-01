"use client";
import React, { useState, useContext } from "react";
import { usePathname } from "next/navigation";
import { UserContext } from "@/Context/userContext";
import axios from "axios";
import { useRouter } from "next/navigation";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import toast from "react-hot-toast";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user,logout } = useContext(UserContext); 
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Plan", href: "/plan" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];
  const pathName = usePathname();
  const router = useRouter();
  console.log(user)



  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#2B2024] shouldHideOnScroll"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4 justify-center mx-auto w-full"
        justify="center"
      >
        <NavbarItem>
          <Link
            color="foreground"
            href="/"
            className={
              pathName === "/"
                ? "text-main underline underline-offset-2 text-lg"
                : "text-white"
            }
          >
            Home
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            color="foreground"
            href="/plan"
            className={
              pathName === "/plan"
                ? "text-main underline underline-offset-2 text-lg"
                : "text-white"
            }
          >
            Plan
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/contact"
            className={
              pathName === "/contact"
                ? "text-main underline underline-offset-2 text-lg"
                : "text-white"
            }
          >
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/faq"
            className={
              pathName === "/faq"
                ? "text-main underline underline-offset-2 text-lg"
                : "text-white"
            }
          >
            FAQ
          </Link>
        </NavbarItem>
      </NavbarContent>

      {!user ? (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/login" className="text-white">
              Login
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="/signup"
              variant="flat"
              className="text-white bg-main rounded-none text-nowrap"
            >
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      ) : (
        <>
          <NavbarContent justify="end">
           
            <NavbarItem>
              <Button
                as={Link}
                color="primary"
                href="/"
                variant="flat"
                className="text-white bg-main rounded-none "
                onClick={logout}
              >
                Log Out
              </Button>
            </NavbarItem>
          </NavbarContent>
        </>
      )}

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={pathName === item.href ? "main" : "foreground"}
              className={
                pathName == item.href ? "w-full text-main" : "text-white"
              }
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
