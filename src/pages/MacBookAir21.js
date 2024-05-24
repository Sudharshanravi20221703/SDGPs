import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MacBookAir2 = () => {
  const navigate = useNavigate();

  const onSDGClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start py-0 pr-[34px] pl-0 box-border leading-[normal] tracking-[normal] [row-gap:20px] text-right text-31xl text-black font-sf-pro-display mq1025:flex-wrap mq1025:p-5 mq1025:box-border">
      <section className="flex-1 flex flex-col items-start justify-start pt-[42px] pb-[689px] pr-5 pl-[52px] box-border relative min-w-[557px] min-h-[832px] max-w-full text-left text-mini text-black font-sf-pro-display mq725:pt-[27px] mq725:pb-[448px] mq725:box-border mq725:min-w-full">
        <b
          className="w-9 relative tracking-[0.4em] leading-[168%] inline-block cursor-pointer"
          onClick={onSDGClick}
        >
          <p className="m-0">S D</p>
          <p className="m-0">G P</p>
        </b>
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <img
            className="absolute top-[0px] left-[-420px] w-[1277.5px] h-[1277.5px] object-contain mix-blend-overlay z-[1]"
            alt=""
            src="/trend-logo.svg"
          />
          <div className="absolute top-[442px] left-[-252px] w-[900.5px] h-[892.5px] mix-blend-normal z-[2] flex items-center justify-center">
            <img
              className="w-full h-full mix-blend-normal z-[2] object-contain absolute left-[0px] top-[0px] [transform:scale(2.061)]"
              loading="lazy"
              alt=""
              src="/group-3.svg"
            />
          </div>
        </div>
      </section>
      <div className="w-[484px] flex flex-col items-start justify-start pt-[53px] px-0 pb-0 box-border min-w-[484px] max-w-full ml-[-95.5px] mq725:min-w-full mq1025:flex-1 mq1025:ml-0">
        <div className="self-stretch flex flex-col items-end justify-start gap-[194.4px] max-w-full mq725:gap-[97px]">
          <div className="w-[70px] h-[28.6px] relative shrink-0 [debug_commit:bf4bc93] flex items-center justify-center">
            <img
              className="w-full h-full shrink-0 [debug_commit:bf4bc93] object-contain absolute left-[0px] top-[1px] [transform:scale(1.871)]"
              loading="lazy"
              alt=""
              src="/component-63.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full shrink-0">
            <h1 className="m-0 w-[414px] relative text-inherit leading-[97.47%] font-medium font-inherit inline-block shrink-0 [debug_commit:bf4bc93] max-w-full mq450:text-11xl mq450:leading-[29px] mq975:text-21xl mq975:leading-[39px]">
              <p className="m-0">Home</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">Projects</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">Contact</p>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacBookAir2;
