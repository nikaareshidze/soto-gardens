import styles from "./styles.module.scss";

export default function ShopButtonBlack(props: any) {
  return <button className={styles.btnContainer}>{props.children}</button>;
}
