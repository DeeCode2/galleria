import React from "react";
import { Link } from "react-router-dom";
import './gallery/Gallery.scss';
import galleryData from "./gallery/galleryData.js";
import Portraits from "./gallery/Portraits.js";

export default function Gallery() {

  const galleryItems = galleryData.map((item) => {
      return (
          <Portraits 

          key = {item.key}
          image = {item.image}
          title = {item.title}
          artist = {item.artist}
          date = {item.date}
          location = {item.location}
          description = {item.description}
          metlink = {item.metlink} 
          cardlink = {<Link className="card-link" to={`cardId/${item.key}`}>Explore</Link>}
          />
        )
  })

  return (
      <main id='gallery'>
        {galleryItems}
      </main>
  )
}