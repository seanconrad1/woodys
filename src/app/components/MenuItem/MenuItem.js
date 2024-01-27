"use client";
import Image from "next/image";
import salad from "../../assets/saladpics/greek-salad.jpg";
import styles from "./MenuItem.module.css";
import { useEffect } from "react";

const MenuItem = () => {
  const fullText =
    "chopped lettuce, Greek potato salad, feta, tomatoes, cucumbers, kalamata olives, scallions, pepperoncinis, Greek vinaigrette. SEE SIDES FOR EXTRAS";

  useEffect(() => {
    const BASE_OFFSET_HEIGHT = 48; //2 lines of text
    const elementToAdd = "...";

    function truncateText() {
      const allHeadlineDateContainer = document.querySelectorAll(
        "#text-container"
      );
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
          <div className={styles.menuItemName}>Chopped Up Greek</div>
          <div className={styles.price}>$8.00</div>
          <div className={styles.description} id="description">
            {fullText}
          </div>
        </div>
        <div>
          <Image
            className={styles.menuItemImg}
            src={salad}
            alt="Chopped Up Greek"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
