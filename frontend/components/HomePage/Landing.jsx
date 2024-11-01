"use client"
import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import styles from "../../app/styles.css";
import Link from "next/link";
const Landing = () => {
  return (
    <>
      <div className={styles.bgWrap}>
        <Image
          src="/Images/danielle-cerullo-CQfNt66ttZM-unsplash.jpg"
          fill={true}
          className="object-cover -z-10 blur-sm brightness-50"
          quality={100}
          alt="Background Image"
        />
      </div>
      <div className=" flex flex-col items-center justify-center h-screen gap-5  text-white ">
        <h1 className="font-bold text-2xl md:text-6xl  px-2 text-center ">
          {" "}
          Workout like you never did Before
        </h1>
        <p className="text-center px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit,aspernatur
          similique nobis expedita!
        </p>
        <div className="flex flex-row gap-9 justify-center">
          <Link href={"/plan#plans"}>
            <Button variant="" className="bg-main rounded-none">
              Start Now
            </Button>
          </Link>
          <Link href={"/contact"}>
            <Button color="" variant="light">
              Learn More{" "}
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
    </>
  );
};

export default Landing;
