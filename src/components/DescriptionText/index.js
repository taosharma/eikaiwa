import styles from "./index.module.css";

export default function DescriptionText({ textArray, textColor }) {
  return (
    <div className={styles.descriptionContainer} style={{ color: textColor }}>
      {textArray.map((paragraph, index) => {
        return <p id={index}>{paragraph}</p>;
      })}
    </div>
  );
}

DescriptionText.defaultProps = {
  textArray: [
    "Eikaiwa afternoon teaへようこそ！",
    "二人のイギリス人が作っていっる英語を勉強する人向けのサイトです。",
    "私達の理想像では、読者のみなさまがアフタヌーンティーを馳走しながら、英語も楽しむことです。心地よくて、マイペースで勉強しましょう！",
    "だって、英語ができれば、世界のみんなと会話ができます！",
  ],
};
