import Link from "next/link";
import Image from "next/image";
import "@/styles/header.css";

export default function Header({ title }) {
  return (
    <header>
      <Link href="/">
        <Image
          src="/logo.png"
          width={200}
          height={50}
          alt="Fisheye Home page"
        />
      </Link>
      {title && (
        <h1 tabIndex={0}>{title}</h1>
      )}
    </header>
  );
}