import React from "react";
import { Avatar, Button } from "@nextui-org/react";
import Link from "next/link";
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
      <div className=" flex flex-row justify-between gap-10 p-14 bg-[#2B2024] text-white ">
        {/* Social media links and logo */}
        <div className="flex flex-col">
          <h2 className="text-bold text-main">Lorem GYM</h2>
          <p>Lorem, ipsum dolor.</p>

          <div className="flex gap-3 items-center">
            <Link href="#">
            <Avatar
              width="54"
              height="94"
              src="/SVG/Facebook.ico"
              alt="facebook-logo"
              className="bg-inherit"
            />

            </Link>
           <Link href="#">
           <Avatar
              width="94"
              height="94"
              alt="instagram-new"
              src="https://img.icons8.com/3d-fluency/94/instagram-new.png"
              className="bg-inherit"
            />
           </Link>

            {/* <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" /> */}
          </div>
        </div>
        {/* About refer Links */}
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
    </>
  );
}
