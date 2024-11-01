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
      <h4 className="text-center text-2xl md:text-5xl font-semibold p-4">Our Coaches</h4>

    <div className="flex flex-col md:flex-row  gap-5 py-11">
      {Coaches.map((coach, index) => {
        return (
          <div className="w-full md:w-2/5 gap-2 px-2 flex " key={index}>
            <Card
              isFooterBlurred
              className="w-full h-[300px] col-span-12 sm:col-span-7 rounded-none"
            >
    
              <Image
                removeWrapper
                alt={`Photo of ${coach.name}`}
                className="z-0 w-full h-full object-cover rounded-none"
                src={coach.image}
         
              />
              <CardFooter className="absolute bg-main bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 rounded-none flex items-center justify-center">
                <div className="flex flex-grow gap-2 items-center">
                  <div className="flex flex-col items-center justify-center w-full mx-auto">
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
