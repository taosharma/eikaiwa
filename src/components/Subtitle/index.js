import styles from "./index.module.css";

export default function Subtitle({ titleText, textColor }) {
  return (
    <>
      <h1 className={styles.subtitle} style={{ color: textColor }}>
        {titleText}
      </h1>
    </>
  );
}
