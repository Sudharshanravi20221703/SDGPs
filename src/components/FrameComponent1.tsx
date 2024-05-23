import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.iconLinechevronLeftWrapper}>
        <img
          className={styles.iconLinechevronLeft}
          loading="lazy"
          alt=""
          src="/icon-linechevronleft.svg"
        />
      </div>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
          <div className={styles.genreParent}>
            <div className={styles.genre}>Genre</div>
            <b className={styles.projectName}>Project Name</b>
            <div className={styles.groupNumberParent}>
              <div className={styles.groupNumber}>Group Number</div>
              <div className={styles.pharrowRightBoldWrapper}>
                <img
                  className={styles.pharrowRightBoldIcon}
                  loading="lazy"
                  alt=""
                  src="/pharrowrightbold.svg"
                />
              </div>
            </div>
          </div>
          <img
            className={styles.pharrowRightBoldIcon1}
            alt=""
            src="/pharrowrightbold.svg"
          />
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card1}>
          <img className={styles.imageIcon1} alt="" src="/image@2x.png" />
          <div className={styles.genreGroup}>
            <div className={styles.genre1}>Genre</div>
            <h1 className={styles.projectName1}>Project Name</h1>
            <div className={styles.groupNumberGroup}>
              <div className={styles.groupNumber1}>Group Number</div>
              <div className={styles.pharrowRightBoldContainer}>
                <img
                  className={styles.pharrowRightBoldIcon2}
                  loading="lazy"
                  alt=""
                  src="/pharrowrightbold.svg"
                />
              </div>
            </div>
          </div>
          <img
            className={styles.pharrowRightBoldIcon3}
            alt=""
            src="/pharrowrightbold.svg"
          />
        </div>
      </div>
      <div className={styles.cardParent}>
        <div className={styles.card2}>
          <img className={styles.imageIcon2} alt="" src="/image@2x.png" />
          <div className={styles.genreContainer}>
            <div className={styles.genre2}>Genre</div>
            <h1 className={styles.projectName2}>Project Name</h1>
            <div className={styles.groupNumberContainer}>
              <div className={styles.groupNumber2}>Group Number</div>
              <div className={styles.pharrowRightBoldFrame}>
                <img
                  className={styles.pharrowRightBoldIcon4}
                  loading="lazy"
                  alt=""
                  src="/pharrowrightbold.svg"
                />
              </div>
            </div>
          </div>
          <img
            className={styles.pharrowRightBoldIcon5}
            alt=""
            src="/pharrowrightbold.svg"
          />
        </div>
        <div className={styles.iconLinechevronRightWrapper}>
          <img
            className={styles.iconLinechevronRight}
            loading="lazy"
            alt=""
            src="/icon-linechevronright.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
