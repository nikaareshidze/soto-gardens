import { AuthAndCard } from "./authorization-and-card";
import { Logo } from "./logo";
import { Navbar } from "./navbar";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <Logo />
      <Navbar />
      <AuthAndCard />
    </div>
  );
}
