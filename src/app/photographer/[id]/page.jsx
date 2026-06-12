import "@/styles/photographerPage.css";
import { getPhotographer } from "@/app/lib/prisma-db";
import Header from "@/components/Header/Header";
import PhotographerHeader from "@/components/PhotographerHeader/PhotographerHeader";

export default async function Page({ params }) {
  const { id } = await params;
  const photographer = await getPhotographer(id);
  return (
    <div className="page">
      <Header />
      <main className="main">
         <PhotographerHeader photographer={photographer} />
      </main>
    </div>
  );
}