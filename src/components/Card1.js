import { useMemo } from "react";
import styles from "./Card1.module.css";

const Card1 = ({ className = "", propLeft, propRight }) => {
  const cardStyle = useMemo(() => {
    return {
      left: propLeft,
      right: propRight,
    };
  }, [propLeft, propRight]);

  return (
    <div className={[styles.card, className].join(" ")} style={cardStyle}>
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      <div className={styles.genreParent}>
        <div className={styles.genre}>Genre</div>
        <h1 className={styles.projectName}>Project Name</h1>
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
  );
};

Card1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propRight: PropTypes.any,
};

export default Card1;
