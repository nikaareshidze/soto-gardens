import { useEffect, useState } from "react";

export default function Carrousel() {
  const [imageState, setImageState] = useState({
    urls: [
      "https://cdn.shopify.com/s/files/1/0552/9331/3078/files/Soto_Green_Lifestyle_3000x3000.jpg?v=1649014077",
      "https://cdn.shopify.com/s/files/1/0552/9331/3078/files/SOTO_Classic_-_Lifestyle_02-4_3000x3000.jpg?v=1682370321",
      "https://cdn.shopify.com/s/files/1/0552/9331/3078/files/Soto_Product_Shoot_Low_Q-2746_3000x3000.jpg?v=1649793414",
      "https://cdn.shopify.com/s/files/1/0552/9331/3078/files/Big_Homepage_with_Black_test_4c6bb934-a31b-4c09-baf3-fb5fe55d082a_3000x3000.jpg?v=1648141933",
    ],
  });
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(
        (currentIndex) => (currentIndex + 1) % imageState.urls.length
      );
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [imageState.urls.length]);

  return (
    <img
      src={imageState.urls[currentIndex]}
      alt="house with garden"
      width="100%"
      height="640px"
      style={{ objectFit: "cover", display: "block" }}
    />
  );
}
