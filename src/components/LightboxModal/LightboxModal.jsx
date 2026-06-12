"use client";

import "@/styles/lightbox.css";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import {useState} from "react";

export default function LightboxModal({ mediaList, initialIndex, close, }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const currentMedia = mediaList[currentIndex];

  const nextMedia = () => {
    setCurrentIndex((prev) =>
      prev === mediaList.length - 1 ? 0 : prev + 1
    );
  };

  const prevMedia = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? mediaList.length - 1 : prev - 1
    );
  };

  return (
    <section className="lightbox-modal">
      <div className="lightbox">
        <div className="btn-container">
          <button className="prev" onClick={prevMedia}>
            <FaChevronLeft className="nav-icon" size={30} />
          </button>
        </div>
        <div className="photo-and-title">
          {currentMedia.image ? (
            <Image
              src={`/assets/${currentMedia.image}`}
              width={350}
              height={300}
              alt={`Photo ${currentMedia.title}`}
              className="picture"
            />
          ) : (
            <video controls className="picture">
              <source
                src={`/assets/${currentMedia.video}`}
                type="video/mp4"
              />
            </video>
          )}
          <p>{currentMedia.title}</p>
        </div>
        <div className="btn-container">
          <button className="next" onClick={nextMedia}>
            <FaChevronRight className="nav-icon" size={30} />
          </button>
          <button className="close-lightbox-btn">
            <IoMdClose size={42} onClick={close} />
          </button>
        </div>
      </div>
    </section>
  );
}