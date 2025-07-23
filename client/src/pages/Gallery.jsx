import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "./Gallery.css";

const galleryImages = [
  "/view1.webp", "/view2.webp", "/view3.webp", "/view4.webp", "/view5.webp",
  "/view6.webp", "/view7.webp", "/view8.webp", "/view9.webp", "/view10.webp",
  "/view11.webp", "/view12.webp", "/view13.webp", "/view14.webp", "/view15.webp",
  "/view16.webp", "/view17.webp", "/view18.webp", "/view19.webp", "/view20.webp",
  "/view21.webp", "/view22.webp", "/view23.webp", "/view24.webp", "/view25.webp"
];

const IMAGES_PER_LOAD = 8;

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_LOAD);

  const loadMore = () => {
    setVisibleCount((prev) => prev + IMAGES_PER_LOAD);
  };

  return (
    <section className="gallery-page">
      <h1>Gallery</h1>
      <p className="gallery-subtitle">Enjoy luxurious stays with stunning views</p>

      <div className="gallery-grid">
        {galleryImages.slice(0, visibleCount).map((src, index) => (
          <LazyLoadImage
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            effect="opacity"
            width="300"
            height="200"
            loading="lazy"
          />
        ))}
      </div>

      {visibleCount < galleryImages.length && (
        <div className="load-more-wrapper">
          <button onClick={loadMore} className="load-more-btn">Load More</button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
