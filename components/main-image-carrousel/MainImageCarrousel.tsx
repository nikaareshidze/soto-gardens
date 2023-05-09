import { useEffect, useState } from "react";
import { CallToAction } from "./call-to-action";
import { Carrousel } from "./carrousel";
import styles from "./styles.module.scss";
import { AiOutlineCaretRight } from "react-icons/ai";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { RiArrowRightFill } from "react-icons/ri";
import { RiArrowLeftFill } from "react-icons/ri";

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

  const nextIndex = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 3) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };
  const previousIndex = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return 3;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const [leftBtnHover, setLeftBtnHover] = useState(false);
  const [rightBtnHover, setRightBtnHover] = useState(false);

  return (
    <div className={styles.mainCarrouselContainer}>
      <CallToAction currentIndex={currentIndex} />
      <Carrousel currentIndex={currentIndex} />
      <div className={styles.swipeButtons}>
        <div
          onMouseEnter={() => {
            setLeftBtnHover(true);
          }}
          onMouseLeave={() => {
            setLeftBtnHover(false);
          }}
        >
          {leftBtnHover ? (
            <RiArrowLeftFill size={20} color="white" onClick={nextIndex} />
          ) : (
            <AiOutlineCaretLeft size={20} color="white" onClick={nextIndex} />
          )}
        </div>

        <div
          onMouseEnter={() => {
            setRightBtnHover(true);
          }}
          onMouseLeave={() => {
            setRightBtnHover(false);
          }}
        >
          {rightBtnHover ? (
            <RiArrowRightFill size={20} color="white" onClick={nextIndex} />
          ) : (
            <AiOutlineCaretRight
              size={20}
              color="white"
              onClick={previousIndex}
            />
          )}
        </div>
      </div>
    </div>
  );
}
