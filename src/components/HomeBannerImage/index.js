import styles from "./index.module.css";
import Title from "../Title";
import SecondaryTitle from "../SecondaryTitle";
// import { Link } from "react-router-dom";

export default function HomeBannerImage() {
  return (
    <div className={styles.heroImage}>
      <div className={styles.heroTextContainer}>
        <Title titleText="Learn Chibilish" textColor={"white"} />
        <SecondaryTitle titleText="Over afternoon tea" textColor={"white"} />
      </div>
    </div>
  );
}

{
  /* <Link className={styles.link} to="/about">
          <button className={styles.heroButton}>About Hazie</button>
</Link>*/
}
