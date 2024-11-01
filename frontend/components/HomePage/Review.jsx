"use client";
import React, { useState } from "react";
import next from "@/public/SVG/next.svg";
import previous from "@/public/SVG/previous.svg";
import Image from "next/image";
const Testimonials = () => {
  const testimonials = [
    {
      name: " Kim S.",

      testimonial:
        '"I feel so much stronger and healthier and much more flexible than I have in years. Mentally, it’s great to be at the gym 3 to 4 mornings a week feeling so good when you leave. It is a great way to start your day! Honestly, I had an accident recently and I believe I would’ve been much worse off if I wasn’t in good shape. My doctors agreed',
    },
    {
      name: "Geena O.",
      testimonial:
        "I was motivated to join Fitness Within due to the proven results, incredible trainers, and unique family-like community that this studio offers. It truly is a one of a kind place as everyone is so kind and caring. People are constantly pushing and encouraging one another to be better and to believe in themselves.",
    },
    {
      name: "Jill D.",
      testimonial:
        "I started with Fitness Within a couple of months ago. Best decision ever. Great workouts in both the small group and bootcamps. The staff is great and they really know their stuff. It is a great facility, clean and well equipped and the people are the best!!",
    },
    {
      name: "Kim S.",
      testimonial:
        "I have been coming here for 5 months now and everyday I love it more, I do small group and I love all of my trainers. They are always changing things up and work muscles I didn’t even know I had.. It’s like a family, you really get to know the people training with you also. I feel so much stronger and healthier since I started coming, I totally recommend it!!",
    },
    {
      name: "Laura H.",
      testimonial:
        "Love it here so much. The studio is clean and comfortable and of course has all the equipment needed for a great sweat session. The trainers are knowledgeable and friendly, especially Aaron and Dom. I’ve done both small group training and boot camp classes and seriously recommend trying either one. On my second month here and it’s been a killer workout every time.",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (currentTestimonial - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="flex flex-col items-center px-2">
      <h2 className="text-center text-2xl md:text-5xl font-semibold p-4">
        What people say about us and our classes
      </h2>
      <div className="p-4  shadow-lg rounded-lg w-full md:w-4/5 bg-blackBg text-white px-2">
        <p className="text-lg font-semibold py-2 text-main">
          {testimonials[currentTestimonial].name}
        </p>
        <p className="text-md p-4">
          {testimonials[currentTestimonial].testimonial}
        </p>
        <div className="flex justify-center items-center space-x-4 mt-4 md:justify-end px-3">
          <button onClick={prevTestimonial} className="">
            <Image src={previous} width={20} height={20} alt="previous sign" />
          </button>
          <button onClick={nextTestimonial} className="">
            <Image src={next} width={20} height={20} alt="next sign" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
