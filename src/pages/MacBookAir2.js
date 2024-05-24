import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Card1 from "../components/Card1";
import Card from "../components/Card";

const MacBookAir = () => {
  const navigate = useNavigate();

  const onSDGClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-start justify-start pt-[43px] pb-[170px] pr-[47px] pl-[50px] box-border gap-[201px] leading-[normal] tracking-[normal] text-left text-xs text-white font-inter mq450:gap-[50px] mq750:gap-[100px] mq750:pl-[25px] mq750:pr-[23px] mq750:box-border">
      <div className="w-6 h-6 relative hidden" />
      <div className="w-[250px] h-80 relative rounded-xl bg-white overflow-hidden shrink-0 hidden">
        <img
          className="absolute top-[-57px] left-[-35px] w-[306px] h-[424px] object-cover"
          alt=""
          src="/image@2x.png"
        />
        <b className="absolute top-[222px] left-[18px] text-6xl inline-block w-[190px] mq450:text-xl" />
        <div className="absolute top-[201px] left-[18px] inline-block min-w-[35px]">
          Genre
        </div>
        <div className="absolute top-[258px] left-[18px] inline-block min-w-[84px]">
          Group Number
        </div>
        <img
          className="absolute top-[270px] left-[192px] w-8 h-8 overflow-hidden"
          alt=""
          src="/pharrowrightbold.svg"
        />
        <img
          className="absolute top-[351px] left-[-46px] w-8 h-8 overflow-hidden"
          alt=""
          src="/pharrowrightbold.svg"
        />
      </div>
      <div className="w-[250px] h-80 relative rounded-xl bg-white overflow-hidden shrink-0 hidden">
        <img
          className="absolute top-[-57px] left-[-35px] w-[306px] h-[424px] object-cover"
          alt=""
          src="/image@2x.png"
        />
        <b className="absolute top-[222px] left-[18px] text-6xl inline-block w-[190px] mq450:text-xl">
          Project Name
        </b>
        <div className="absolute top-[201px] left-[18px] inline-block min-w-[35px]">
          Genre
        </div>
        <div className="absolute top-[258px] left-[18px] inline-block min-w-[84px]">
          Group Number
        </div>
        <img
          className="absolute top-[270px] left-[192px] w-8 h-8 overflow-hidden"
          alt=""
          src="/pharrowrightbold.svg"
        />
        <img
          className="absolute top-[351px] left-[-46px] w-8 h-8 overflow-hidden"
          alt=""
          src="/pharrowrightbold.svg"
        />
      </div>
      <div className="w-[250px] h-80 relative rounded-xl bg-white overflow-hidden shrink-0 hidden">
        <img
          className="absolute top-[-57px] left-[-35px] w-[306px] h-[424px] object-cover"
          alt=""
          src="/image@2x.png"
        />
        <b className="absolute top-[222px] left-[18px] text-6xl inline-block w-[190px] mq450:text-xl">
          Project Name
        </b>
        <div className="absolute top-[201px] left-[18px] inline-block min-w-[35px]">
          Genre
        </div>
        <div className="absolute top-[258px] left-[18px] inline-block min-w-[84px]">
          Group Number
        </div>
        <img
          className="absolute top-[270px] left-[192px] w-8 h-8 overflow-hidden"
          alt=""
          src="/pharrowrightbold.svg"
        />
        <img
          className="absolute top-[351px] left-[-46px] w-8 h-8 overflow-hidden"
          alt=""
          src="/pharrowrightbold.svg"
        />
      </div>
      <header className="self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-mini text-white font-sf-pro-display">
        <b
          className="w-9 relative tracking-[0.4em] leading-[168%] inline-block cursor-pointer"
          onClick={onSDGClick}
        >
          <p className="m-0">S D</p>
          <p className="m-0">G P</p>
        </b>
        <div className="w-[70px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
          <img
            className="self-stretch h-[28.6px] relative max-w-full overflow-hidden shrink-0 z-[2]"
            loading="lazy"
            alt=""
            src="/component-64.svg"
          />
        </div>
      </header>
      <main className="self-stretch flex flex-row items-start justify-start py-0 pr-[35px] pl-[27px] box-border max-w-full">
        <section className="flex-1 flex flex-col items-start justify-start gap-[83px] max-w-full text-left text-81xl text-white font-sf-pro-display mq750:gap-[21px] mq1275:gap-[41px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-6 box-border max-w-full">
            <h1 className="m-0 w-[351px] relative text-inherit leading-[97.47%] font-medium font-inherit inline-block max-w-full z-[2] mq450:text-11xl mq450:leading-[39px] mq750:text-31xl mq750:leading-[58px]">
              Projects
            </h1>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[70px] max-w-full text-31xl mq750:gap-[17px] mq1275:gap-[35px]">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[119px] box-border min-h-[745px] max-w-full mq750:pb-[77px] mq750:box-border">
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                <div className="h-[1261.5px] w-[608px] absolute !m-[0] top-[-525px] right-[-82px]">
                  <div className="absolute top-[369px] left-[158px] w-[900.5px] h-[892.5px] mix-blend-normal flex items-center justify-center">
                    <img
                      className="w-full h-full mix-blend-normal object-contain absolute left-[0px] top-[0px] [transform:scale(2.061)]"
                      alt=""
                      src="/group-3.svg"
                    />
                  </div>
                  <img
                    className="absolute top-[-97px] left-[0px] w-[1277.5px] h-[1277.5px] object-contain mix-blend-overlay z-[1]"
                    alt=""
                    src="/trend-logo.svg"
                  />
                </div>
                <Card1 />
                <Card1 propLeft="unset" propRight="433px" />
                <Card1 propLeft="unset" propRight="93px" />
                <div className="w-[1121px] shadow-[0px_0px_38px_rgba(0,_0,_0,_0.5)] rounded-30xl bg-gray flex flex-col items-start justify-start pt-[42px] pb-[67px] pr-[49px] pl-[61px] box-border gap-[131px] max-w-full z-[3] mq450:gap-[16px] mq750:gap-[33px] mq750:pt-[27px] mq750:pb-11 mq750:box-border mq1275:gap-[65px] mq1275:pl-[30px] mq1275:pr-6 mq1275:box-border">
                  <div className="w-[1121px] h-[626px] relative shadow-[0px_0px_38px_rgba(0,_0,_0,_0.5)] rounded-30xl bg-gray hidden max-w-full" />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[38px] max-w-full mq750:gap-[19px]">
                    <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px]">
                      <div className="w-[657px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border max-w-[calc(100%_-_43px)]">
                        <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit z-[4] mq450:text-11xl mq750:text-21xl">
                          Project Name
                        </h1>
                      </div>
                      <div className="h-[22.7px] w-[22.7px] relative">
                        <img
                          className="absolute top-[0px] left-[0px] w-full h-full object-contain z-[4]"
                          alt=""
                          src="/line-116.svg"
                        />
                        <img
                          className="absolute top-[0px] left-[0px] w-full h-full object-contain z-[5]"
                          loading="lazy"
                          alt=""
                          src="/line-117.svg"
                        />
                      </div>
                    </div>
                    <h1 className="m-0 w-[941px] h-[235px] relative text-11xl leading-[138%] font-normal font-inherit inline-block shrink-0 max-w-full z-[4] mq450:text-lg mq450:leading-[25px] mq750:text-5xl mq750:leading-[33px]">
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
                  <div className="flex flex-row items-start justify-start gap-[66px] max-w-[111%] shrink-0 text-11xl mq450:flex-wrap mq750:flex-wrap mq750:gap-[16px] mq1100:flex-wrap mq1275:flex-wrap mq1275:gap-[33px]">
                    <h1 className="m-0 w-[312px] relative text-inherit leading-[42px] font-normal font-inherit inline-block shrink-0 z-[4] mq450:text-lg mq450:leading-[25px] mq750:text-5xl mq750:leading-[33px]">
                      Other Details
                    </h1>
                    <div className="w-[359px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border max-w-full">
                      <h1 className="m-0 w-[312px] relative text-inherit leading-[42px] font-normal font-inherit inline-block z-[4] mq450:text-lg mq450:leading-[25px] mq750:text-5xl mq750:leading-[33px]">
                        Other Details
                      </h1>
                    </div>
                    <h1 className="m-0 w-[312px] relative text-inherit leading-[42px] font-normal font-inherit inline-block shrink-0 z-[4] mq450:text-lg mq450:leading-[25px] mq750:text-5xl mq750:leading-[33px]">
                      Other Details
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[25px] box-border max-w-full">
              <div className="w-[930px] flex flex-row flex-wrap items-start justify-start gap-[70px_88px] min-h-[710px] max-w-full mq450:gap-[22px] mq750:gap-[44px]">
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
