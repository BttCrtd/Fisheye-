import "@/styles/notFound.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Oups ! Erreur 404</h1>
      <p>La page que vous recherchez n&apos;existe pas.</p>

      <Link href="/">
        Revenir à l&apos;accueil
      </Link>
    </main>
  );
}