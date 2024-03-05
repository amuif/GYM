"use client";
import React from "react";
import { usePathname } from "next/navigation";
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

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Excercise", "Plan", "About us", "Log Out"];
  const pathName = usePathname();

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#2B2024] shouldHideOnScroll "
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="/"
            className={pathName === "/" ? "text-white text-lg" : "text-white"}
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/blog"
            aria-current="/page"
            className={
              pathName === "/blog" ? "text-white text-lg" : "text-white"
            }
          >
            Exercises
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/plan"
            className={
              pathName === "/plan" ? "text-white text-lg" : "text-white"
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
              pathName === "/contact" ? "text-white text-lg" : "text-white"
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
              pathName === "/faq" ? "text-white text-lg" : "text-white"
            }
          >
            FAQ
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="">
        <NavbarItem className="hidden lg:flex  ">
          <Link href="/login" className=" text-white">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/signup"
            variant="flat"
            className=" text-white bg-main rounded-none"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full  text-white"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
