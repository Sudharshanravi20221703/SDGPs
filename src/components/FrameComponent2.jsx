const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[60px] pr-[5px] pl-0 box-border max-w-full text-center text-11xl text-white font-sf-pro-display ${className}`}
    >
      <div className="w-[898px] flex flex-row items-start justify-start relative max-w-full">
        <div className="h-[1334.5px] w-[1277.5px] absolute !m-[0] top-[-616px] left-[-190px]">
          <div className="absolute top-[442px] left-[168px] w-[900.5px] h-[892.5px] mix-blend-normal flex items-center justify-center">
            <img
              className="w-full h-full mix-blend-normal object-contain absolute left-[0px] top-[0px] [transform:scale(2.061)]"
              alt=""
              src="/group-3.svg"
            />
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[1277.5px] h-[1277.5px] object-contain mix-blend-overlay z-[1]"
            alt=""
            src="/trend-logo.svg"
          />
        </div>
        <h1 className="m-0 flex-1 relative text-inherit leading-[138%] font-medium font-inherit inline-block max-w-full z-[2] mq450:text-lg mq450:leading-[25px] mq750:text-5xl mq750:leading-[33px]">
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

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
