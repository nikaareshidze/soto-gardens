import { CallToAction } from "./call-to-action";
import { Carrousel } from "./carrousel";
import styles from "./styles.module.scss";

export default function MainImageCarrousel() {
  return (
    <div className={styles.mainCarrouselContainer}>
      <CallToAction />
      <Carrousel />
    </div>
  );
}
