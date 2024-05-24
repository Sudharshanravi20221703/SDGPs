import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MacBookAir1.module.css";

const MacBookAir1: FunctionComponentMacBookAir1Type = () => {
  const navigate = useNavigate();

  const onSDGClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.macbookAir3}>
      <header className={styles.sDGPParent}>
        <b className={styles.sDGContainer} onClick={onSDGClick}>
          <p className={styles.sD}>S D</p>
          <p className={styles.gP}>G P</p>
        </b>
        <div className={styles.component64Wrapper}>
          <img
            className={styles.component64Icon}
            loading="lazy"
            alt=""
            src="/component-64.svg"
          />
        </div>
      </header>
      <main className={styles.macbookAir3Inner}>
        <section className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.wrapperGroup3Parent}>
                <div className={styles.wrapperGroup3}>
                  <img
                    className={styles.wrapperGroup3Child}
                    alt=""
                    src="/group-3.svg"
                  />
                </div>
                <img
                  className={styles.projectActionsIcon}
                  alt=""
                  src="/trend-logo.svg"
                />
              </div>
              <h1 className={styles.projects}>Projects</h1>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.cardContentContainerParent}>
              <div className={styles.cardContentContainer}>
                <div className={styles.card}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image@2x.png"
                  />
                  <div className={styles.genreParent}>
                    <div className={styles.genre}>Genre</div>
                    <h1 className={styles.projectName}>Project Name</h1>
                    <div className={styles.groupNumberParent}>
                      <div className={styles.groupNumber}>Group Number</div>
                      <div className={styles.pharrowRightBoldWrapper}>
                        <img
                          className={styles.pharrowRightBoldIcon}
                          loading="lazy"
                          alt=""
                          src="/pharrowrightbold.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.pharrowRightBoldIcon1}
                    alt=""
                    src="/pharrowrightbold.svg"
                  />
                </div>
              </div>
              <div className={styles.cardContentContainer1}>
                <div className={styles.card1}>
                  <img
                    className={styles.imageIcon1}
                    alt=""
                    src="/image@2x.png"
                  />
                  <div className={styles.genreGroup}>
                    <div className={styles.genre1}>Genre</div>
                    <h1 className={styles.projectName1}>Project Name</h1>
                    <div className={styles.groupNumberGroup}>
                      <div className={styles.groupNumber1}>Group Number</div>
                      <div className={styles.pharrowRightBoldContainer}>
                        <img
                          className={styles.pharrowRightBoldIcon2}
                          loading="lazy"
                          alt=""
                          src="/pharrowrightbold.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.pharrowRightBoldIcon3}
                    alt=""
                    src="/pharrowrightbold.svg"
                  />
                </div>
              </div>
              <div className={styles.card2}>
                <img className={styles.imageIcon2} alt="" src="/image@2x.png" />
                <div className={styles.genreContainer}>
                  <div className={styles.genre2}>Genre</div>
                  <h1 className={styles.projectName2}>Project Name</h1>
                  <div className={styles.groupNumberContainer}>
                    <div className={styles.groupNumber2}>Group Number</div>
                    <div className={styles.pharrowRightBoldFrame}>
                      <img
                        className={styles.pharrowRightBoldIcon4}
                        loading="lazy"
                        alt=""
                        src="/pharrowrightbold.svg"
                      />
                    </div>
                  </div>
                </div>
                <img
                  className={styles.pharrowRightBoldIcon5}
                  alt=""
                  src="/pharrowrightbold.svg"
                />
              </div>
              <div className={styles.iconLinefilterWrapper}>
                <div className={styles.iconLinefilter} />
              </div>
            </div>
            <div className={styles.cardListContainer}>
              <div className={styles.card3}>
                <img className={styles.imageIcon3} alt="" src="/image@2x.png" />
                <div className={styles.frameDiv}>
                  <div className={styles.genre3}>Genre</div>
                  <h1 className={styles.projectName3}>Project Name</h1>
                  <div className={styles.groupNumberParent1}>
                    <div className={styles.groupNumber3}>Group Number</div>
                    <div className={styles.pharrowRightBoldWrapper1}>
                      <img
                        className={styles.pharrowRightBoldIcon6}
                        loading="lazy"
                        alt=""
                        src="/pharrowrightbold.svg"
                      />
                    </div>
                  </div>
                </div>
                <img
                  className={styles.pharrowRightBoldIcon7}
                  alt=""
                  src="/pharrowrightbold.svg"
                />
              </div>
              <div className={styles.card4}>
                <img className={styles.imageIcon4} alt="" src="/image@2x.png" />
                <div className={styles.genreParent1}>
                  <div className={styles.genre4}>Genre</div>
                  <h1 className={styles.projectName4}>Project Name</h1>
                  <div className={styles.groupNumberParent2}>
                    <div className={styles.groupNumber4}>Group Number</div>
                    <div className={styles.pharrowRightBoldWrapper2}>
                      <img
                        className={styles.pharrowRightBoldIcon8}
                        loading="lazy"
                        alt=""
                        src="/pharrowrightbold.svg"
                      />
                    </div>
                  </div>
                </div>
                <img
                  className={styles.pharrowRightBoldIcon9}
                  alt=""
                  src="/pharrowrightbold.svg"
                />
              </div>
              <div className={styles.card5}>
                <img className={styles.imageIcon5} alt="" src="/image@2x.png" />
                <div className={styles.genreParent2}>
                  <div className={styles.genre5}>Genre</div>
                  <h1 className={styles.projectName5}>Project Name</h1>
                  <div className={styles.groupNumberParent3}>
                    <div className={styles.groupNumber5}>Group Number</div>
                    <div className={styles.pharrowRightBoldWrapper3}>
                      <img
                        className={styles.pharrowRightBoldIcon10}
                        loading="lazy"
                        alt=""
                        src="/pharrowrightbold.svg"
                      />
                    </div>
                  </div>
                </div>
                <img
                  className={styles.pharrowRightBoldIcon11}
                  alt=""
                  src="/pharrowrightbold.svg"
                />
              </div>
              <div className={styles.card6}>
                <img className={styles.imageIcon6} alt="" src="/image@2x.png" />
                <div className={styles.genreParent3}>
                  <div className={styles.genre6}>Genre</div>
                  <h1 className={styles.projectName6}>Project Name</h1>
                  <div className={styles.groupNumberParent4}>
                    <div className={styles.groupNumber6}>Group Number</div>
                    <div className={styles.pharrowRightBoldWrapper4}>
                      <img
                        className={styles.pharrowRightBoldIcon12}
                        loading="lazy"
                        alt=""
                        src="/pharrowrightbold.svg"
                      />
                    </div>
                  </div>
                </div>
                <img
                  className={styles.pharrowRightBoldIcon13}
                  alt=""
                  src="/pharrowrightbold.svg"
                />
              </div>
              <div className={styles.card7}>
                <img className={styles.imageIcon7} alt="" src="/image@2x.png" />
                <div className={styles.genreParent4}>
                  <div className={styles.genre7}>Genre</div>
                  <h1 className={styles.projectName7}>Project Name</h1>
                  <div className={styles.groupNumberParent5}>
                    <div className={styles.groupNumber7}>Group Number</div>
                    <div className={styles.pharrowRightBoldWrapper5}>
                      <img
                        className={styles.pharrowRightBoldIcon14}
                        loading="lazy"
                        alt=""
                        src="/pharrowrightbold.svg"
                      />
                    </div>
                  </div>
                </div>
                <img
                  className={styles.pharrowRightBoldIcon15}
                  alt=""
                  src="/pharrowrightbold.svg"
                />
              </div>
              <div className={styles.card8}>
                <img className={styles.imageIcon8} alt="" src="/image@2x.png" />
                <div className={styles.genreParent5}>
                  <div className={styles.genre8}>Genre</div>
                  <h1 className={styles.projectName8}>Project Name</h1>
                  <div className={styles.groupNumberParent6}>
                    <div className={styles.groupNumber8}>Group Number</div>
                    <div className={styles.pharrowRightBoldWrapper6}>
                      <img
                        className={styles.pharrowRightBoldIcon16}
                        loading="lazy"
                        alt=""
                        src="/pharrowrightbold.svg"
                      />
                    </div>
                  </div>
                </div>
                <img
                  className={styles.pharrowRightBoldIcon17}
                  alt=""
                  src="/pharrowrightbold.svg"
                />
              </div>
              <div className={styles.card9}>
                <img className={styles.imageIcon9} alt="" src="/image@2x.png" />
                <div className={styles.genreParent6}>
                  <div className={styles.genre9}>Genre</div>
                  <h1 className={styles.projectName9}>Project Name</h1>
                  <div className={styles.groupNumberParent7}>
                    <div className={styles.groupNumber9}>Group Number</div>
                    <div className={styles.pharrowRightBoldWrapper7}>
                      <img
                        className={styles.pharrowRightBoldIcon18}
                        loading="lazy"
                        alt=""
                        src="/pharrowrightbold.svg"
                      />
                    </div>
                  </div>
                </div>
                <img
                  className={styles.pharrowRightBoldIcon19}
                  alt=""
                  src="/pharrowrightbold.svg"
                />
              </div>
              <div className={styles.card10}>
                <img
                  className={styles.imageIcon10}
                  alt=""
                  src="/image@2x.png"
                />
                <div className={styles.genreParent7}>
                  <div className={styles.genre10}>Genre</div>
                  <h1 className={styles.projectName10}>Project Name</h1>
                  <div className={styles.groupNumberParent8}>
                    <div className={styles.groupNumber10}>Group Number</div>
                    <div className={styles.pharrowRightBoldWrapper8}>
                      <img
                        className={styles.pharrowRightBoldIcon20}
                        loading="lazy"
                        alt=""
                        src="/pharrowrightbold.svg"
                      />
                    </div>
                  </div>
                </div>
                <img
                  className={styles.pharrowRightBoldIcon21}
                  alt=""
                  src="/pharrowrightbold.svg"
                />
              </div>
              <div className={styles.card11}>
                <img
                  className={styles.imageIcon11}
                  alt=""
                  src="/image@2x.png"
                />
                <div className={styles.genreParent8}>
                  <div className={styles.genre11}>Genre</div>
                  <h1 className={styles.projectName11}>Project Name</h1>
                  <div className={styles.groupNumberParent9}>
                    <div className={styles.groupNumber11}>Group Number</div>
                    <div className={styles.pharrowRightBoldWrapper9}>
                      <img
                        className={styles.pharrowRightBoldIcon22}
                        loading="lazy"
                        alt=""
                        src="/pharrowrightbold.svg"
                      />
                    </div>
                  </div>
                </div>
                <img
                  className={styles.pharrowRightBoldIcon23}
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
