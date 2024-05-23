import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.macbookAir1Inner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.wrapperGroup3Parent}>
          <div className={styles.wrapperGroup3}>
            <img
              className={styles.wrapperGroup3Child}
              alt=""
              src="/group-3.svg"
            />
          </div>
          <img className={styles.trendLogoIcon} alt="" src="/trend-logo.svg" />
        </div>
        <h1 className={styles.loremIpsumDolor}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis
          turpis eget dolor commodo commodo. Proin fermentum sapien at augue
          accumsan, in tempor eros sagittis. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Nullam sit amet quam nec nulla fringilla convallis. Integer quis massa
          sed justo consectetur ultrices. Sed fermentum libero ut justo gravida,
          non volutpat urna vestibulum.”
        </h1>
      </div>
    </section>
  );
};

export default FrameComponent2;
