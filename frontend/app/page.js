"use client";
import Landing from "@/components/HomePage/Landing";
import Whyus from "@/components/HomePage/Whyus";
import About from "@/components/HomePage/About";
import Coaches from "@/components/HomePage/Coaches";
import Plan from "@/components/HomePage/Plan";
import Review from "@/components/HomePage/Review";
import Trial from "@/components/HomePage/Trial";

export default function Home() {
  return (
    <div>
      <Landing />
      <Whyus />
      <About />
      <Coaches />
      <Plan />
      <Review />
      <Trial />
    </div>
  );
}
