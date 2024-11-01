"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState, useContext } from "react";
import axios from "axios";
import Image from "next/image";
import { UserContext } from "@/Context/userContext";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";

export default function LoginCard() {
  const navigate = useRouter();
  const { setUser } = useContext(UserContext);
  const [flag, setFlag] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    try {
      const response = await axios.post("http://localhost:5000/api/user/login", {
        email,
        password,
      });

      if (response.data.error) {
        console.log(response.data.error);
        toast.error(response.data.error);
      } else {
        setUser(response.data); // Set the user data in the UserContext
        setData({});
        setFlag(false);
        navigate.push("/");
        toast.success("Login successful!");
      }
    } catch (error) {
      setFlag(true);
      console.log(error);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <>
      <div className="bg-loginBg flex items-center justify-center h-screen ">
        <Card className="w-full md:w-1/4 px-2">
          <CardHeader>
            <CardTitle className="text-center">Log in</CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="grid w-full content-center gap-4">
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

                {flag && (
                  <span className="text-danger text-tiny text-center">
                    Password or Email is not correct
                  </span>
                )}
              </div>
              <CardFooter className="flex justify-center p-2">
                <Button type="submit" className="bg-main text-white">
                  Log in
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
