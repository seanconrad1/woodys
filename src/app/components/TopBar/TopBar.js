"use client";
import React, { useEffect, useState } from "react";
import styles from "./TopBar.module.css";
import brandWhite from "../../assets/woodys_white.jpeg";
import brandText from "../../assets/brand2.jpeg";
import Image from "next/image";
import localFont from "next/font/local";
import { getAddressAndPhone } from "../../../utils/api";

const avenirFont = localFont({ src: "../../assets/fonts/avenir_next.woff2" });

const TopBar = () => {
  const [addressAndPhone, setAddressAndPhone] = useState("");
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    async function fetchMyAPI() {
      const result = await getAddressAndPhone();
      setAddressAndPhone(result);
    }
    fetchMyAPI();

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pickupLink =
    "https://ordering.chownow.com/order/6077/locations?add_cn_ordering_class=true";
  const deliveryLink =
    "https://www.ubereats.com/store/woodys-famous-salads-south-tampa/bv6aTsx2Rm6xnWPw13gSbg?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjQ1OTIlMjBTJTIwVHdpbmxlYWYlMjBEciUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmhlcmUlM0FhZiUzQXN0cmVldHNlY3Rpb24lM0FWNG1RM2tmbTl0RmplSGNnMGlpR2hDJTNBQ2djSUJDQzUtdk1rRUFFYUJEUTFPVEklMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyaGVyZV9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTMzLjI2Njg2JTJDJTIybG9uZ2l0dWRlJTIyJTNBLTExMS43NzIxNCU3RA%3D%3D";

  return (
    <div className={styles.topBarContainer}>
      <a href="/" className={styles.brandImageLink}>
        {typeof windowWidth !== "undefined" && (
          <Image
            width={"300px"}
            height={"0px"}
            src={windowWidth < 769 ? brandText : brandWhite}
            alt="Woodys Restaurant"
            className={styles.brandImage}
          ></Image>
        )}
      </a>

      {windowWidth < 769 ? null : (
        <div className={`${styles.bars} ${avenirFont.className}`}>
          <div className={`${styles.bar} ${styles.bar1}`}>
            <a href="/about" className={styles.bar1Item}>
              About Us
            </a>
          </div>
          <div className={`${styles.bar} ${styles.bar2}`}>
            <div className={styles.bar2Item}>
              <div className={styles.address}>{addressAndPhone.address}</div>
              <a
                className={styles.phone}
                href={`tel:${addressAndPhone.phoneNumber}`}
              >
                {addressAndPhone.phoneNumber}
              </a>
            </div>
            <div className={styles.orderButtons}>
              <a
                target="_blank"
                href={pickupLink}
                className={styles.orderNowLink}
              >
                ORDER PICKUP
              </a>
              <a
                target="_blank"
                href={deliveryLink}
                className={styles.orderNowLink}
              >
                ORDER DELIVERY
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;
