import "@/styles/photographerPage.css";
import { getPhotographer, getAllMediasForPhotographer, } from "@/app/lib/prisma-db";
import Header from "@/components/Header/Header";
import PhotographerHeader from "@/components/PhotographerHeader/PhotographerHeader";
import PhotoCard from "@/components/PhotoCard/PhotoCard";

export default async function Page({ params }) {
  const { id } = await params;
  const photographer = await getPhotographer(id);
  const medias = await getAllMediasForPhotographer(id);
  return (
    <div className="page">
      <Header />
      <main className="main">
         <PhotographerHeader photographer={photographer} />
         <section className="photo-video-galerie">
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
      </main>
    </div>
  );
}