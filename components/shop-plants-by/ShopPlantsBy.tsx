import React, { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { ShopButtonWhite } from "../shared";
import styles from "./styles.module.scss";

export default function ShopPlantsBy() {
  const [firstLi, setFirstLi] = useState("hidden");
  const [secondLi, setSecondLi] = useState("hidden");
  const [thirdLi, setThirdLi] = useState("hidden");
  const [fourthLi, setFourthLi] = useState("hidden");

  return (
    <div className={styles.shopPlantsByContainer}>
      <img
        src="https://cdn.shopify.com/s/files/1/0552/9331/3078/files/Cotswolds-24_3000x3000.jpg?v=1648559440"
        height="540px"
        width="100%"
        style={{ objectFit: "cover" }}
      />
      <div className={styles.shopPlantsByTextContainer}>
        <h1 className={styles.shopPlantsByTitle}>Shop plants by</h1>
        <ul className={styles.shopPlantsByList}>
          <div className={styles.liContainer}>
            <div style={{ visibility: `${firstLi}` }}>
              <GoPrimitiveDot size={20} />
            </div>
            <li
              onMouseEnter={() => {
                setFirstLi("visible");
              }}
              onMouseLeave={() => {
                setFirstLi("hidden");
              }}
            >
              Garden Borders
            </li>
          </div>
          <div className={styles.liContainer}>
            <div style={{ visibility: `${secondLi}` }}>
              <GoPrimitiveDot size={20} />
            </div>
            <li
              onMouseEnter={() => {
                setSecondLi("visible");
              }}
              onMouseLeave={() => {
                setSecondLi("hidden");
              }}
            >
              Front Garden
            </li>
          </div>
          <div className={styles.liContainer}>
            <div style={{ visibility: `${thirdLi}` }}>
              <GoPrimitiveDot size={20} />
            </div>
            <li
              onMouseEnter={() => {
                setThirdLi("visible");
              }}
              onMouseLeave={() => {
                setThirdLi("hidden");
              }}
            >
              Patio & Balcony
            </li>
          </div>
          <div className={styles.liContainer}>
            <div style={{ visibility: `${fourthLi}` }}>
              <GoPrimitiveDot size={20} />
            </div>
            <li
              onMouseEnter={() => {
                setFourthLi("visible");
              }}
              onMouseLeave={() => {
                setFourthLi("hidden");
              }}
            >
              Windowsills
            </li>
          </div>
        </ul>
        <div style={{ paddingLeft: "40px" }}>
          <ShopButtonWhite>Shop All</ShopButtonWhite>
        </div>
      </div>
    </div>
  );
}
