"use client";
import { useEffect } from "react";
import Image from "next/image";
import styles from "./MenuItem.module.css";
import useScreenSize from "@/hooks/useScreenSize";

const MenuItem = ({ name, price, description, image }) => {
  const { width } = useScreenSize();

  useEffect(() => {
    const BASE_OFFSET_HEIGHT = 48; //2 lines of text
    const elementToAdd = "...";

    function truncateText() {
      const allHeadlineDateContainer =
        document.querySelectorAll("#text-container");
      for (const item of allHeadlineDateContainer) {
        const itemOffsetHeight = item.offsetHeight;
        if (itemOffsetHeight > BASE_OFFSET_HEIGHT) {
          const headlineTextObj = item.querySelector("#description");
          if (headlineTextObj !== null) {
            const headlineTextAndLength = getTextAndLength(headlineTextObj);
            truncateTextToFit(headlineTextObj, headlineTextAndLength);
          }
        }
      }
    }
    function getTextAndLength(nodeObj) {
      if (nodeObj === null) {
        return {};
      }
      return {
        text: nodeObj.textContent?.trim(),
        length: nodeObj.textContent?.trim()?.length,
      };
    }

    function truncateTextToFit(nodeObj, textAndLength) {
      if (isEmptyObject(textAndLength)) {
        return false;
      }
      for (let index = textAndLength.length; index > 1; index--) {
        let slicedString = textAndLength.text.slice(0, index);
        if (isTextFitsOnGivenLine(slicedString, nodeObj)) {
          break;
        }
      }
    }
    let added = false;
    function isTextFitsOnGivenLine(slicedString, nodeObj) {
      nodeObj.textContent = slicedString + elementToAdd;
      return nodeObj.offsetHeight <= BASE_OFFSET_HEIGHT;
    }

    function isEmptyObject(obj) {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          return false;
        }
      }
      return true;
    }
    truncateText();
  }, []);

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.menuItem}>
        <div id="text-container" className={styles.leftSide}>
          <div className={styles.menuItemName}>{name}</div>
          <div className={styles.price}>{`$${price}.00`}</div>
          <div className={styles.description} id="description">
            {description}
          </div>
        </div>
        <div className={styles.menuItemImgContainer}>
          <Image
            width={250}
            height={250}
            objectFit="cover"
            className={styles.menuItemImg}
            src={image}
            alt={name}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
