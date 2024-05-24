import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Card1 from "../components/Card1";
import Card from "../components/Card";
import styles from "./MacBookAir2.module.css";

const MacBookAir = () => {
  const navigate = useNavigate();

  const onSDGClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.macbookAir4}>
      <div className={styles.iconLinefilter} />
      <div className={styles.card}>
        <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        <b className={styles.projectName} />
        <div className={styles.genre}>Genre</div>
        <div className={styles.groupNumber}>Group Number</div>
        <img
          className={styles.pharrowRightBoldIcon}
          alt=""
          src="/pharrowrightbold.svg"
        />
        <img
          className={styles.pharrowRightBoldIcon1}
          alt=""
          src="/pharrowrightbold.svg"
        />
      </div>
      <div className={styles.card1}>
        <img className={styles.imageIcon1} alt="" src="/image@2x.png" />
        <b className={styles.projectName1}>Project Name</b>
        <div className={styles.genre1}>Genre</div>
        <div className={styles.groupNumber1}>Group Number</div>
        <img
          className={styles.pharrowRightBoldIcon2}
          alt=""
          src="/pharrowrightbold.svg"
        />
        <img
          className={styles.pharrowRightBoldIcon3}
          alt=""
          src="/pharrowrightbold.svg"
        />
      </div>
      <div className={styles.card2}>
        <img className={styles.imageIcon2} alt="" src="/image@2x.png" />
        <b className={styles.projectName2}>Project Name</b>
        <div className={styles.genre2}>Genre</div>
        <div className={styles.groupNumber2}>Group Number</div>
        <img
          className={styles.pharrowRightBoldIcon4}
          alt=""
          src="/pharrowrightbold.svg"
        />
        <img
          className={styles.pharrowRightBoldIcon5}
          alt=""
          src="/pharrowrightbold.svg"
        />
      </div>
      <header className={styles.sDGPParent}>
        <b className={styles.sDGContainer} onClick={onSDGClick}>
          <p className={styles.sD}>S D</p>
          <p className={styles.gP}>G P</p>
        </b>
        <div className={styles.component64Wrapper}>
          <img
            className={styles.component64Icon}
            loading="lazy"
            alt=""
            src="/component-64.svg"
          />
        </div>
      </header>
      <main className={styles.macbookAir4Inner}>
        <section className={styles.frameParent}>
          <div className={styles.projectsWrapper}>
            <h1 className={styles.projects}>Projects</h1>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.wrapperGroup3Parent}>
                  <div className={styles.wrapperGroup3}>
                    <img
                      className={styles.wrapperGroup3Child}
                      alt=""
                      src="/group-3.svg"
                    />
                  </div>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/trend-logo.svg"
                  />
                </div>
                <Card1 />
                <Card1 propLeft="unset" propRight="433px" />
                <Card1 propLeft="unset" propRight="93px" />
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.frameDiv}>
                    <div className={styles.frameParent1}>
                      <div className={styles.projectNameWrapper}>
                        <h1 className={styles.projectName3}>Project Name</h1>
                      </div>
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.frameItem}
                          alt=""
                          src="/line-116.svg"
                        />
                        <img
                          className={styles.frameInner}
                          loading="lazy"
                          alt=""
                          src="/line-117.svg"
                        />
                      </div>
                    </div>
                    <h1 className={styles.loremIpsumDolor}>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus quis turpis eget dolor commodo commodo. Proin
                      fermentum sapien at augue accumsan, in tempor eros
                      sagittis. Pellentesque habitant morbi tristique senectus
                      et netus et malesuada fames ac turpis egestas. Nullam sit
                      amet quam nec nulla fringilla convallis. Integer quis
                      massa sed justo consectetur ultrices. Sed fermentum libero
                      ut justo gravida, non volutpat urna vestibulum.”
                    </h1>
                  </div>
                  <div className={styles.otherDetailsParent}>
                    <h1 className={styles.otherDetails}>Other Details</h1>
                    <div className={styles.otherDetailsWrapper}>
                      <h1 className={styles.otherDetails1}>Other Details</h1>
                    </div>
                    <h1 className={styles.otherDetails2}>Other Details</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.cardParent}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MacBookAir;
