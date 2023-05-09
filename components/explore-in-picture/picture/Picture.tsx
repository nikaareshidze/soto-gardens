import React from "react";
import styles from "./styles.module.scss";

export default function Picture({ pictures, setPictures }: any) {
  function handlePictureClick(id: any) {
    const newPictures = [...pictures];

    newPictures.forEach((picture) => {
      picture.chosen = false;
    });

    const newestPictures = [...newPictures];

    const index = newestPictures.findIndex((picture) => picture.id === id);

    newestPictures[index].chosen = true;

    setPictures(newestPictures);
  }

  return (
    <div className={styles.pictureContainer}>
      <img
        src="https://cdn.shopify.com/s/files/1/0552/9331/3078/files/Soto_Green_Lifestyle-3_3000x3000.jpg?v=1649014681"
        width="100%"
      />
      <button
        className={styles.button1}
        onClick={() => {
          handlePictureClick(1);
        }}
      >
        {pictures[0].id}
      </button>
      <button
        className={styles.button2}
        onClick={() => {
          handlePictureClick(2);
        }}
      >
        {pictures[1].id}
      </button>
      <button
        className={styles.button3}
        onClick={() => {
          handlePictureClick(3);
        }}
      >
        {pictures[2].id}
      </button>
    </div>
  );
}
