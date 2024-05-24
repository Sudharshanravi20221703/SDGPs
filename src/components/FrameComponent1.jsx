const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center gap-[59px] max-w-full text-left text-xs text-white font-inter mq750:gap-[29px] mq1225:flex-wrap ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-36 px-0 pb-0">
        <img
          className="w-8 h-8 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/icon-linechevronleft.svg"
        />
      </div>
      <div className="w-[281px] flex flex-col items-start justify-start py-0 pr-[31px] pl-0 box-border">
        <div className="self-stretch h-80 rounded-xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-end pt-[201px] px-[18px] pb-[18px] box-border relative gap-[49px] z-[1] mq450:h-auto mq450:pt-[131px] mq450:pb-5 mq450:box-border">
          <img
            className="w-[306px] h-[424px] absolute !m-[0] top-[-57px] left-[-35px] object-cover"
            alt=""
            src="/image@2x.png"
          />
          <div className="w-[206px] flex flex-col items-start justify-start gap-[6px]">
            <div className="relative inline-block min-w-[35px] z-[1]">
              Genre
            </div>
            <b className="w-[190px] relative text-6xl inline-block z-[1] mq450:text-xl">
              Project Name
            </b>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
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
      </div>
      <div className="w-[281px] flex flex-col items-start justify-start py-0 pr-[31px] pl-0 box-border">
        <div className="self-stretch h-80 rounded-xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-end pt-[201px] px-[18px] pb-[18px] box-border relative gap-[49px] z-[1] mq450:h-auto mq450:pt-[131px] mq450:pb-5 mq450:box-border">
          <img
            className="w-[306px] h-[424px] absolute !m-[0] top-[-57px] left-[-35px] object-cover"
            alt=""
            src="/image@2x.png"
          />
          <div className="w-[206px] flex flex-col items-start justify-start gap-[6px]">
            <div className="relative inline-block min-w-[35px] z-[1]">
              Genre
            </div>
            <h1 className="m-0 w-[190px] relative text-6xl font-bold font-inherit inline-block z-[1] mq450:text-xl">
              Project Name
            </h1>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
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
      </div>
      <div className="w-[334px] flex flex-row items-start justify-start gap-[52px] max-w-full mq450:flex-wrap mq450:gap-[26px]">
        <div className="h-80 flex-1 rounded-xl bg-white overflow-hidden flex flex-col items-start justify-end pt-[201px] px-[18px] pb-[18px] box-border relative gap-[49px] min-w-[162px] z-[1] mq450:pt-[131px] mq450:pb-5 mq450:box-border">
          <img
            className="w-[306px] h-[424px] absolute !m-[0] top-[-57px] left-[-35px] object-cover"
            alt=""
            src="/image@2x.png"
          />
          <div className="w-[206px] flex flex-col items-start justify-start gap-[6px]">
            <div className="relative inline-block min-w-[35px] z-[1]">
              Genre
            </div>
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
        <div className="flex flex-col items-start justify-start pt-[139px] px-0 pb-0">
          <img
            className="w-8 h-8 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icon-linechevronright.svg"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
