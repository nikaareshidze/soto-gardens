import { ShopButton } from "@/components/shared";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function CallToAction() {
  const [ctaText, setCtaText] = useState([
    {
      titleFirstLine: "Welcome To",
      titleSecondLine: "Soto",
      descriptionFirstLine: "Professionally designed garden looks,",
      descriptionSecondLine: "delivered to your door.",
    },
    {
      titleFirstLine: "Explore Soto",
      titleSecondLine: "House",
      descriptionFirstLine: "",
      descriptionSecondLine: "",
    },
    {
      titleFirstLine: "Ronny Colbie",
      titleSecondLine: "",
      descriptionFirstLine: "Timeless, seasonal, traditional bouquets are",
      descriptionSecondLine: "now available for national delivery.",
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % ctaText.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [ctaText.length]);

  return (
    <div className={styles.callToAction}>
      <h1 className={styles.title}>
        {`${ctaText[currentIndex].titleFirstLine}`}
        <br />
        {`${ctaText[currentIndex].titleSecondLine}`}
      </h1>
      {ctaText[currentIndex].descriptionFirstLine !== "" && (
        <p className={styles.description}>
          {`${ctaText[currentIndex].descriptionFirstLine}`}
          <br />
          {`${ctaText[currentIndex].descriptionSecondLine}`}
        </p>
      )}
      <ShopButton>Shop Now</ShopButton>
    </div>
  );
}
