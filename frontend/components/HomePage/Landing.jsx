import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import styles from "./styles.css";
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
        <h1 className="font-bold text-6xl  ">
          {" "}
          Workout like you never did Before{" "}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit,aspernatur
          similique nobis expedita!
        </p>
        <div className="flex flex-row gap-9 justify-center">
          <Button variant="" className="bg-main rounded-none">
            Start Now
          </Button>
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
        </div>
      </div>
    </>
  );
};

export default Landing;
