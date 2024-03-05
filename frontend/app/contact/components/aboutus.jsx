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
    <div className="flex flex-row justify-between p-3">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div>
            <Image src={dash} width={24} height={24} />
          </div>
          <div>
            <h2 className="text-main">About us</h2>
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <h3>Don't afraid to contact us</h3>
          </div>
          <div>
            <Image src={dash} width={50} height={5} />
          </div>
          <div className="">
            <div className="flex flex-row gap-4 py-3 ">
              <Image src={message} width={34} height={54} />
              <div className="flex flex-col text-sm">
                <p>dummy@dummy.com</p>
                <p>dummy@dummy.com</p>
              </div>
            </div>
            <div>
            <div className="flex flex-row gap-4 py-3">
              <Image src={location} width={34} height={54} />
              <div className="flex flex-col text-sm">
                <p>Address: lorem st.</p>
                <p>Address: ipsum st.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row gap-4 py-3">
              <Image src={phone} width={34} height={54} />
              <div className="flex flex-col text-sm">
                <p>(123)456-7890</p>
                <p>(0987)654-312</p>
              </div>
            </div>
          </div>
          </div>
         

          <div></div>
        </div>
      </div>

      <div className="p-2 w-3/5">
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
        <Button variant="solid" className="bg-main text-white">Send Email</Button>
      </div>
    </div>
  );
};

export default About;
