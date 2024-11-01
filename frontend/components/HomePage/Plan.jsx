"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";

const Plan = () => {
  const Plans = [
    {
      name: "Monthly",
      price: "$120",
      benefits:
        "Pay as you go and enjoy unlimited access to all our facilities and services for only $120 per month. No contract, no commitment, no hassle.",
    },
    {
      name: "Quarterly",
      price: "$267",
      benefits:
        "Save 10% and pay only $267 for 3 months. Get unlimited access to all our facilities and services and lock in your rate for the next quarter. A great option if you want to try us out for a longer period.",
    },
    {
      name: "One Year",
      price: "$950",
      benefits:
        "Save 20% and pay only $950 for 12 months. Get unlimited access to all our facilities and services and secure your spot for the whole year. The best option if you are serious about your fitness goals and want to save big.",
    },
  ];

  return (
    <div className="bg-[#AB0139] py-10 px-4">
      <h3 className="text-center text-3xl md:text-5xl font-bold text-white mb-8">
        Our Plans
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
        {Plans.map((plan, index) => {
          const isHighlighted = index === 1; // Highlight the middle card
          const cardBackgroundClass = isHighlighted ? "bg-main text-white" : "bg-[#2B2024] text-white";

          return (
            <Card
              key={index}
              className={`rounded-lg shadow-lg ${cardBackgroundClass}`}
            >
              <CardHeader className="flex flex-col items-center py-6">
                <h6 className="text-2xl font-semibold">{plan.name}</h6>
                <h3 className="text-4xl font-bold mt-2">{plan.price}</h3>
              </CardHeader>

              <CardBody className="px-6 py-4">
                <p className="text-center leading-relaxed">{plan.benefits}</p>
              </CardBody>

              <CardFooter className="flex justify-center py-4">
                <Button
                  isExternal
                  href="/plan"
                  className="bg-white text-main font-semibold rounded-md px-6 py-2 hover:bg-gray-200 transition"
                >
                  More Info
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Plan;
