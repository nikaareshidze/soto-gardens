import React from "react";
import styles from "./styles.module.scss";

export default function OfferBanner() {
  return (
    <div className={styles.offerBannerContainer}>
      <h1 className={styles.offerBannerTitle}>
        Sign up to our newsletter for 10% off
      </h1>
    </div>
  );
}
