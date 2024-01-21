"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ImageCrossfader.module.css";
import { removeDashes } from "@/utils/utils";
import { getCarouselImages } from "../../../utils/api";

const ImageCrossfader = () => {
  const [loading, setLoading] = useState(true);
  const [imagesArr, setImagesArr] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      const result = await getCarouselImages();
      setImagesArr(result);
      setLoading(false);
    }
    fetchMyAPI();
  }, []);

  console.log("What is my images array", imagesArr);
  const imagesLength = imagesArr.length;

  useEffect(() => {
    let timer = setInterval(() => {
      nextImage();
    }, 4000);
    let curImage = 0;
    let numImages = imagesLength;

    function nextImage() {
      let imageElement;
      // remove show class from current image
      imageElement = document.getElementById("slideimg" + curImage);
      removeClass(imageElement, styles.show);

      // compute next image
      curImage++;
      if (curImage > numImages - 1) {
        curImage = 0;
      }

      // add show class to next image
      imageElement = document.getElementById("slideimg" + curImage);
      addClass(imageElement, styles.show);
    }

    function addClass(elem, name) {
      let className = elem.className;
      if (className) className += " "; // if not blank, add a space separator
      className += name;
      elem.className = className;
    }

    function removeClass(elem, name) {
      let className = elem.className;
      elem.className = className
        .replace(name, "")
        .replace(/   /g, " ")
        .replace(/^ | $/g, ""); // remove name and extra blanks
    }

    return () => clearInterval(timer);
  }, [imagesLength]);

  return (
    <div className={styles.crossfaderContainer}>
      {imagesArr.map((image, idx) => {
        return (
          <div
            key={idx}
            id={`slideimg${idx}`}
            className={`${styles.imageAndTextContainer}  ${
              idx === 0 ? styles.show : ""
            }`}
          >
            <Image
              layout="fill"
              objectFit="cover" // Optional: use this if you want to maintain the image's aspect ratio
              className={`${styles.image} `}
              src={image.fields.file.url.replace("//", "https://")}
              alt={image.fields.title}
            />
            <div className={`${styles.menuItemName}`}>{removeDashes(image.fields.title)}</div>
            <div className={styles.gradient}></div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageCrossfader;
