import React from "react";
import Image from "next/image";
import styles from "@/app/globals.css";
import PricingBG from "@/public/Images/pricingBackground.jpg"
const Landing = () => {
  return (
    <div>
      <div className={styles.bgWrap}>
        <Image
          src={PricingBG}
          fill={true}
          className="object-cover -z-10 blur-sm brightness-50"
          quality={100}
          alt="Background Image"
        />
      </div>
      <div className=" flex flex-col items-center justify-center h-svh gap-5  text-white ">
        <h1 className="font-bold text-6xl  "> Our pricing </h1>
      </div>
    </div>
  );
};

export default Landing;
