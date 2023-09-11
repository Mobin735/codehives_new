import React from "react";
import styled from "styled-components";
import Corner from "./Corner";
import SideCorner from "./SideCorner";

const Container = styled.div`
  width: 100%;
  margin: auto;
  max-width: 1800px;
  padding: 0 40px;
  top: 0px;

  @media only screen and (max-width: 1045px) {
    padding: 0 20px;
  }
  @media only screen and (max-width: 830px) {
    padding: 0 10px;
  }
`;

const InnerContainer = styled.div`
  height: 95vh;
  min-height: 630px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 830px) {
    height: auto;
    flex-direction: column;
    margin-top: 74px;
  }
`;

const Right = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");
  opacity: 1;
  width: 100%;
  height: 100%;
  margin: 0 10px 0 0;
  background-color: #e86927;
  border-radius: 30px 30px 30px 0;
  overflow: hidden;
  /* opacity: 0; */
  transition: 0.3s;

  @media only screen and (max-width: 830px) {
    width: 100%;
    height: 500px;
    border-radius: 30px 30px 30px 0;
    transform: translateY(-10px);
  }

  video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 30px 30px 30px 0;
    overflow: hidden;
    z-index: 0;
  }
`;

const RightInner = styled.div`
  max-width: 50%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #e86927;
  padding: 20px 20px 0 0;
  border-radius: 0 30px 0 0;

  h1 {
    font-size: clamp(2.625rem, 2.114rem + 1.64vw, 3.75rem);
    line-height: 1.1;
    letter-spacing: -0.05em;
    transition: 0.6s;
    transition-delay: 0.2s;
    opacity: 1;
    transform: translateX(0);
    font-family: "Montserrat", sans-serif;
    padding-right: 5rem;

    del {
      text-decoration-color: rgb(255 255 255);
      text-decoration-thickness: 3px;
      text-decoration-style: wavy;
    }

    sup {
      font-size: 45px;
    }
  }

  div {
    width: 60px;
    height: 60px;
    background-color: transparent;
    border: 1px solid #000;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      display: block;
      width: 23px;
      height: 23px;
      transition: 0.3s;
      transform: rotate(90deg);
    }
  }
