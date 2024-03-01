"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";
import axios from "axios";

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

export function SignUpCard() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useRouter();

  // Inside your component
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    console.log(data);

    try {
       // Access the router object

      const response = await axios.post(
        "http://localhost:5000/api/user/register",
        {
          name,
          email,
          password,
        }
      );
      

      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({});
        toast.success("Registration was successful. Welcome aboard!");
        navigate.push("/login"); // Navigate to the login page
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  // Rest of your component...

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <Card className="w-1/4 ">
          <CardHeader>
            <CardTitle className="text-center">Sign Up</CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full content-center  gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label>Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                  />
                </div>

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

              <CardFooter className="flex justify-center py-5">
                <Button type="submit">Sign up</Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
