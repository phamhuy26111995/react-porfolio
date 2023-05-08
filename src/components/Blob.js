import React from "react";
import Image from "../assets/phamhuy.png";

function Blob() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#FF56F6"
        d="M61.5,-49.1C75.9,-31.1,81,-5.7,76,17.9C71.1,41.6,56.1,63.5,36.2,71.7C16.4,79.9,-8.4,74.3,-28.6,63.2C-48.8,52,-64.5,35.1,-71.4,13.7C-78.4,-7.7,-76.5,-33.6,-63.2,-51.4C-49.8,-69.2,-24.9,-78.8,-0.7,-78.2C23.6,-77.7,47.2,-67.1,61.5,-49.1Z"
        transform="translate(100 100)"
      />
      <image style={{transform :"translate(10px,-10px)"}} href={Image} height="200" width="200" />
    </svg>
  );
}

export default Blob;
