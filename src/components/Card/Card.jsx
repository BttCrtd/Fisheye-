import Image from "next/image";
import Link from "next/link";
import "@/styles/card.css";
import { getPhotographer } from "../../app/lib/prisma-db";

export default async function Card({ id }) {
  const photographer = await getPhotographer(id);
  return (
    <article className="profile-card">
      <Link href={`/photographer/${photographer.id}`} className="name-and-img-container" aria-label={` ${photographer.name}`}>
        <Image
          src={`/assets/${photographer.portrait}`}
          width={200}
          height={200}
          alt={``}
          className="profile-img"
        />
        <h2>{photographer.name}</h2>
      </Link>
      <div className="info" tabIndex={0}>
        <p className="localisation">{photographer.city}, {photographer.country}</p>
        <p className="citation">{photographer.tagline}</p>
        <p className="prix">{photographer.price}€/jour</p>
      </div>
    </article>
  );
}