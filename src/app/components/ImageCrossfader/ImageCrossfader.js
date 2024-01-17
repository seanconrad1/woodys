import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./ImageCrossfader.module.css";
import {
  importAssetsFromFolder,
  removeExtension,
  removeExtAndDashes,
} from "@/utils/utils";
const imagesArr = importAssetsFromFolder(
  require.context("../../assets/carouselImages", false, /\.(png|jpe?g|svg)$/)
);

const ImageCrossfader = () => {
  const imagesLength = Object.keys(imagesArr).length;

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
      {Object.keys(imagesArr).map((image, idx) => {
        return (
          <div
            key={idx}
            id={`slideimg${idx}`}
            className={`${styles.imageAndTextContainer}  ${
              idx === 0 ? styles.show : ""
            }`}
          >
            <Image
              className={`${styles.image} `}
              src={imagesArr[image].default}
              alt={removeExtension(image)}
            />
            <div className={`${styles.menuItemName}`}>{removeExtAndDashes(image)}</div>
						<div className={styles.gradient}></div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageCrossfader;
