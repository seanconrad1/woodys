import React, { useState, useRef, useEffect } from "react";
import styles from "./SideNav.module.css";
import SocialsContainer from "../SocialsContainer/SocialsContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowSize } from "@react-hook/window-size";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

const orderPickupLink =
  "https://ordering.chownow.com/order/6077/locations?add_cn_ordering_class=true";
const orderDeliveryLink =
  "https://www.ubereats.com/store/woodys-famous-salads-south-tampa/bv6aTsx2Rm6xnWPw13gSbg?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjQ1OTIlMjBTJTIwVHdpbmxlYWYlMjBEciUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmhlcmUlM0FhZiUzQXN0cmVldHNlY3Rpb24lM0FWNG1RM2tmbTl0RmplSGNnMGlpR2hDJTNBQ2djSUJDQzUtdk1rRUFFYUJEUTFPVEklMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyaGVyZV9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTMzLjI2Njg2JTJDJTIybG9uZ2l0dWRlJTIyJTNBLTExMS43NzIxNCU3RA%3D%3D";

const SideNav = () => {
  const [windowWidth] = useWindowSize();

  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");

  const contentRef = useRef(null);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  // Mobile
  if (windowWidth < 768) {
    return (
      <>
        <div className={styles.barContainer}>
          <button className={styles.button} onClick={toggleNav}>
            <FontAwesomeIcon
              className={styles.faIcon}
              color={"black"}
              size={"xl"}
              icon={faUtensils}
            />
            <div className={styles.label}>{"Menu"}</div>
          </button>

          <div className={styles.orderButtons}>
            <a href={orderPickupLink} target="_blank" className={styles.button}>
              ORDER PICKUP
            </a>

            <a
              href={orderDeliveryLink}
              target="_blank"
              className={styles.button}
            >
              ORDER DELIVERY
            </a>
          </div>
        </div>
        <div
          className={`${styles.sideNavContainer} ${isOpen && styles.border}`}
        >
          <nav
            ref={contentRef}
            style={{ height }}
            className={`${styles.sideNav} `}
          >
            <ul className={styles.sideNavMenu}>
              <li className={`${styles.listItem} ${styles.location}`}>
                <div>TAMPA</div>
              </li>
              <li className={styles.listItem}>
                <a href="/" className={styles.listItemLink}>
                  Home
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="/menu-catering" className={styles.listItemLink}>
                  Menu &amp; Catering
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="/weekly-soups" className={styles.listItemLink}>
                  Weekly Soups
                </a>
              </li>

              <li className={styles.listItem}>
                <a href="/gallery" className={styles.listItemLink}>
                  Gallery
                </a>
              </li>

              <li>
                <SocialsContainer size={"xl"} color={"black"} />
              </li>

              <li className={styles.address}>
                1722 S DALE MABRY HWY TAMPA, FL 33629
              </li>
              <li>813-254-2806</li>
            </ul>
          </nav>
        </div>
      </>
    );
  } else {
    return (
      <div className={`${styles.sideNavContainer}`}>
        <nav className={`${styles.sideNav}`}>
          <ul className={styles.sideNavMenu}>
            <li className={`${styles.listItem} ${styles.location}`}>
              <div>TAMPA</div>
            </li>
            <li className={styles.listItem}>
              <a href="/" className={styles.listItemLink}>
                Home
              </a>
            </li>
            <li className={styles.listItem}>
              <a href="/menu-catering" className={styles.listItemLink}>
                Menu &amp; Catering
              </a>
            </li>
            <li className={styles.listItem}>
              <a href="/weekly-soups" className={styles.listItemLink}>
                Weekly Soups
              </a>
            </li>

            <li className={styles.listItem}>
              <a href="/gallery" className={styles.listItemLink}>
                Gallery
              </a>
            </li>
          </ul>
        </nav>

        <SocialsContainer size={"xl"} color={"black"} />
      </div>
    );
  }
};

export default SideNav;
