"use client"
import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
const Whyus = () => {
  let Whyus = [
    {
      title: "Expert Trainers",
      image: "/Images/expert-trainer.jpg",
      description:
        "Train with certified experts dedicated to helping you reach your fitness goals.",
      link: "/about/#trainers",
    },
    {
      title: "Equipment",
      image: "/Images/gym-equipment.jpg",

      description:
        "Experience top-notch equipment and modern facilities designed to enhance your workouts.",
      link: "/about/#equipment",
    },
    {
      title: "Flexible Membership options",
      image: "/Images/schedule.jpg",
      description:
        "Enjoy flexible memebership plans that fit your schedule and budget.",
      link: "/plans/#memebership",
    },
  ];

  return (
    <>
      <div className="md:py-10">
        <h3 className="text-center text-2xl md:text-5xl font-semibold p-4">Why Choose Us</h3>
        <div className="flex flex-col md:flex-row gap-7 justify-evenly px-2">
          {Whyus.map((why, index) => {
            return (
              <div
                className="max-w-sm  overflow-hidden shadow-lg rounded-none"
                key={index}
              >
                <Image
                  className="w-full"
                  src={why.image}
                  width={300}
                  height={300}
                  alt="Photos showing trainers,equipment and membership plans"
                  loading = 'eager' // {lazy} | {eager}

                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-center">{why.title}</div>
                  <p className="text-gray-700 text-base pb-3">{why.description}</p>
                  {/* <Link href={why.link} className="pt-4">
                    <Button className="bg-main text-white text-center rounded-none" variant="solid">
                      Learn more{" "}
                      <img
                        width="28"
                        height="24"
                        className="px-2"
                        src="/SVG/up-right-arrow.png"
                        alt="up-right-arrow"
                      />
                    </Button>
                  </Link> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Whyus;
