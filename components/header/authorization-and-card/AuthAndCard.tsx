import styles from "./styles.module.scss";
import { CiSearch } from "react-icons/ci";
import { TbGardenCart } from "react-icons/tb";

export default function AuthAndCard() {
  return (
    <div className={styles.authAndCardContainer}>
      <h1>Account</h1>
      <CiSearch size={20} />
      <TbGardenCart size={20} />
    </div>
  );
}
