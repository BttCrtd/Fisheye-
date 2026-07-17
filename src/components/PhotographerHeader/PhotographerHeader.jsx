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
        <h1 tabIndex={0}>{photographer.name}</h1>
        <div tabIndex={0}>
        <p className="localisation">
          {photographer.city}, {photographer.country}
        </p>
        <p className="citation">{photographer.tagline}</p></div>
      </div>
      <Button name="Contacter moi !" aria="Contact Me" onClick={openModal}></Button>
      {isOpen ? (
        <FormModal name={photographer.name} close={closeModal} />
      ) : null}
      <Image
        src={`/assets/${photographer.portrait}`}
        width={200}
        height={200}
        alt={`Photo de profile de ${photographer.name}`}
        className="profile-img"
        tabIndex={0}
      />
    </section>
  );
}