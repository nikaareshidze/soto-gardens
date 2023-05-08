import styles from "./styles.module.scss";

export default function Navbar() {
  return (
    <ul className={styles.unorderedList}>
      <li>Collections</li>
      <li>Plants</li>
      <li>Pot Kits</li>
      <li>Pots & Tools</li>
      <li>Outdoor Living</li>
      <li>Gifts</li>
      <li>Journal</li>
    </ul>
  );
}
