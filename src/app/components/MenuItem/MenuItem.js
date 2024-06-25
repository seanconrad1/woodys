/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "./MenuItem.module.css";
import { truncateText } from "../../../utils/utils";

const MenuItem = ({ name, price, description, image }) => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.menuItem}>
        <div className={styles.menuAndDesc}>
          <div id="text-container" className={styles.leftSide}>
            <div className={styles.menuItemName}>{name}</div>
            <div className={styles.price}>{price}</div>
          </div>

          {image && (
            <div className={styles.menuItemImgContainer}>
              <img
                as="image"
                rel="preload"
                unoptimized={false}
                priority
                width={250}
                height={250}
                className={styles.menuItemImg}
                src={image}
                alt={name}
              />
            </div>
          )}
        </div>

        <div className={styles.description} id="description">
          {description}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
