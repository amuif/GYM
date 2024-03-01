"use client"
import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
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
      <div className="py-10">
        <h3 className="text-center font-bold text-3xl p-5">Why Choose us</h3>
        <div className="flex flex-row gap-7 justify-evenly">
          {Whyus.map((why, index) => {
            return (
              <div
                className="max-w-sm  overflow-hidden shadow-lg rounded-none"
                key={index}
              >
                <img
                  className="w-full"
                  src={why.image}
                  alt="Photos showing trainers,equipment and membership plans"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{why.title}</div>
                  <p className="text-gray-700 text-base pb-3">{why.description}</p>
                  <Link href={why.link} className="pt-4">
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
                  </Link>
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
