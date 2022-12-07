import styles from "./index.module.css";
import Title from "../Title";
import SecondaryTitle from "../SecondaryTitle";

// import { Link } from "react-router-dom";

export default function ArticleBannerImage({
  titleText,
  titleTextColour,
  secondaryTitleText,
  secondaryTitleTextColour,
}) {
  return (
    <>
      <div className={styles.heroImage}>
        <div className={styles.titlesContainer}>
          <div className={styles.heroTextContainer}>
            <Title titleText={titleText} textColor={titleTextColour} />
            <SecondaryTitle
              titleText={secondaryTitleText}
              textColor={secondaryTitleTextColour}
            />
          </div>
        </div>
        <div className={styles.sidebarContainer}></div>
      </div>
    </>
  );
}

ArticleBannerImage.defaultProps = {
  titleText: "What is afternoon tea?",
  titleTextColour: "white",
  secondaryTitleText: "アフタヌーンティーを聞いたことがありますか。",
  secondaryTitleTextColour: "white",
  image:
    "https://cdn.midjourney.com/c05c5184-a124-4db2-8ecd-742b4b06ce7f/grid_0.png",
};
