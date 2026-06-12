import Image from "next/image";
import "@/styles/photoCard.css";
import { FaHeart } from "react-icons/fa";

export default function PhotoCard({ title, image, video, likes }) {
  return (
    <article>
      {image ? (
        <Image
          src={`/assets/${image}`}
          width={350}
          height={300}
          alt={`Photo ${title}`}
          className="pictur"
        />
      ) : (
        <video className="pictur">
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
    </article>
  );
}