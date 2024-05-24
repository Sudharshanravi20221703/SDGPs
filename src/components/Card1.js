import { useMemo } from "react";

const Card1 = ({ className = "", propLeft, propRight }) => {
  const cardStyle = useMemo(() => {
    return {
      left: propLeft,
      right: propRight,
    };
  }, [propLeft, propRight]);

  return (
    <div
      className={`h-80 w-[250px] !m-[0] absolute bottom-[-119px] left-[98px] rounded-xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-end pt-[201px] px-[18px] pb-[18px] box-border gap-[49px] text-left text-xs text-white font-inter ${className}`}
      style={cardStyle}
    >
      <img
        className="w-[306px] h-[424px] absolute !m-[0] top-[-57px] left-[-35px] object-cover"
        alt=""
        src="/image@2x.png"
      />
      <div className="w-[206px] flex flex-col items-start justify-start gap-[6px]">
        <div className="relative inline-block min-w-[35px] z-[1]">Genre</div>
        <h1 className="m-0 w-[190px] relative text-6xl font-bold font-inherit inline-block z-[1] mq450:text-xl">
          Project Name
        </h1>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div className="relative inline-block min-w-[84px] z-[1]">
            Group Number
          </div>
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <img
              className="w-8 h-8 relative overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/pharrowrightbold.svg"
            />
          </div>
        </div>
      </div>
      <img
        className="ml-[-64px] w-8 h-8 relative overflow-hidden shrink-0 z-[1]"
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
