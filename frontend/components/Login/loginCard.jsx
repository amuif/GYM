"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Google from "@/public/SVG/icons8-google.svg";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";

export default function LoginCard() {
  const navigate = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/user/login",
        {
          email,
          password,
        }
      );

      if (data.error) {
        console.log(data.error);
        toast.error(data.error);
      } else {
        setData({});
        navigate.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="bg-loginBg flex items-center justify-center h-screen ">
        <Card className=" w-1/4 ">
          <CardHeader>
            <CardTitle className="text-center">Log in</CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="grid w-full content-center  gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                  />
                </div>
              </div>
              <CardFooter className="flex justify-center p-2">
                <Button type="submit" className="bg-main text-white">Log in</Button>
              </CardFooter>
            </form>
            <div className="links flex flex-col">
              <label className="text-center">or</label>
              <Button variant="light" className="bg-white hover:bg-inherit align-middle py-6">
                <Image src={Google} width={35} height={30} alt="Google logo" ></Image>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
