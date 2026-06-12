import "@/styles/photographerPage.css";
import { getPhotographer, getAllMediasForPhotographer, } from "@/app/lib/prisma-db";
import Header from "@/components/Header/Header";
import PhotographerHeader from "@/components/PhotographerHeader/PhotographerHeader";
import PhotoCard from "@/components/PhotoCard/PhotoCard";
import { FaHeart } from "react-icons/fa";

export default async function Page({ params }) {
  const { id } = await params;
  const photographer = await getPhotographer(id);
  const medias = await getAllMediasForPhotographer(id);

  const totalLikes = medias.reduce((count, media) => count + media.likes, 0);
  return (
    <div className="page">
      <Header />
      <main className="main">
         <PhotographerHeader photographer={photographer} />
         <section className="photo-video-galerie">
          <div className="filter">
            <label htmlFor="filter">Trier par</label>
          </div>
          <div className="gallerie">
            {medias.map((media) => (
              <PhotoCard
                key={media.id}
                title={media.title}
                image={media.image}
                video={media.video}
                likes={media.likes}
              />
            ))}
          </div>
        </section>
         <div className="cta">
          <div className="like">
            <p className="counter">{totalLikes}</p>
            <FaHeart className="heart-icon" />
          </div>
          <p className="price">{photographer.price}€/jour</p>
        </div>
      </main>
    </div>
  );
}