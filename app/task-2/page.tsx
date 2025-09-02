"use client";

import { useEffect, useState } from "react";

import { cn, formatDateTime } from "@/utils";

import Modal from "@/components/Modal";
import ImageList from "@/components/ImageList";

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
  const [imageCount, setImageCount] = useState(0);
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  useEffect(() => {
    setImageCount(images.length);

    const updateDateTime = () => {
      const now = new Date();
      setCurrentDateTime(formatDateTime(now));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className={cn("mt-8 flex flex-col items-center")}>
        <h1 className={cn("mb-8 text-2xl font-bold")}>Task - 2</h1>

        <div className={cn("mb-6 text-center")}>
          <span className={cn("mb-2 block text-lg font-semibold")}>
            Counter images: {imageCount}
          </span>
          <span className={cn("block text-sm text-gray-600")}>
            Current data and time: {currentDateTime}
          </span>
        </div>

        <ImageList images={images} onImageClick={openModal} />
      </section>

      <Modal
        isOpen={isModalOpen}
        images={images}
        currentIndex={currentImageIndex}
        onClose={closeModal}
        onNext={nextImage}
      />
    </>
  );
}
