"use client";

import Image from "next/image";
import "@/styles/photoCard.css";
import { FaHeart } from "react-icons/fa";
import LightboxModal from "@/components/LightboxModal/LightboxModal";
import {useState} from "react";
import { updateLikes } from "@/app/hook/likes";
import {useRouter} from "next/navigation";


export default function PhotoCard({ title, image, video, likes, mediaList, currentIndex, mediaId }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [like, setLike] = useState(likes);

  const handleLike = () => {
    if (!isLiked) {
      setIsLiked(true);
      updateLikes(mediaId, likes + 1);
      setLike(likes + 1);
      router.refresh();
    } else {
      setIsLiked(false);
      updateLikes(mediaId, likes - 1);
      setLike(likes - 1);
      router.refresh();
    }
    
  };

  const openModal = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  return (
    <article>
      
      <button className="open-lightbox-btn" onClick={openModal} aria-label={`${title}, vue rapprochée`}>
       
      {image ? (
        <Image
          src={`/assets/${image}`}
          width={350}
          height={300}
          alt={`${title}, vue rapprochée`}
          className="pictur"
          
        />
      ) : (
        <video className="pictur" aria-label={`Vidéo ${title}`}>
          <source src={`/assets/${video}`} type="video/mp4" />
        </video>
      )}
      </button>
      {isOpen ? (
        <LightboxModal mediaList={mediaList} initialIndex={currentIndex} close={openModal} />
      ) : null}
      <div className="title-and-like" onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleLike();
          }
        }}>
        <p tabIndex={0}>{title}</p>
        <div className="like" tabIndex={0}>
          <p className="counter">{like}</p>
          <FaHeart className="heart-icon" aria-label="like" onClick={handleLike}/>
        </div>
      </div>
    </article>
  );
}