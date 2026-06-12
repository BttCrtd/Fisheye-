"use client";

import "@/styles/photographeHeader.css";
import Image from "next/image";
import Button from "../Button/Button";
import {useState} from "react";
import FormModal from "../FomModal/FormModal";

export default function PhotographerHeader({ photographer }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };
  return (
    <section className="photographer-header">
      <div className="photographer-presentation">
        <h1>{photographer.name}</h1>
        <p className="localisation">
          {photographer.city}, {photographer.country}
        </p>
        <p className="citation">{photographer.tagline}</p>
      </div>
      <Button name="Contacter moi !" onClick={openModal}></Button>
      <Image
        src={`/assets/${photographer.portrait}`}
        width={200}
        height={200}
        alt={`Photo de profil de ${photographer.name}`}
        className="profile-img"
      />
      {isOpen ? (
        <FormModal name={photographer.name} close={closeModal} />
      ) : null}
    </section>
  );
}