`;

const Left = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media only screen and (max-width: 830px) {
    width: 100%;
    margin: 10px 0 0;
  }

  .LeftUp {
    opacity: 1;
    transform: translateX(0);
    transition: 0.3s;
    transition-delay: 0.05s;
    width: 100%;
    aspect-ratio: 1/1;
    display: flex;
    background-color: #dcb688;
    flex-shrink: 0;
    border-radius: 50%;
    overflow: hidden;

    @media only screen and (max-width: 830px) {
      border-radius: 30px;
      aspect-ratio: auto;
    }

    .LeftUpInner {
      width: 100%;
      aspect-ratio: 1/1;
      height: 259.975px;
      overflow: hidden;
      position: relative;
      /* height: 100%; */
      touch-action: pan-y;

      @media only screen and (max-width: 830px) {
        height: 197.3px;
      }
    }

    .LeftUpCardContainer {
      transform: translateX(0%);
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      display: flex;

      input {
        display: none;
      }
    }

    .LeftUpCard {
      transform: translateX(0%);
      width: 100%;
      aspect-ratio: 1/1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* position: absolute; */
      left: 0;
      transition: 1.3s;

      @media only screen and (max-width: 830px) {
        aspect-ratio: 4/1;
        padding: 40px 20px;
        transform: translateX(0%);
      }

      span {
        font-size: clamp(4.375rem, 4.091rem + 0.91vw, 5rem);
        font-weight: 600;
      }

      div {
        max-width: 180px;
        margin: 0 auto;
        text-align: center;
        font-size: 18px;
      }
    }

    .LeftUpNavigationAuto {
      position: absolute;
      width: 100%;
      /* bottom: -25px; */
      text-align: center;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      bottom: 30px;

      @media only screen and (max-width: 830px) {
        width: auto;
        height: 100%;
        bottom: 0;
        right: 20px;
        justify-content: center;
        flex-direction: column;
      }

      div {
        display: block;
        width: 10px;
        height: 10px;
        padding: 0;
        margin: 0 8px;
        background: rgba(51, 51, 51, 0.25);
        border-radius: 50%;
        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: none;
        text-indent: -9999px;
        overflow: hidden;
        margin: 0 5px;
        transition: 2s;

        @media only screen and (max-width: 830px) {
          width: 16px;
          height: 16px;
          margin: 8px 0;
        }
      }
    }

    #radio1:checked ~ .LeftUpNavigationAuto .auto-btn1 {
      background-color: red;
    }

    #radio2:checked ~ .LeftUpNavigationAuto .auto-btn2 {
      background-color: red;
    }

    #radio3:checked ~ .LeftUpNavigationAuto .auto-btn3 {
      background-color: red;
    }

    #radio4:checked ~ .LeftUpNavigationAuto .auto-btn4 {
      background-color: red;
    }

    .LeftUpCardContainerDots {
      position: absolute;
      width: 100%;
      /* bottom: -25px; */
      text-align: center;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      bottom: 30px;

      @media only screen and (max-width: 830px) {
        width: auto;
        height: 100%;
        bottom: 0;
        right: 20px;
        justify-content: center;
        flex-direction: column;
      }

      label {
        display: block;
        width: 10px;
        height: 10px;
        padding: 0;
        margin: 0 8px;
        background: rgba(51, 51, 51, 0.25);
        border-radius: 50%;
        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: none;
        text-indent: -9999px;
        overflow: hidden;
        margin: 0 5px;

        @media only screen and (max-width: 830px) {
          width: 16px;
          height: 16px;
          margin: 8px 0;
        }
      }
    }

    #radio1:checked ~ .first {
      margin-left: 0;
    }
    #radio2:checked ~ .first {
      margin-left: -100%;
    }
    #radio3:checked ~ .first {
      margin-left: -200%;
    }
    #radio4:checked ~ .first {
      margin-left: -300%;
    }
  }

  .LeftDown {
    height: 100%;
    display: grid;
    grid-gap: 10px;
    gap: 10px;

    @media only screen and (max-width: 830px) {
      height: auto;
      min-height: 400px;
    }

    .LeftDownFirst {
      opacity: 1;
      transform: translateX(0);
      transition-delay: 0.1s;
      transition: 0.3s;
      min-height: 140px;
      background-color: #e86927;
      color: #fff;
      border-radius: 30px 30px 0;
      overflow: hidden;
      /* -webkit-mask-image: -webkit-radial-gradient(#fff, #000); */

      .LDF-First {
        height: 100%;
        z-index: 1;

        p {
          margin: 0;
          display: block;
          width: 100%;
          height: 100%;
          padding: 20px;

          h5 {
            margin: 0;
            font-size: clamp(1.313rem, 1.17rem + 0.45vw, 1.625rem);
          }
        }
      }

      section {
        background-image: none;
        z-index: 0;
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;

        .LDF-SectionDivFirst {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -100;
          clip-path: polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%);

          div {
            background-position: 50% 50%;
            background-size: cover;
            background-repeat: no-repeat;
            background-image: url(../images/2.jpg);
            position: absolute;
            top: 0px;
            left: 0px;
            width: 259.975px;
            height: 383.82px;
            overflow: hidden;
            pointer-events: none;
            transform-style: preserve-3d;
            backface-visibility: hidden;
            margin-top: 47.59px;
            transform: translate3d(0px, -53.185px, 0px);

            @media only screen and (max-width: 830px) {
              width: 100%;
            }
          }
        }
      }
    }

    .LeftDownSecond {
      opacity: 1;
      transform: translateX(0);
      transition-delay: 0.15s;
      transition: 0.3s;
      background-color: #c8935d;
      grid-row: 2/4;
      border-radius: 30px;

      .LDS-First {
        height: 100%;

        .LDSF-Inner {
          height: 100%;
          min-height: 160px;
          position: relative;

          .LDSFI-CardContainer {
            height: 160px;
            height: 100%;
            overflow: hidden;
            position: relative;
            /* height: 100%; */
            touch-action: pan-y;

            .LDSFIC-Cards {
              position: absolute;
              width: 100%;
              height: 100%;
              left: 0;
              display: flex;

              input {
                display: none;
              }

              .LDSFICC-Card {
                height: 100%;
                min-height: 160px;
                left: 0;
                width: 100%;
                transition: 1.3s;
                aspect-ratio: 4/1;
                padding: 25px 20px;
                transform: translateX(0%);

                h5 {
                  margin: 0;
                  font-size: clamp(2.2rem, 2.07rem + 1.45vw, 2.025rem);
                  font-weight: 600;
                  line-height: 1.1;
                  letter-spacing: -0.05em;

                  @media only screen and (max-width: 1045px) {
                    font-size: clamp(2.8rem, 2.07rem + 2.45vw, 2.025rem);
                  }

                  em {
                    color: #ffdebf;
                    font-style: normal;
                  }
                }
              }
              .LeftDownNavigationAuto {
                justify-content: flex-start;
                left: 20px;
                bottom: 20px;
                position: absolute;
                width: 100%;
                /* bottom: -25px; */
                text-align: center;
                display: flex;
                /* justify-content: center; */
                flex-wrap: wrap;

                div {
                  width: 22px;
                  height: 6px;
                  border-radius: 10px;
                  overflow: hidden;
                  /* -webkit-mask-image: -webkit-radial-gradient(#fff, #000); */
                  margin: 0 3px;

                  display: block;
                  /* width: 10px; */
                  /* height: 10px; */
                  padding: 0;
                  /* margin: 0 8px; */
                  /* background: rgba(51, 51, 51, 0.25); */
                  /* border-radius: 50%; */
                  cursor: pointer;
                  -webkit-appearance: none;
                  -moz-appearance: none;
                  appearance: none;
                  border: none;
                  text-indent: -9999px;
                  transition: 2s;
                  /* overflow: hidden; */
                }
              }

              #hero1:checked ~ .LeftDownNavigationAuto .auto-btnh1 {
                background-color: red;
              }

              #hero2:checked ~ .LeftDownNavigationAuto .auto-btnh2 {
                background-color: red;
              }

              #hero3:checked ~ .LeftDownNavigationAuto .auto-btnh3 {
                background-color: red;
              }

              #hero4:checked ~ .LeftDownNavigationAuto .auto-btnh4 {
                background-color: red;
              }
            }

            .LDSFI-Dots {
              justify-content: flex-start;
              left: 20px;
              bottom: 20px;
              position: absolute;
              width: 100%;
              /* bottom: -25px; */
              text-align: center;
              display: flex;
              /* justify-content: center; */
              flex-wrap: wrap;

              label {
                width: 22px;
                height: 6px;
                border-radius: 10px;
                overflow: hidden;
                /* -webkit-mask-image: -webkit-radial-gradient(#fff, #000); */
                margin: 0 3px;
                background-color: rgba(0, 82, 65, 0.4);

                display: block;
                /* width: 10px; */
                /* height: 10px; */
                padding: 0;
                /* margin: 0 8px; */
                background: rgba(51, 51, 51, 0.25);
                /* border-radius: 50%; */
                cursor: pointer;
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                border: none;
                text-indent: -9999px;
                /* overflow: hidden; */
              }
            }
            #hero1:checked ~ .firsth {
              margin-left: 0;
            }
            #hero2:checked ~ .firsth {
              margin-left: -100%;
            }
            #hero3:checked ~ .firsth {
              margin-left: -200%;
            }
            #hero4:checked ~ .firsth {
              margin-left: -300%;
            }
          }
        }
      }
    }
  }
`;

