import styles from "./index.module.css";

export default function DescriptionText({ textArray }) {
  return (
    <div className={styles.textbox}>
      {textArray.map((paragraph, index) => {
        return <p id={index}>{paragraph}</p>;
      })}
    </div>
  );
}
