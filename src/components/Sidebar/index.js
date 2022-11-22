import styles from "./index.module.css";

export default function Sidebar({ photo, caption }) {
  return (
    <div className={styles.sidebarBox}>
      <p>{caption}</p>
    </div>
  );
}
