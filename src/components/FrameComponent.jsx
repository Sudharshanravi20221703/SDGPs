import { Button } from "@mui/material";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[27px] ${className}`}
    >
      <div className="w-[150px] flex flex-col items-start justify-start gap-[61px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[50px]">
          <div className="h-2.5 flex-1 relative">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro-100 w-2.5 h-2.5" />
            <div className="absolute top-[0px] left-[20px] rounded-[50%] bg-gainsboro-200 w-2.5 h-2.5" />
            <div className="absolute top-[0px] left-[40px] rounded-[50%] bg-gainsboro-200 w-2.5 h-2.5" />
          </div>
        </div>
        <Button
          className="self-stretch h-[55px]"
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
