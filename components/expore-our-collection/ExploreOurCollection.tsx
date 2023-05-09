import React from "react";
import { ShopButtonBlack } from "../shared";
import { ProductsList } from "./products";
import styles from "./styles.module.scss";

export default function ExploreOurCollection() {
  return (
    <div className={styles.exploreContainer}>
      <div className={styles.ctaContainer}>
        <h1 className={styles.ctaTitle}>
          Explore Our <br />
          Collection
        </h1>
        <p className={styles.ctaDescription}>
          The Soto collections have been designed to provide year-round interest
          to outside space. Each collection is available for borders, window
          boxes, patios, balconies and front gardens.
        </p>
        <ShopButtonBlack>Shop All</ShopButtonBlack>
      </div>
      <ProductsList />
    </div>
  );
}
