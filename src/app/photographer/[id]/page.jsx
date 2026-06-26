import "@/styles/photographerPage.css";
import { getPhotographer, getAllMediasForPhotographer, } from "@/app/lib/prisma-db";
import Header from "@/components/Header/Header";
import PhotographerHeader from "@/components/PhotographerHeader/PhotographerHeader";

import { FaHeart } from "react-icons/fa";
import Gallery from "@/components/Gallery/Gallery";

export default async function Page({ params }) {
  const { id } = await params;
  const photographer = await getPhotographer(id);
  const medias = await getAllMediasForPhotographer(id);

  const mediaList = medias.map((media) => ({
    id: media.id,
    title: media.title,
    image: media.image,
    video: media.video,
  }));

  const totalLikes = medias.reduce((count, media) => count + media.likes, 0);
  return (
    <div className="page">
      <Header />
      <main className="main">
         <PhotographerHeader photographer={photographer} />
         <div className="cta" tabIndex={0}>
          <div className="like">
            <p className="counter">{totalLikes}</p>
            <FaHeart className="heart-icon" aria-label="Likes" />
          </div>
          <p className="price">{photographer.price}€/jour</p>
        </div>
         <section className="photo-video-galerie">
          <Gallery
            medias={medias}
          />
        </section>
      </main>
    </div>
  );
}