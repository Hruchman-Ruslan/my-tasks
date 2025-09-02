"use client";

import { useEffect, useState } from "react";

import { cn, formatDateTime } from "@/utils";

import { imagesData, ImageData } from "@/data/images.data";

import Modal from "@/components/Modal";
import ImageList from "@/components/ImageList";

export default function SecondTask() {
  const [images, setImages] = useState<ImageData[]>(imagesData);
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

  const deleteImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));

    if (isModalOpen && currentImageIndex >= index) {
      if (images.length <= 1) {
        setIsModalOpen(false);
      } else if (currentImageIndex === index) {
        const newIndex = index === 0 ? 0 : index - 1;
        setCurrentImageIndex(newIndex);
      } else if (currentImageIndex > index) {
        setCurrentImageIndex(currentImageIndex - 1);
      }
    }
  };

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentDateTime(formatDateTime(now));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <>
      <section className={cn("mt-8 flex flex-col items-center")}>
        <h1 className={cn("mb-8 text-2xl font-bold")}>Task - 2</h1>

        <div className={cn("mb-6 text-center")}>
          <span className={cn("mb-2 block text-lg font-semibold")}>
            Counter images: {images.length}
          </span>
          <span className={cn("block text-sm text-gray-600")}>
            Current data and time: {currentDateTime}
          </span>
        </div>

        <ImageList
          images={images}
          onImageClick={openModal}
          onDelete={deleteImage}
        />
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
