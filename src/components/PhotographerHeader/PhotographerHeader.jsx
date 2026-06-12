import "@/styles/photographeHeader.css";
import Image from "next/image";
import Button from "../Button/Button";

export default function PhotographerHeader({ photographer }) {
  return (
    <section className="photographer-header">
      <div className="photographer-presentation">
        <h1>{photographer.name}</h1>
        <p className="localisation">
          {photographer.city}, {photographer.country}
        </p>
        <p className="citation">{photographer.tagline}</p>
      </div>
      <Button name="Contacter moi !"></Button>
      <Image
        src={`/assets/${photographer.portrait}`}
        width={200}
        height={200}
        alt={`Photo de profil de ${photographer.name}`}
        className="profile-img"
      />
    </section>
  );
}