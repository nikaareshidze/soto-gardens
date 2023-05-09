import { useEffect, useState } from "react";
import { CallToAction } from "./call-to-action";
import { Carrousel } from "./carrousel";
import styles from "./styles.module.scss";

export default function MainImageCarrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === 3) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div className={styles.mainCarrouselContainer}>
      <CallToAction currentIndex={currentIndex} />
      <Carrousel currentIndex={currentIndex} />
    </div>
  );
}
