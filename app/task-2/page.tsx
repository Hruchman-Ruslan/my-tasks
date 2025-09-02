"use client";

import Image from "next/image";

import { cn } from "@/utils/cn";

import item_1 from "/public/1.jpg";
import item_2 from "/public/2.jpg";
import item_3 from "/public/3.jpg";
import item_4 from "/public/4.jpg";
import item_5 from "/public/5.jpg";
import item_6 from "/public/6.jpg";
import item_7 from "/public/7.jpg";
import item_8 from "/public/8.jpg";
import item_9 from "/public/9.jpg";
import item_10 from "/public/10.jpg";
import item_11 from "/public/11.jpg";
import item_12 from "/public/12.jpg";

const images = [
  { src: item_1, title: "Image 1" },
  { src: item_2, title: "Image 2" },
  { src: item_3, title: "Image 3" },
  { src: item_4, title: "Image 4" },
  { src: item_5, title: "Image 5" },
  { src: item_6, title: "Image 6" },
  { src: item_7, title: "Image 7" },
  { src: item_8, title: "Image 8" },
  { src: item_9, title: "Image 9" },
  { src: item_10, title: "Image 10" },
  { src: item_11, title: "Image 11" },
  { src: item_12, title: "Image 12" },
];

export default function SecondTask() {
  return (
    <section className={cn("mt-8 flex flex-col items-center")}>
      <h1 className={cn("mb-8 text-2xl font-bold")}>Task - 2</h1>

      <ul
        className={cn(
          "grid w-4/5 grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[500px]:grid-cols-1",
        )}
      >
        {images.map(({ src, title }, index) => (
          <li key={index} className={cn("flex flex-col")}>
            <div
              className={cn(
                "aspect-square overflow-hidden rounded-lg border-4 transition-colors duration-300",
                "hover:border-yellow-500",
                index % 4 === 0 ? "border-red-600" : "border-gray-700",
              )}
            >
              <Image
                src={src}
                alt={title}
                width={300}
                height={300}
                priority
                className={cn(
                  "h-full w-full object-cover transition-transform duration-300",
                  "hover:rotate-45",
                )}
              />
            </div>
            <button
              className={cn(
                "mt-2 text-center text-sm font-medium text-blue-600",
                "cursor-pointer hover:text-blue-800 hover:underline",
              )}
              onClick={() => console.log(`Clicked on ${title}`)}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
