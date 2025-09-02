"use client";

import Image, { StaticImageData } from "next/image";

import { useEffect } from "react";

import { cn } from "@/utils";

interface ImageItem {
  src: StaticImageData;
  title: string;
}

interface ModalProps {
  isOpen: boolean;
  images: ImageItem[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
}

export default function Modal({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNext,
}: ModalProps) {
  const handleModalBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onNext();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center",
        "bg-opacity-75 bg-black backdrop-blur-sm",
      )}
      onClick={handleModalBackgroundClick}
    >
      <div
        className={cn(
          "relative flex h-full max-h-[90vh] w-full max-w-4xl items-center justify-center",
          "p-4",
        )}
      >
        <div
          className={cn(
            "relative max-h-full max-w-full cursor-pointer",
            "transition-transform duration-300 hover:scale-105",
          )}
          onClick={handleImageClick}
        >
          <Image
            src={currentImage.src}
            alt={currentImage.title}
            width={800}
            height={800}
            priority
            className={cn(
              "h-auto max-h-[80vh] w-auto max-w-full object-contain",
              "rounded-lg shadow-2xl",
            )}
          />
          <div
            className={cn(
              "absolute bottom-4 left-1/2 -translate-x-1/2 transform",
              "bg-opacity-60 rounded-lg bg-black px-4 py-2 text-white",
              "text-sm font-medium",
            )}
          >
            {currentImage.title} ({currentIndex + 1} / {images.length})
          </div>
        </div>

        <button
          onClick={onClose}
          className={cn(
            "absolute top-4 right-4 text-3xl text-white",
            "transition-colors duration-200 hover:text-gray-300",
            "flex h-10 w-10 items-center justify-center",
            "bg-opacity-50 hover:bg-opacity-75 rounded-full bg-black",
          )}
        >
          ×
        </button>
      </div>
    </div>
  );
}
