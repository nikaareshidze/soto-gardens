import { ShopButton } from "@/components/shared";
import styles from "./styles.module.scss";

export default function CallToAction() {
  return (
    <div className={styles.callToAction}>
      <h1 className={styles.title}>
        Welcome To <br />
        Soto
      </h1>
      <p className={styles.description}>
        Professionally designed garden looks, <br />
        delivered to your door.
      </p>
      <ShopButton>Shop Now</ShopButton>
    </div>
  );
}
