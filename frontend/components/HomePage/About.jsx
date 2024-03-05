"use client"
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <>
      <div>
        <h4 className="text-center font-bold text-2xl py-5">About the gym</h4>
        <div className="flex flex-col  gap-5">
          <div className="flex ">
            {" "}
            <Image
              src={"/Images/anastase-maragos-7kEpUPB8vNk-unsplash.jpg"}
              width={900}
              height={200}
              alt="Photo"
              className=" mx-auto rounded-none"
              loading = 'lazy' // {lazy} | {eager}

            />{" "}
          </div>
          <div className="flex mx-auto w-4/6 ">
            <div className="">
              <p className="text-left justify-start ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Molestiae repellendus optio cumque consequatur illo ducimus
                explicabo minima ipsam blanditiis fuga dignissimos sequi,
                perspiciatis rem repudiandae et sit provident saepe maxime?
              </p>
            </div>
            <div>
              <h6 className=" text-white font-bold font-mono text-2xl whitespace-nowrap  bg-main p-3 rounded-none justify-end">
                10 Years
              </h6>
            </div>
          </div>
        </div>
      </div>

      {/* second part */}

      <div className="flex flex-row  gap-4  mx-40 pt-5">
        <div className="flex flex-row gap-3">
          <div>
            <Image
              src="/Images/circle-photo1.jpg"
              width={300}
              height={500}
              alt="circled Photo Number 1"
              className="rounded-full"
              loading = 'lazy' // {lazy} | {eager}

            />
          </div>
          <div>
            <Image
              src="/Images/circle-photo2.jpg"
              width={300}
              height={500}
              alt="Circled Photo Number 2 "
              className="rounded-full "
              loading = 'lazy' // {lazy} | {eager}

            />
          </div>
        </div>
        <div className="flex flex-row  ">
          <div>
            <Card className="w-4/5 rounded-none">
              <CardTitle className="text-center text-wrap font-semibold p-4"> <p className="text-main">Lorem ipsum </p>sit amot</CardTitle>
              <CardContent className="text-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos ipsa ipsum.
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="w-4/5 rounded-none">
              <CardTitle className="text-center p-4 text-wrap font-semibold"> <p className="text-main">Lorem ipsum </p>sit amot</CardTitle>
              <CardContent className=" text-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos ipsa ipsum.
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
