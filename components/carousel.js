import { imageData } from "../data/imageData";
import React, { useState } from "react";


export default function Carousel({}) {
  const [index, setIndex] = useState(0);

  function lastImage() {
    if (index >= 1) {
      setIndex(index - 1);
    } else {
      setIndex(4);
    }
  }

  function nextImage() {
    if (index < 4) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  return (
    <>
      <div id="carouselImage">
        <img className="carouselBody" src={`/${index}.jpg`}></img>
        <div id="testOnImageHere">{imageData[index].value}</div>
        <img onClick={lastImage} className="carouselArrowLeft" src="leftArrow.png"></img>
        <img onClick={nextImage} className="carouselArrowRight" src="rightArrow.png"></img>
      </div>
      
    </>

  );
}
