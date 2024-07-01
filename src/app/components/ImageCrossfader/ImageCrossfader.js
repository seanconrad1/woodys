/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ImageCrossfader.module.css";
import { removeDashes } from "@/utils/utils";
import { getCarouselImages } from "@/utils/api";

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

  const shuffledArray = (array) => {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  };

  shuffledArray(imagesArr);

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
            <img
              priority="true"
              as="image"
              rel="preload"
              className={`${styles.image} `}
              src={"https:" + image.fields.file.url}
              width={image.fields.file.details.image.width}
              height={image.fields.file.details.image.height}
              alt={image.fields.title}
            />
            <div className={`${styles.menuItemName}`}>
              {removeDashes(image.fields.title)}
            </div>
            <div className={styles.gradient}></div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageCrossfader;
