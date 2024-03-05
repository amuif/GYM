"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Button,
} from "@nextui-org/react";

const Plans = () => {
  const Plans = [
    {
      name: "Monthly",
      price: "120$",
      benefits:
        "Pay as you go and enjoy unlimited access to all our facilities and services for only $99 per month. No contract, no commitment, no hassle",
    },
    {
      name: "Quarterly",
      price: "267$",
      benefits:
        " Save 10% and pay only $267 for 3 months. Get unlimited access to all our facilities and services and lock in your rate for the next quarter. A great option if you want to try us out for a longer period.",
    },
    {
      name: "One Year",
      price: "950$",
      benefits:
        "Save 20% and pay only $950 for 12 months. Get unlimited access to all our facilities and services and secure your spot for the whole year. The best option if you are serious about your fitness goals and want to save big.",
    },
  ];

  return (
    <div className="flex flex-col pt-36" id="plans">
      <div className="flex flex-col">
        <h3 className="text-main text-center text-2xl font-bold">Pricing</h3>
        <p className="text-center font-semibold text-3xl text-wrap">CHECK OUT OUR BEST PRICING  <br /> TABLES & JOIN US </p>
      </div>
      <div className="flex flex-row gap-5 justify-center p-11">
        {Plans.map((plan, index) => {
          const centerCard = index === Plans.length - 2;
          const cardBackgroundClass = centerCard ? "bg-main text-white" : "bg-[#2B2024] text-white";

          
          return (
            <Card className={`w-[400px] ${cardBackgroundClass} rounded-none`} key={index}>
              <CardHeader className="flex flex-row justify-center items-center ">
                <div className="flex flex-col  ">
                  <h6 className="text-center py-5 text-2xl font-semibold">
                    {plan.name}
                  </h6>
                  <h3 className=" text-4xl text-center font-bold ">
                    {plan.price}
                  </h3>
                </div>
              </CardHeader>

              <CardBody>
                <p>{plan.benefits}</p>
              </CardBody>

              <CardFooter className="flex justify-center border-white">
                <Button
                  isExternal
                  href="/plan"
                  className="bg-main text-white outline outline-1 rounded-none "
                >
                  More info
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
