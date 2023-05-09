import { ShopButton } from "@/components/shared";
import { useState } from "react";
import styles from "./styles.module.scss";

type currentIndexProps = {
  currentIndex: number;
};

export default function CallToAction({ currentIndex }: currentIndexProps) {
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
    {
      titleFirstLine: "Explore Soto",
      titleSecondLine: "White",
      descriptionFirstLine: "",
      descriptionSecondLine: "",
    },
  ]);

  return (
    <div className={styles.callToAction}>
      <h1 className={styles.title}>
        {ctaText[currentIndex].titleFirstLine}
        <br />
        {ctaText[currentIndex].titleSecondLine}
      </h1>
      {ctaText[currentIndex].descriptionFirstLine !== "" && (
        <p className={styles.description}>
          {ctaText[currentIndex].descriptionFirstLine}
          <br />
          {ctaText[currentIndex].descriptionSecondLine}
        </p>
      )}
      <ShopButton>Shop Now</ShopButton>
    </div>
  );
}
