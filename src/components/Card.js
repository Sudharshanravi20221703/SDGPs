import styles from "./Card.module.css";

const Card = ({ className = "" }) => {
  return (
    <div className={[styles.card, className].join(" ")}>
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

Card.propTypes = {
  className: PropTypes.string,
};

export default Card;
