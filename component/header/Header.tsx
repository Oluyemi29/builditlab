"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Image,
  Button,
} from "@heroui/react";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";

const Header = () => {
  const menuItems = [
    "Home",
    "Services",
    "Industries",
    "Case Studies",
    "Insight",
    "About Us",
    "Contact Us",
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  return (
    <div>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-kleinBlue text-white md:px-3 py-1"
        maxWidth="full"
      >
        {/* <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent> */}

        <NavbarContent className="md:hidden md:pr-3" justify="center">
          <NavbarBrand className="bg-transparent">
            <Image
              src={"/builditlab.png"}
              alt="builditlab"
              className="w-20 bg-transparent"
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex" justify="start">
          <NavbarBrand>
            <Image
              src={"/builditlab.png"}
              alt="builditlab"
              className="w-36 h-10"
            />
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden md:flex gap-4" justify="center">
          <NavbarItem isActive={pathName === "/"}>
            <Link className="text-plainWhite" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathName === "/service"}>
            <Link className="text-plainWhite" href="/service">
              Services
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathName === "/industries"}>
            <Link className="text-plainWhite" href="/industries">
              Industries
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathName === "/casestudies"}>
            <Link className="text-plainWhite" href="/casestudies">
              Case Studies
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathName === "/insight"}>
            <Link className="text-plainWhite" href="/insight">
              Insight
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathName === "/about"}>
            <Link className="text-plainWhite" href="/about">
              About Us
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Button
              as={Link}
              href="/contact"
              className="bg-transparent border-2 border-plainWhite text-plainWhite"
            >
              Contact Us
            </Button>
          </NavbarItem>
          {/* <NavbarItem className="hidden lg:flex">
            <Button color="danger" as={Link} href="/contact">
              Log Out
            </Button>
          </NavbarItem> */}
          <NavbarItem className="flex md:hidden">
            <IoMenu
              className={`${
                isMenuOpen ? "hidden" : "flex"
              } text-plainWhite cursor-pointer`}
              size={24}
              onClick={() => setIsMenuOpen(true)}
            />
            <FaXmark
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } text-plainWhite cursor-pointer`}
              size={24}
              onClick={() => setIsMenuOpen(false)}
            />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full text-sm font-semibold"
                color={"foreground"}
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default Header;
