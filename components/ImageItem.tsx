import Image, { StaticImageData } from "next/image";

import { cn } from "@/utils";

interface ImageItemProps {
  src: StaticImageData;
  title: string;
  index: number;
  onImageClick: (index: number) => void;
  onDelete: (index: number) => void;
}

export default function ImageItem({
  src,
  title,
  index,
  onImageClick,
  onDelete,
}: ImageItemProps) {
  return (
    <li className={cn("flex flex-col")}>
      <div
        className={cn(
          "aspect-square overflow-hidden rounded-lg border-4 transition-colors duration-300",
          "cursor-pointer hover:border-yellow-500",
          index % 4 === 0 ? "border-red-600" : "border-gray-700",
        )}
        onClick={() => onImageClick(index)}
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
      <button
        className={cn(
          "mt-1 text-center text-lg font-bold text-red-500",
          "cursor-pointer transition-all duration-200 hover:scale-110 hover:text-red-700",
          "select-none",
        )}
        onClick={(e) => {
          e.stopPropagation();
          onDelete(index);
        }}
        title={`Delete ${title}`}
      >
        ✕
      </button>
    </li>
  );
}
