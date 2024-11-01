import React from "react";
import { Avatar, Button } from "@nextui-org/react";
import Link from "next/link";
import Facebook from "@/public/SVG/facebook.svg"
import Instagram from "@/public/SVG/Instagram.svg"
import Image from "next/image";
export default function Footer() {
  const AboutData = [
    { name: "About us", link: "/about" },
    { name: "Excercise", link: "/excercise" },
    { name: "Contact", link: "/contact" },
  ];
  const ServicesData = [
    { name: "Programs", link: "/programs" },
    { name: "Prices", link: "/prices" },
  ];
  const SupportData = [
    { name: "Contact us", link: "/contact" },
    { name: "Instagram", link: "#" },
    { name: "Facebook", link: "#" },
  ];
  const FAQ = [
    { name: "Payment", link: "/prices" },
    { name: "Monthly Payment", link: "/prices" },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 p-7 md:p-14 w-full bg-[#2B2024] text-white ">
        {/* Social media links and logo */}
        <div className="flex flex-col">
          <h2 className="text-bold text-main">Lorem GYM</h2>
          <p>Lorem, ipsum dolor.</p>

          <div className="flex gap-3 items-center">
            <Link href="#">
            <Image
              width="34"
              height="34"
              src={Facebook}
              alt="facebook-logo"
              className=""
            />

            </Link>
           <Link href="#">
           <Image
              width="34"
              height="50"
              alt="instagram-logo"
              src={Instagram}
              className=""
            />
           </Link>

            {/* <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" /> */}
          </div>
        </div>
        {/* About refer Links */}
       <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-5">
       <div className="w-48 flex-col ">
          <div>
            <h2 className="underline text-main">About</h2>
            {AboutData.map((about, index) => {
              return (
                <div key={index}>
                  <Link href={about.link}>{about.name}</Link>
                </div>
              );
            })}
          </div>
        </div>
        {/* Services refer links */}
        <div className="w-48 flex-col">
          <div>
            <h2 className="underline text-main">Services</h2>
            {ServicesData.map((service, index) => {
              return (
                <div key={index}>
                  <Link href={service.link}>{service.name}</Link>
                </div>
              );
            })}
          </div>
        </div>
        {/* Support refer links */}
        <div className="w-48 flex-col ">
          <h2 className="underline text-main">Supoort</h2>
          <div>
            {SupportData.map((support, index) => {
              return (
                <div key={index}>
                  <Link href={support.link}>{support.name}</Link>
                </div>
              );
            })}
          </div>
        </div>
        {/* FAQs */}
        <div className="w-48 flex-col ">
          <h2 className="underline text-main">FAQS</h2>
          <div>
            {FAQ.map((question, index) => {
              return (
                <div key={index}>
                  <Link href={question.link}>{question.name}</Link>
                </div>
              );
            })}
          </div>
        </div>
       </div>
      </div>
    </>
  );
}
