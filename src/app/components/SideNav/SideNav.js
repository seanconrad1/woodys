"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./SideNav.module.css";
import SocialsContainer from "../SocialsContainer/SocialsContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import StickyTopNav from "../../components/StickyTopNav/StickyTopNav";

const orderPickupLink =
  "https://ordering.chownow.com/order/6077/locations?add_cn_ordering_class=true";
const orderDeliveryLink =
  "https://www.ubereats.com/store/woodys-famous-salads-south-tampa/bv6aTsx2Rm6xnWPw13gSbg?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjQ1OTIlMjBTJTIwVHdpbmxlYWYlMjBEciUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmhlcmUlM0FhZiUzQXN0cmVldHNlY3Rpb24lM0FWNG1RM2tmbTl0RmplSGNnMGlpR2hDJTNBQ2djSUJDQzUtdk1rRUFFYUJEUTFPVEklMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyaGVyZV9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTMzLjI2Njg2JTJDJTIybG9uZ2l0dWRlJTIyJTNBLTExMS43NzIxNCU3RA%3D%3D";

const SideNav = () => {
  const { windowWidth } = useWindowDimensions();

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

  if (windowWidth < 769) {
    return (
      <>
        <StickyTopNav />

        <div id="menu-bar" className={styles.barContainer}>
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
              <li className={styles.listItem}>
                <a href="/" className={styles.listItemLink}>
                  Home
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="/menu" className={styles.listItemLink}>
                  Menu
                </a>
              </li>

              <li className={styles.listItem}>
                <a href="/soups" className={styles.listItemLink}>
                  Soups
                </a>
              </li>

              <li className={styles.listItem}>
                <a href="/catering" className={styles.listItemLink}>
                  Catering
                </a>
              </li>

              <li className={styles.listItem}>
                <a href="/about" className={styles.listItemLink}>
                  About Us
                </a>
              </li>

              <li>
                <SocialsContainer size={"xl"} color={"black"} />
              </li>

              <li className={styles.address}>
                1722 S DALE MABRY HWY TAMPA, FL 33629
              </li>
              <li>
                <a href="tel:813-254-2806">813-254-2806</a>
              </li>
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
            <li className={styles.listItem}>
              <a href="/" className={styles.listItemLink}>
                Home
              </a>
            </li>

            <li className={styles.listItem}>
              <a href="/menu" className={styles.listItemLink}>
                Menu
              </a>
            </li>

            <li className={styles.listItem}>
              <a href="/soups" className={styles.listItemLink}>
                Soups
              </a>
            </li>

            <li className={styles.listItem}>
              <a href="/catering" className={styles.listItemLink}>
                Catering
              </a>
            </li>

            <li className={styles.listItem}>
              <a href="/about" className={styles.listItemLink}>
                About Us
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
