import styles from "./styles.module.scss";

export default function ShopButton(props: any) {
  return <button className={styles.btnContainer}>{props.children}</button>;
}
