import "@/styles/lightbox.css";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function LightboxModal({ title, image, close }) {
  return (
    <section className="lightbox-modal">
      <div className="lightbox">
        <div className="btn-container">
          <button className="prev">
            <FaChevronLeft className="nav-icon" size={30} />
          </button>
        </div>
        <div className="photo-and-title">
          <Image
            src={`/assets/${image}`}
            width={350}
            height={300}
            alt={`Photo ${title}`}
            className="picture"
          />
          <p>{title}</p>
        </div>
        <div className="btn-container">
          <button className="next">
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