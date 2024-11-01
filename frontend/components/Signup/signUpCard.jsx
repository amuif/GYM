"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useContext, useState } from "react";
import { UserContext } from "@/Context/userContext";
import axios from "axios";
import styles from "@/app/styles.css";
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
  const router = useRouter();

  const [flag, setFlag] = useState(false);
  const [err, setErr] = useState(null);

  const { setUser } = useContext(UserContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;

    try {
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
        console.log(response.data.err);
      } else {
        setData({});

        toast.success("Registration was successful. Welcome aboard!");
        setUser(response.data);

        router.push("/");
        setFlag(false);
      }
    } catch (error) {
      setFlag(true);
      setErr(error);
    }
  };

  return (
    <>
      <div
        className={`flex items-center justify-center h-screen bg-backggroundSVG`}
      >
        <Card className="w-full md:w-1/4 px-2">
          <CardHeader>
            <CardTitle className="text-center">Sign Up</CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full content-center  gap-4">
                {flag === true && err.request.status == 400 ? (
                  <>
                    <span className="text-danger text-tiny text-center">
                      All fields are required
                    </span>
                  </>
                ) : (
                  ""
                )}
                {flag === true && err.request.status == 409 ? (
                  <>
                    <span className="text-danger text-tiny text-center">
                      User already exists with this account
                    </span>
                  </>
                ) : (
                  ""
                )}
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
                  {flag === true && data.name.length < 3 ? (
                    <>
                      <span className="text-tiny text-danger ">
                        Full name should be atleast 3 characters
                      </span>
                    </>
                  ) : (
                    ""
                  )}
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
                  {flag === true && data.email.length < 3 ? (
                    <>
                      <span className="text-tiny text-danger ">
                        Full name should be atleast 3 characters
                      </span>
                    </>
                  ) : (
                    ""
                  )}
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
                  {flag === true && data.password.length < 6 ? (
                    <>
                      <span className="text-tiny text-danger">
                        Password must be greater than 6 characters
                      </span>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <CardFooter className="flex justify-center py-5">
                <Button type="submit" className="bg-main text-white">
                  Sign up
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
