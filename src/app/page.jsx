
import styles from "../styles/page.module.css";
import Header from "@/components/Header/Header";
import Card from "@/components/Card/Card";
import { getAllPhotographers } from "@/app/lib/prisma-db";

export default async function Home() {
  const photographers = await getAllPhotographers();
  return (
    <div className={styles.page}>
      <Header title="Nos photographes" />
      <main className={styles.main}>
        <section className={styles.gallerie}>
          {photographers.map((photographer) => (
            <Card key={photographer.id} id={photographer.id} />
          ))}
        </section>
        
      </main>
    </div>
  );
}
