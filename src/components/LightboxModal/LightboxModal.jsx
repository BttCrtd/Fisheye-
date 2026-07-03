"use client";

import "@/styles/lightbox.css";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import {useState, useEffect} from "react";



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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevMedia();
      }

      if (e.key === "ArrowRight") {
        nextMedia();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mediaList.length, prevMedia, nextMedia]);

  return (
    <section className="lightbox-modal">
      <div className="lightbox" tabIndex={0} aria-label="image vue rapprochée">
        
        <div className="photo-and-title">
          {currentMedia.image ? (
            <Image
              src={`/assets/${currentMedia.image}`}
              width={350}
              height={300}
              alt={`${currentMedia.title}`}
              className="picture"
              tabIndex={0}
            />
          ) : (
            <video controls className="picture">
              <source
                src={`/assets/${currentMedia.video}`}
                type="video/mp4"
                tabIndex={0}
              />
            </video>
          )}
          <p tabIndex={0}>{currentMedia.title}</p>
        </div>

        <div className="btn-container">
            
            <button className="prev" onClick={prevMedia} aria-label="Previous image">
            <FaChevronLeft className="nav-icon" size={30} />
          </button>
        
          <button className="next" onClick={nextMedia}  aria-label="Next image">
            <FaChevronRight className="nav-icon" size={30} />
          </button>
          <button className="close-lightbox-btn" aria-label="Fermer fenêtre de dialogue" onClick={close} >
            <IoMdClose size={42} />
          </button>
        </div>
      </div>
    </section>
  );
}