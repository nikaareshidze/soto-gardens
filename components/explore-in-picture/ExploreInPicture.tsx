import React, { useState } from "react";
import Picture from "./picture/Picture";
import styles from "./styles.module.scss";

export default function ExploreInPicture() {
  const [products, setProducts] = useState([
    {
      id: 1,
      url: "https://cdn.shopify.com/s/files/1/0552/9331/3078/products/IMG_2773_591x785_crop_center.jpg?v=1673440248",
      hoverUrl:
        "https://cdn.shopify.com/s/files/1/0552/9331/3078/products/IMG_2770_3080x3080.jpg?v=1673440248",
      hoverOrNot: false,
      name: "Salvia Caradonna",
      price: 10.99,
    },
    {
      id: 2,
      url: "https://cdn.shopify.com/s/files/1/0552/9331/3078/products/SotoProductShootLowQ-1689_e0d1e95b-2773-44c6-a95c-29d915d612ad_3080x3080.jpg?v=1649514134",
      hoverUrl:
        "https://cdn.shopify.com/s/files/1/0552/9331/3078/products/SotoProductShootLowQ-1688_8ac01ec1-91e6-4d19-92c9-fba87718845e_3080x3080.jpg?v=1649767003",
      hoverOrNot: false,
      name: "Herb Kitchen - Large",
      price: 39.99,
    },
    {
      id: 3,
      url: "https://cdn.shopify.com/s/files/1/0552/9331/3078/products/IMG_3847_9311ce7c-1092-4255-916d-8088030d8bcb_3080x3080.jpg?v=1658143005",
      hoverUrl:
        "https://cdn.shopify.com/s/files/1/0552/9331/3078/products/IMG_4042_eef7eb0f-ce15-4ef6-8179-0027efd72018_3080x3080.jpg?v=1658143005",
      hoverOrNot: false,
      name: "Five Fingered Maidenhair Fern",
      price: 24.99,
    },
  ]);

  const [pictures, setPictures] = useState([
    { id: 1, chosen: true },
    { id: 2, chosen: false },
    { id: 3, chosen: false },
  ]);

  const changeUrl = (id: any) => {
    setProducts((prevData) => {
      const updatedData = prevData.map((item) => {
        if (item.id === id) {
          return { ...item, hoverOrNot: !item.hoverOrNot };
        }
        return item;
      });
      return updatedData;
    });
  };

  return (
    <div className={styles.exploreInPictureContainer}>
      <div className={styles.picture}>
        <Picture pictures={pictures} setPictures={setPictures} />
      </div>
      <div className={styles.product}>
        {pictures[0].chosen == true ? (
          <div className={styles.productContainer}>
            {products[0].hoverOrNot ? (
              <img
                src={products[0].url}
                width="100%"
                height="380px"
                onMouseEnter={() => changeUrl(products[0].id)}
                onMouseLeave={() => changeUrl(products[0].id)}
              />
            ) : (
              <img
                src={products[0].hoverUrl}
                width="100%"
                height="380px"
                onMouseEnter={() => changeUrl(products[0].id)}
                onMouseLeave={() => changeUrl(products[0].id)}
              />
            )}
            <p className={styles.productPrice}>N: {products[0].id}</p>
            <h2 className={styles.productName}>{products[0].name}</h2>
            <p className={styles.productPrice}>from ${products[0].price}</p>
          </div>
        ) : pictures[1].chosen == true ? (
          <div className={styles.productContainer}>
            {products[1].hoverOrNot ? (
              <img
                src={products[1].url}
                width="100%"
                height="380px"
                onMouseEnter={() => changeUrl(products[1].id)}
                onMouseLeave={() => changeUrl(products[1].id)}
              />
            ) : (
              <img
                src={products[1].hoverUrl}
                width="100%"
                height="380px"
                onMouseEnter={() => changeUrl(products[1].id)}
                onMouseLeave={() => changeUrl(products[1].id)}
              />
            )}
            <p className={styles.productPrice}>N: {products[1].id}</p>
            <h2 className={styles.productName}>{products[1].name}</h2>
            <p className={styles.productPrice}>from ${products[1].price}</p>
          </div>
        ) : (
          <div className={styles.productContainer}>
            {products[2].hoverOrNot ? (
              <img
                src={products[2].url}
                width="100%"
                height="380px"
                onMouseEnter={() => changeUrl(products[2].id)}
                onMouseLeave={() => changeUrl(products[2].id)}
              />
            ) : (
              <img
                src={products[2].hoverUrl}
                width="100%"
                height="380px"
                onMouseEnter={() => changeUrl(products[2].id)}
                onMouseLeave={() => changeUrl(products[2].id)}
              />
            )}
            <p className={styles.productPrice}>N: {products[2].id}</p>
            <h2 className={styles.productName}>{products[2].name}</h2>
            <p className={styles.productPrice}>from ${products[2].price}</p>
          </div>
        )}
      </div>
    </div>
  );
}
