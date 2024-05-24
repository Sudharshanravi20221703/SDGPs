import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./MacBookAir.module.css";

const MacBookAir = () => {
  return (
    <div className={styles.macbookAir1}>
      <header className={styles.sDGPParent}>
        <b className={styles.sDGContainer}>
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
      <section className={styles.macbookAir1Inner}>
        <div className={styles.innovateCollaborateInspireParent}>
          <h1 className={styles.innovateCollaborateInspire}>
            Innovate. Collaborate. Inspire
          </h1>
          <div className={styles.exploreOurCampusCreationsWrapper}>
            <h1 className={styles.exploreOurCampus}>
              Explore Our Campus Creations.
            </h1>
          </div>
        </div>
      </section>
      <FrameComponent2 />
      <section className={styles.macbookAir1Child}>
        <div className={styles.frameParent}>
          <div className={styles.projectsWrapper}>
            <h1 className={styles.projects}>Projects</h1>
          </div>
          <FrameComponent1 />
          <FrameComponent />
        </div>
      </section>
    </div>
  );
};

export default MacBookAir;
