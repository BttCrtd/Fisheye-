"use client";

import Image from "next/image";
import "@/styles/photoCard.css";
import { FaHeart } from "react-icons/fa";
import LightboxModal from "@/components/LightboxModal/LightboxModal";
import {useState} from "react";

export default function PhotoCard({ title, image, video, likes, mediaList, currentIndex, }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  return (
    <article>
      {image ? (
        <Image
          src={`/assets/${image}`}
          width={350}
          height={300}
          alt={`Photo ${title}`}
          className="pictur"
          onClick={openModal}
        />
      ) : (
        <video className="pictur" onClick={openModal}>
          <source src={`/assets/${video}`} type="video/mp4" />
        </video>
      )}
      <div className="title-and-like">
        <p>{title}</p>
        <div className="like">
          <p className="counter">{likes}</p>
          <FaHeart className="heart-icon" />
        </div>
      </div>
      {isOpen ? (
        <LightboxModal mediaList={mediaList} initialIndex={currentIndex} close={openModal} />
      ) : null}
    </article>
  );
}