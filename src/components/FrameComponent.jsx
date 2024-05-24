import { Button } from "@mui/material";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameContainer}>
          <div className={styles.ellipseParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
            <div className={styles.bottomNavigator} />
          </div>
        </div>
        <Button
          className={styles.normalButtonCore}
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 8.85%, #fff)",
            fontSize: "14",
            background: "rgba(255, 255, 255, 0.01)",
            border: "#fff solid 1px",
            borderRadius: "999px",
            "&:hover": { background: "rgba(255, 255, 255, 0.01)" },
            height: 55,
          }}
        >
          View All
        </Button>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
