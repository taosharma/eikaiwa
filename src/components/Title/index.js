import styles from "./index.module.css";

export default function Title({ titleText, textColor }) {
  return (
    <>
      <h1 className={styles.title} style={{ color: textColor }}>
        {titleText}
      </h1>
    </>
  );
}
