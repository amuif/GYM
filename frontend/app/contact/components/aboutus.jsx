import React from "react";
import Image from "next/image";
import dash from "@/public/SVG/dash.svg";
import message from "@/public/SVG/message.svg";
import location from "@/public/SVG/location.svg";
import phone from "@/public/SVG/phone.svg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@nextui-org/react";
import { Button } from "@/components/ui/button";

const About = () => {
  const sizes = ["sm", "md", "lg"];

  return (
    <div className="p-3  justify-center items-center flex flex-col gap-5 md:gap-10">
      <div>
        <h3 className="text-center w-full text-xl md:text-3xl  border-y-main font-semibold p24">Contact Us</h3>
      </div>
      <div className="flex flex-row justify-between ">
        <div className="flex flex-col">
          <div className="flex flex-row">
           
            {/* <div>
              <h2 className="text-main">About us</h2>
            </div> */}
          </div>

          <div className="flex flex-col">
            {/* <div>
              <p>"At lorem, we're dedicated to helping you reach your fitness goals with personalized support and a welcoming community. Our state-of-the-art facilities and expert trainers provide everything you need to train, transform, and thrive. Join us on a journey to a stronger, healthier you—because your fitness is our mission. Contact us today and start your path to greatness!"</p>
            </div> */}
           
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="flex flex-row gap-3 py-3 ">
                <Image src={message} width={34} height={54} className="" />
                <div className="flex flex-col text-sm">
                  <p>dummy@dummy.com</p>
                 
                </div>
              </div>
              <div>
                <div className="flex flex-row gap-3 py-3">
                  <Image src={location} width={34} height={54} />
                  <div className="flex flex-col text-sm">
                    <p>Address: lorem st.</p>
                   
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-row gap-4 py-3">
                  <Image src={phone} width={34} height={54} />
                  <div className="flex flex-col text-sm">
                    <p>(123)456-7890</p>
              
                  </div>
                </div>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>

      <div className="p-2 w-full md:w-3/5">
        <div
          key={sizes}
          className="flex  flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 py-2"
        >
          <Input type="email" label="name" placeholder="Full name" />
          <Input
            sizes={sizes}
            type="email"
            label="Email"
            placeholder="Enter your email"
          />
        </div>
        <div
          key={sizes}
          className="flex  flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
        >
          <Input type="number" label="phone" placeholder="Phone number" />
          <Input
            sizes={sizes}
            type="text"
            label="subject"
            placeholder="Subject"
          />
        </div>

        <div className="py-2">
          <Textarea
            label="Message"
            placeholder="Enter your message"
            className="w-full rounded-none bg-inherit"
          />
        </div>
        <Button variant="solid" className="bg-main text-white mx-auto  flex justify-center items-center">
          Send Email
        </Button>
      </div>
    </div>
  );
};

export default About;
