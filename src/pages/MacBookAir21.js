import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MacBookAir21.module.css";

const MacBookAir2 = () => {
  const navigate = useNavigate();

  const onSDGClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.macbookAir2}>
      <section className={styles.sDGPParent}>
        <b className={styles.sDGContainer} onClick={onSDGClick}>
          <p className={styles.sD}>S D</p>
          <p className={styles.gP}>G P</p>
        </b>
        <div className={styles.parent}>
          <img className={styles.icon} alt="" src="/trend-logo.svg" />
          <div className={styles.wrapperGroup3}>
            <img
              className={styles.wrapperGroup3Child}
              loading="lazy"
              alt=""
              src="/group-3.svg"
            />
          </div>
        </div>
      </section>
      <div className={styles.macbookAir2Inner}>
        <div className={styles.wrapperComponent63Parent}>
          <div className={styles.wrapperComponent63}>
            <img
              className={styles.component63Icon}
              loading="lazy"
              alt=""
              src="/component-63.svg"
            />
          </div>
          <div className={styles.homeProjectsContactWrapper}>
            <h1 className={styles.homeProjectsContactContainer}>
              <p className={styles.home}>Home</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.projects}>Projects</p>
              <p className={styles.blankLine1}>&nbsp;</p>
              <p className={styles.contact}>Contact</p>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacBookAir2;
