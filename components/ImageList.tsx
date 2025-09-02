import { StaticImageData } from "next/image";

import { cn } from "@/utils";

import ImageItem from "@/components/ImageItem";

interface ImageListItem {
  src: StaticImageData;
  title: string;
}

interface ImageListProps {
  images: ImageListItem[];
  onImageClick: (index: number) => void;
  onDelete: (index: number) => void;
}

export default function ImageList({
  images,
  onImageClick,
  onDelete,
}: ImageListProps) {
  return (
    <ul
      className={cn(
        "grid w-4/5 grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[500px]:grid-cols-1",
      )}
    >
      {images.map(({ src, title }, index) => (
        <ImageItem
          key={index}
          src={src}
          title={title}
          index={index}
          onImageClick={onImageClick}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
