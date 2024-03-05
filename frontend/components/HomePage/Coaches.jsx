"use client"
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

export default function Coaches() {
  const Coaches = [
    {
      name: "Jane Cooper",
      role: "CROSSFIT COACH",
      image: "/Images/jane.jpg",
    },
    {
      name: "Brooklyn Simmons",
      role: "CROSSFIT COACH",
      image: "/Images/Brooklyn.jpg",
    },
    {
      name: "John Murphy",
      role: "CROSSFIT COACH",
      image: "/Images/john.jpg",
    },
  ];

  return (
    <>
      <h4 className="text-center font-bold text-2xl py-9">Our Coaches</h4>

    <div className="flex flex-row py-11">
      {Coaches.map((coach, index) => {
        return (
          <div className="w-2/5 gap-2 px-8 flex " key={index}>
            <Card
              isFooterBlurred
              className="w-full h-[300px] col-span-12 sm:col-span-7 rounded-none"
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start"></CardHeader>
              <Image
                removeWrapper
                alt={`Photo of ${coach.name}`}
                className="z-0 w-full h-full object-cover rounded-none"
                src={coach.image}
                loading = 'lazy' // {lazy} | {eager}

              />
              <CardFooter className="absolute bg-main bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 rounded-none">
                <div className="flex flex-grow gap-2 items-center">
                  <div className="flex flex-col">
                    <h4 className=" text-white font-semibold text-xl">{coach.name}</h4>
                    <small className="text-tiny text-white/80 font-semibold">
                      {coach.role}
                    </small>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </div>
    </>
  );

}
