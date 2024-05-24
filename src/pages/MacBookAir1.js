import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MacBookAir1 = () => {
  const navigate = useNavigate();

  const onSDGClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-end justify-start pt-[43px] px-[47px] pb-[170px] box-border gap-[201px] leading-[normal] tracking-[normal] mq450:gap-[50px] mq750:gap-[100px] mq750:pl-[23px] mq750:pr-[23px] mq750:box-border">
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
      <main className="w-[1091px] flex flex-row items-start justify-end py-0 px-[33px] box-border max-w-full">
        <section className="flex-1 flex flex-col items-start justify-start gap-[118px] max-w-full text-left text-81xl text-white font-sf-pro-display mq750:gap-[29px] mq1025:gap-[59px]">
          <div className="w-[929px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[351px] flex flex-row items-start justify-start relative max-w-full">
              <div className="h-[1261.5px] w-[608px] absolute !m-[0] right-[-465px] bottom-[-819.5px]">
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
              <h1 className="m-0 flex-1 relative text-inherit leading-[97.47%] font-medium font-inherit inline-block max-w-full z-[2] mq450:text-11xl mq450:leading-[39px] mq1025:text-31xl mq1025:leading-[58px]">
                Projects
              </h1>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[70px] max-w-full text-xs font-inter mq750:gap-[17px] mq1025:gap-[35px]">
            <div className="self-stretch flex flex-row items-start justify-center gap-[71px] mq750:gap-[18px] mq1125:flex-wrap mq1025:gap-[35px]">
              <div className="w-[269px] flex flex-col items-start justify-start py-0 pr-[19px] pl-0 box-border">
                <div className="self-stretch h-80 rounded-xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-end pt-[201px] px-[18px] pb-[18px] box-border relative gap-[49px] mq450:pt-[131px] mq450:pb-5 mq450:box-border">
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
              </div>
              <div className="w-[269px] flex flex-col items-start justify-start py-0 pr-[19px] pl-0 box-border">
                <div className="self-stretch h-80 rounded-xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-end pt-[201px] px-[18px] pb-[18px] box-border relative gap-[49px] z-[2] mq450:pt-[131px] mq450:pb-5 mq450:box-border">
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
              </div>
              <div className="h-80 w-[250px] rounded-xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-end pt-[201px] px-[18px] pb-[18px] box-border relative gap-[49px] z-[2] mq450:pt-[131px] mq450:pb-5 mq450:box-border">
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
              <div className="flex flex-col items-start justify-start pt-[148px] px-0 pb-0">
                <div className="w-6 h-6 relative z-[2]" />
              </div>
            </div>
            <div className="w-[930px] flex flex-row flex-wrap items-start justify-start gap-[70px_88px] min-h-[1100px] max-w-full mq450:gap-[22px] mq750:gap-[44px]">
              <div className="h-80 w-[250px] rounded-xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-end pt-[201px] px-[18px] pb-[18px] box-border relative gap-[49px] mq450:pt-[131px] mq450:pb-5 mq450:box-border">
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
              <div className="h-80 w-[250px] rounded-xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-end pt-[201px] px-[18px] pb-[18px] box-border relative gap-[49px] z-[2] mq450:pt-[131px] mq450:pb-5 mq450:box-border">
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
              <div className="h-80 w-[250px] rounded-xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-end pt-[201px] px-[18px] pb-[18px] box-border relative gap-[49px] z-[2] mq450:pt-[131px] mq450:pb-5 mq450:box-border">
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
              <div className="h-80 w-[250px] rounded-xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-end pt-[201px] px-[18px] pb-[18px] box-border relative gap-[49px] mq450:pt-[131px] mq450:pb-5 mq450:box-border">
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
              <div className="h-80 w-[250px] rounded-xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-end pt-[201px] px-[18px] pb-[18px] box-border relative gap-[49px] mq450:pt-[131px] mq450:pb-5 mq450:box-border">
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
              <div className="h-80 w-[250px] rounded-xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-end pt-[201px] px-[18px] pb-[18px] box-border relative gap-[49px] mq450:pt-[131px] mq450:pb-5 mq450:box-border">
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
              <div className="h-80 w-[250px] rounded-xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-end pt-[201px] px-[18px] pb-[18px] box-border relative gap-[49px] mq450:pt-[131px] mq450:pb-5 mq450:box-border">
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
              <div className="h-80 w-[250px] rounded-xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-end pt-[201px] px-[18px] pb-[18px] box-border relative gap-[49px] mq450:pt-[131px] mq450:pb-5 mq450:box-border">
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
              <div className="h-80 w-[250px] rounded-xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-end pt-[201px] px-[18px] pb-[18px] box-border relative gap-[49px] mq450:pt-[131px] mq450:pb-5 mq450:box-border">
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
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MacBookAir1;
