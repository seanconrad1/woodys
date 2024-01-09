import React from "react";
import styles from "./TopBar.module.css";
import brandImage from "../../assets/brand.png";
import brandWhite from "../../assets/woodys_white.jpeg";
import barBg from "../../assets/bar_bg.jpeg";
import Image from "next/image";

const TopBar = () => {
  const pickupLink =
    "https://ordering.chownow.com/order/6077/locations?add_cn_ordering_class=true";
  const deliveryLink =
    "https://www.ubereats.com/store/woodys-famous-salads-south-tampa/bv6aTsx2Rm6xnWPw13gSbg?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjQ1OTIlMjBTJTIwVHdpbmxlYWYlMjBEciUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmhlcmUlM0FhZiUzQXN0cmVldHNlY3Rpb24lM0FWNG1RM2tmbTl0RmplSGNnMGlpR2hDJTNBQ2djSUJDQzUtdk1rRUFFYUJEUTFPVEklMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyaGVyZV9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTMzLjI2Njg2JTJDJTIybG9uZ2l0dWRlJTIyJTNBLTExMS43NzIxNCU3RA%3D%3D";

  return (
    <div className={styles.topBarContainer}>
      <a href="/" className={styles.brandImageLink}>
        <Image
          width={"300px"}
          height={"300px"}
          src={brandWhite}
          alt="Woodys Restaurant"
          className={styles.brandImage}
        ></Image>
      </a>
      <div className={styles.bars}>
        <div className={`${styles.bar} ${styles.bar1}`}>
          <a href="/about-us" className={styles.bar1Item}>About Us</a>
        </div>
        <div className={`${styles.bar} ${styles.bar2}`}>
          <div className={styles.bar2Item}>
            1722 S DALE MABRY HWY TAMPA, FL 33629 813.254.2806
          </div>
          <div className={styles.orderButtons}>
            <a target="_blank" href={pickupLink} className={styles.orderNowLink}>
              ORDER PICKUP
            </a>
            <a target="_blank" href={deliveryLink} className={styles.orderNowLink}>
              ORDER DELIVERY
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
