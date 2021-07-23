import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Promoted() {
  const images = [
    {
      url: "https://placeimg.com/640/480/animals",
      name: "Animals",
    },
    {
      url: "https://placeimg.com/640/480/arch",
      name: "Architecture",
    },
    {
      url: "https://placeimg.com/640/480/nature",
      name: "Nature",
    },
    {
      url: "https://placeimg.com/640/480/people",
      name: "People",
    },
  ];

  console.log("render promoted")

  return (
    <Carousel>
      {images.map((image) => (
        <div>
          <img src={image.url} alt={image.name} />
          <p className="legend">{image.name}</p>
        </div>
      ))}
    </Carousel>
  );
}