export default function Herosection(params) {
  let counter = 1;

  setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    document.getElementById("hero" + counter).checked = true;
    counter++;
    if (counter > 4) {
      counter = 1;
    }
  }, 4000);

  document.addEventListener("scroll", () => {
    const HeroScroll = document.getElementById("HeroParallax");
    if (HeroScroll) {
      HeroScroll.style.top = window.scrollY * -0.15 + "px";
    }
  });

  return (
    <>
      <Container>
        <InnerContainer>
          <Right>
            <video playsInline autoPlay muted loop>
              <source src="/videos/2.mp4" type="video/mp4" />
            </video>
            <RightInner>
              <Corner
                style={{
                  top: "-30px",
                  left: 0,
                  transform: "rotate(-90deg)",
                  height: "31px",
                }}
              />
              <h1>
                Lets
                <br />
                <del>Get</del>
                <sup>Git</sup> Together
              </h1>
              <div>
                <svg
                  width="31"
                  height="28"
                  viewBox="0 0 31 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.857198 13.7372L27.9141 13.7372"
                    stroke="black"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M15.4561 1.39417L27.9142 13.8522L15.4561 26.3104"
                    stroke="black"
                    strokeWidth="3"
                  ></path>
                </svg>
              </div>

              <Corner
                style={{
                  top: "auto",
                  bottom: "-1px",
                  left: "auto",
                  right: "-29px",
                  transform: "rotate(-90deg)",
                }}
              />
            </RightInner>
          </Right>
          <Left>
            <div className="LeftUp">
              <div className="LeftUpInner">
                <div className="LeftUpCardContainer">
                  <input type="radio" name="radio-btn" id="radio1" />
                  <input type="radio" name="radio-btn" id="radio2" />
                  <input type="radio" name="radio-btn" id="radio3" />
                  <input type="radio" name="radio-btn" id="radio4" />

                  <div className="LeftUpCard first">
                    <span>10+</span>
                    <div>Techical Events Organised</div>
                  </div>
                  <div className="LeftUpCard">
                    <span>5+</span>
                    <div>Fun Events Organised</div>
                  </div>
                  <div className="LeftUpCard">
                    <span>20</span>
                    <div>Team Members</div>
                  </div>
                  <div className="LeftUpCard">
                    <span>6+</span>
                    <div>Sponsered Events</div>
                  </div>

                  <div className="LeftUpNavigationAuto">
                    <div className="auto-btn1"></div>
                    <div className="auto-btn2"></div>
                    <div className="auto-btn3"></div>
                    <div className="auto-btn4"></div>
                  </div>
                </div>

                <div className="LeftUpCardContainerDots">
                  <label htmlFor="radio1" className="manual-btn one"></label>
                  <label htmlFor="radio2" className="manual-btn two"></label>
                  <label htmlFor="radio3" className="manual-btn three"></label>
                  <label htmlFor="radio4" className="manual-btn four"></label>
                </div>
              </div>
            </div>

            <div className="LeftDown">
              <div className="LeftDownFirst">
                <div className="LDF-First">
                  <p>
                    <h5>Join the Club🐝</h5>
                  </p>
                  <SideCorner />
                </div>
                <section>
                  <div className="LDF-SectionDivFirst">
                    <div id="HeroParallax"></div>
                  </div>
                </section>
              </div>
              <div className="LeftDownSecond">
                <div className="LDS-First">
                  <div className="LDSF-Inner">
                    <div className="LDSFI-CardContainer">
                      <div className="LDSFIC-Cards">
                        <input type="radio" name="radio-btnh" id="hero1" />
                        <input type="radio" name="radio-btnh" id="hero2" />
                        <input type="radio" name="radio-btnh" id="hero3" />
                        <input type="radio" name="radio-btnh" id="hero4" />

                        <div className="LDSFICC-Card firsth">
                          <h5>
                            What is <em> CodeHives?</em>
                          </h5>
                        </div>
                        <div className="LDSFICC-Card">
                          <h5>
                            Who is<em> Mentor </em>of<em> CodeHives? </em>
                          </h5>
                        </div>
                        <div className="LDSFICC-Card">
                          <h5>
                            How to Join<em> CodeHives?</em>
                          </h5>
                        </div>
                        <div className="LDSFICC-Card">
                          <h5>
                            <em> SKill's </em>Required to join
                            <em> CodeHives?</em>
                          </h5>
                        </div>

                        <div className="LeftDownNavigationAuto">
                          <div className="auto-btnh1"></div>
                          <div className="auto-btnh2"></div>
                          <div className="auto-btnh3"></div>
                          <div className="auto-btnh4"></div>
                        </div>
                      </div>
                      <div className="LDSFI-Dots">
                        <label htmlFor="hero1" className="manual-btnh"></label>
                        <label htmlFor="hero2" className="manual-btnh"></label>
                        <label htmlFor="hero3" className="manual-btnh"></label>
                        <label htmlFor="hero4" className="manual-btnh"></label>
                      </div>
                    </div>
                  </div>
                </div>
                <SideCorner />
              </div>
            </div>
          </Left>
        </InnerContainer>
      </Container>
    </>
  );
}
