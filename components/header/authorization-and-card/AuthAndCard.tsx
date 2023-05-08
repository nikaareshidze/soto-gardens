import styles from "./styles.module.scss";
import { CiSearch } from "react-icons/ci";
import { TbGardenCart } from "react-icons/tb";

export default function AuthAndCard() {
  return (
    <div className={styles.authAndCardContainer}>
      <h1 className={styles.authAndCardItems}>Account</h1>
      <CiSearch className={styles.authAndCardItems} />
      <TbGardenCart className={styles.authAndCardItems} />
    </div>
  );
}
