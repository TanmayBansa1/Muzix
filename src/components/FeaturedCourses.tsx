
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import Image, { StaticImageData } from "next/image";
import courseData from "../data/music_courses.json";
interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  isFeatured: Boolean;
  slug: string;
  instructor: string;
  image: string | StaticImageData;
}
export default function FeaturedCourses() {
  const courses = courseData.courses.filter((course: Course) => {
    return course.isFeatured === true;
  });
  return (
    <div className="py-12 mt-10">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          FEATURED COURSES
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With the Best
        </p>
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          {courses.map((course: Course) => {
            return (
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full ">
                  <Image
                    src={course.image}
                    alt="jordans"
                    height="400"
                    width="500"
                    className="object-contain"
                  />
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                      {course.title}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                      {course.description}
                    </p>
                    <Link
                      className="px-4 py-2 mt-3 rounded-lg border border-neutral-600 text-white bg-zinc-700 hover:bg-gray-100 transition duration-200 hover:text-black"
                      href={`/courses/${course.slug}`}
                    >
                      Learn More
                    </Link>
                  </div>
                </BackgroundGradient>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-10 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded-lg border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All courses
        </Link>
      </div>
    </div>
  );
}
