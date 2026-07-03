"use client";

import { useState, useMemo } from "react";
import PhotoCard from "@/components/PhotoCard/PhotoCard";

export default function Gallery({ medias }) {
  const [sortBy, setSortBy] = useState("popularity");

  const sortedMedias = useMemo(() => {
    const sorted = [...medias];

    switch (sortBy) {
      case "date":
        return sorted.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

      case "title":
        return sorted.sort((a, b) =>
          a.title.localeCompare(b.title)
        );

      case "popularity":
      default:
        return sorted.sort((a, b) => b.likes - a.likes);
    }
  }, [medias, sortBy]);

  const sortedMediaList = sortedMedias.map((media) => ({
  id: media.id,
  title: media.title,
  image: media.image,
  video: media.video,
}));

  return (
    <>
      <div className="filter">
        <label htmlFor="filter" aria-label={`Trier par ${sortBy === "popularity" ? "Popularité" : sortBy === "date" ? "Date" : "Titre"} `}>
          Trier par
        </label>

        <select
          id="filter"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="popularity">Popularité</option>
          <option value="date">Date</option>
          <option value="title">Titre</option>
        </select>
      </div>

      <div className="gallerie">
        {sortedMedias.map((media, index) => (
          <PhotoCard
            key={media.id}
            title={media.title}
            image={media.image}
            video={media.video}
            likes={media.likes}
            mediaList={sortedMediaList}
            currentIndex={index}
            mediaId={media.id}
          />
        ))}
      </div>
    </>
  );
}