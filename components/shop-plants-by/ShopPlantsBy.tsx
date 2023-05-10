import React from "react";
import { ShopButtonWhite } from "../shared";
import styles from "./styles.module.scss";

export default function ShopPlantsBy() {
  return (
    <div className={styles.shopPlantsByContainer}>
      <img
        src="https://cdn.shopify.com/s/files/1/0552/9331/3078/files/Cotswolds-24_3000x3000.jpg?v=1648559440"
        height="540px"
        width="100%"
        style={{ objectFit: "cover" }}
        alt=""
      />
      <div className={styles.shopPlantsByTextContainer}>
        <h1 className={styles.shopPlantsByTitle}>Shop plants by</h1>
        <ul className={styles.shopPlantsByList}>
          <li>Garden Borders</li>
          <li>Front Garden</li>
          <li>Patio & Balcony</li>
          <li>Windowsills</li>
        </ul>
        <ShopButtonWhite>Shop All</ShopButtonWhite>
      </div>
    </div>
  );
}
