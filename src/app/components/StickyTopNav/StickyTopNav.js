import React, { useState, useEffect } from "react";
import styles from "./StickyTopNav.module.css";
import { sendGTMEvent } from "@next/third-parties/google";

const StickyTopNav = () => {
  const [isSticky, setSticky] = useState(false);

  const orderPickupLink =
    "https://ordering.chownow.com/order/6077/locations?add_cn_ordering_class=true";
  const orderDeliveryLink =
    "https://www.ubereats.com/store/woodys-famous-salads-south-tampa/bv6aTsx2Rm6xnWPw13gSbg?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjQ1OTIlMjBTJTIwVHdpbmxlYWYlMjBEciUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmhlcmUlM0FhZiUzQXN0cmVldHNlY3Rpb24lM0FWNG1RM2tmbTl0RmplSGNnMGlpR2hDJTNBQ2djSUJDQzUtdk1rRUFFYUJEUTFPVEklMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyaGVyZV9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTMzLjI2Njg2JTJDJTIybG9uZ2l0dWRlJTIyJTNBLTExMS43NzIxNCU3RA%3D%3D";

  const checkStickiness = () => {
    const menuBar = document.getElementById("menu-bar");
    setSticky(menuBar.getBoundingClientRect().bottom < 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkStickiness);

    return () => {
      window.removeEventListener("scroll", checkStickiness);
    };
  }, []);

  const handleClick = (type) => {
    if (type === "chownow") {
      sendGTMEvent({ event: `pickup-link-clicked`, value: type });
    } else {
      sendGTMEvent({ event: `delivery-link-clicked`, value: type });
    }
  };

  return (
    <div className={`${styles.stickyTopNav} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.orderButtons}>
        <a
          href={orderPickupLink}
          target="_blank"
          onClick={() => handleClick("chownow")}
          className={styles.button}
        >
          ORDER PICKUP
        </a>

        <a
          href={orderDeliveryLink}
          target="_blank"
          onClick={() => handleClick("ubereats")}
          className={styles.button}
        >
          ORDER DELIVERY
        </a>
      </div>
    </div>
  );
};

export default StickyTopNav;
