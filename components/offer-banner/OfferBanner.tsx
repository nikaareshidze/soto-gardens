import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function OfferBanner() {
  const [offerText, setOfferText] = useState<string[]>([
    "Sign up to our newsletter for 10% off",
    "Free delivery for orders from 50$",
    "For our Border collections Soto hand deliver within Greater London and the home counties",
  ]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % offerText.length);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [offerText.length]);

  return (
    <div className={styles.offerBannerContainer}>
      <h1 className={styles.offerBannerTitle}>{offerText[currentIndex]} </h1>
    </div>
  );
}
