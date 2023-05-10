import { useState } from "react";
import styles from "./styles.module.scss";

export default function ProductsList() {
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
    <div className={styles.productsListContainer}>
      {products.map((product) => (
        <div key={product.id} className={styles.productContainer}>
          {product.hoverOrNot ? (
            <img
              src={product.url}
              width="100%"
              height="380px"
              onMouseEnter={() => changeUrl(product.id)}
              onMouseLeave={() => changeUrl(product.id)}
              alt=""
            />
          ) : (
            <img
              src={product.hoverUrl}
              width="100%"
              height="380px"
              onMouseEnter={() => changeUrl(product.id)}
              onMouseLeave={() => changeUrl(product.id)}
              alt=""
            />
          )}
          <h2 className={styles.productName}>{product.name}</h2>
          <p className={styles.productPrice}>from ${product.price}</p>
        </div>
      ))}
    </div>
  );
}
