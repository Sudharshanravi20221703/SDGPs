import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";

const MacBookAir = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-start justify-start pt-[43px] pb-[131px] pr-[47px] pl-[50px] box-border gap-[230px] leading-[normal] tracking-[normal] mq450:gap-[57px] mq750:gap-[115px] mq750:pl-[25px] mq750:pr-[23px] mq750:box-border">
      <header className="self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-mini text-white font-sf-pro-display">
        <b className="w-9 relative tracking-[0.4em] leading-[168%] inline-block">
          <p className="m-0">S D</p>
          <p className="m-0">G P</p>
        </b>
        <div className="w-[70px] flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border">
          <img
            className="self-stretch h-[28.6px] relative max-w-full overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/component-64.svg"
          />
        </div>
      </header>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[157px] pr-[3px] pl-0 box-border max-w-full text-left text-31xl text-white font-sf-pro-display">
        <div className="w-[620px] flex flex-col items-start justify-start gap-[25px] max-w-full">
          <h1 className="m-0 self-stretch h-[49px] relative text-inherit leading-[97.47%] font-medium font-inherit inline-block z-[2] mq450:text-11xl mq450:leading-[29px] mq750:text-21xl mq750:leading-[39px]">
            Innovate. Collaborate. Inspire
          </h1>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-6xl">
            <h1 className="m-0 relative text-inherit leading-[97.47%] font-normal font-inherit z-[2] mq450:text-xl mq450:leading-[19px]">
              Explore Our Campus Creations.
            </h1>
          </div>
        </div>
      </section>
      <FrameComponent2 />
      <section className="self-stretch flex flex-row items-start justify-start py-0 pr-[41px] pl-[37px] box-border max-w-full text-left text-[45px] text-white font-inter">
        <div className="flex-1 flex flex-col items-start justify-start gap-[74px] max-w-full mq750:gap-[18px] mq1225:gap-[37px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-9">
            <h1 className="m-0 relative text-inherit font-bold font-inherit z-[2] mq450:text-[27px] mq750:text-[36px]">
              Projects
            </h1>
          </div>
          <FrameComponent1 />
          <FrameComponent />
        </div>
      </section>
    </div>
  );
};

export default MacBookAir;
