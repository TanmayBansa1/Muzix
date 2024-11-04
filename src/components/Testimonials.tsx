import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { musicSchoolTestimonials } from "@/data/testimonials";
export default function Testimonials() {
  return (
    <div>
      <div className="text-3xl text-white font-bold flex justify-center items-center pt-20 dark:bg-black dark:bg-grid-white/[0.08]">
        <h2 className="mt-40">Hear Our Harmony: Voices of Success</h2>
      </div>
      <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.08] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={musicSchoolTestimonials}
          speed="normal"
          direction="left"
        ></InfiniteMovingCards>
      </div>
    </div>
  );
}
