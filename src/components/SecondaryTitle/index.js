import styles from "./index.module.css";

export default function SecondaryTitle({ titleText, textColor }) {
  return (
    <>
      <h1 className={styles.secondarytitle} style={{ color: textColor }}>
        {titleText}
      </h1>
    </>
  );
}
