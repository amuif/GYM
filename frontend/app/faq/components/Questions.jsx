import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    value: "item-1",
    question: "How often should I exercise?",
    answer:
      " This question addresses the frequency of workouts and is particularly relevant for new or returning gym-goers. It highlights the importance of finding a balance that allows for effective workout sessions without overwhelming the body's recovery time",
  },
  {
    value: "item-2",
    question: "What time of day is best to work out? ",
    answer:
      "This question explores the optimal timing for workouts, which can vary depending on individual energy levels, schedules, and personal preferences. It emphasizes the importance of consistency in workout timing.",
  },
  {
    value: "item-3",
    question: "How often do I need a rest day?",
    answer:
      "Rest days are crucial for muscle recovery and adaptation. This question helps clarify the necessity of incorporating rest days into a workout routine, especially as fitness levels improve.",
  },
  {
    value: "item-4",
    question: "What are the best exercises to get abs?",
    answer:
      " For those focused on building specific muscle groups, this question delves into the types of exercises that target the abdominal area effectively.",
  },
];

export function Questions() {
  return (
    <>
      <div className="flex flex-col gap-5 p-5 text-left">
        <h4 className=" text-xl md:text-3xl">
          Discover Your Fitness Journey with Our FAQ
        </h4>
        <p>
          Navigating the world of fitness can be overwhelming with all the
          information available. That's why we've created our FAQ section to
          make your fitness journey smoother and more informed. Here, you'll
          find answers to the most common questions about our gym, from how to
          get started with your fitness journey to the best workouts for your
          goals. Whether you're curious about our membership options, looking
          for advice on nutrition and hydration, or simply want to know more
          about the equipment and facilities we offer, our FAQ is designed to
          provide you with all the information you need to make the most of your
          time at our gym. We're committed to making your fitness experience as
          seamless and enjoyable as possible, and we believe that a
          well-informed member is a happy member. So, take a look around and let
          us know if there's anything else we can assist you with!
        </p>
      </div>
     <div className="w-full ">
     {questions.map((question, index) => {
        return (
          <Accordion
            type="single"
            collapsible
            className="w-full px-2 md:px-11 pb-5"
            key={index}
          >
            <AccordionItem value={question.value}>
              <AccordionTrigger className="no-underline hover:bg-main hover:text-white p-3">
                {question.question}
              </AccordionTrigger>
              <AccordionContent className="p-3 ">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
     </div>
    </>
  );
}
