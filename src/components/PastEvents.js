import React from "react";
import styled from "styled-components";
import events from "../details/Events.json";
import SideCorner from "./SideCorner";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 160px 0;
  overflow: hidden;
  margin-top: 0;

  @media only screen and (max-width: 830px) {
    margin: 80px 0;
    margin-top: 0;
  }

  .pastEventTitle {
    width: 100%;
    margin: auto;
    max-width: 1800px;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 1700px;
    padding: 0 80px;

    @media only screen and (max-width: 1045px) {
      padding: 0 20px;
    }

    @media only screen and (max-width: 830px) {
      padding: 0 10px;
    }

    .innerDiv {
      width: 200px;
      flex-shrink: 0;
      margin: 0 0 30px;
      transform: translateY(-10px);
      opacity: 0;
      transition: 0.3s;
      transform: translateY(0);
      opacity: 1;

      div {
        display: inline-flex;
        border-radius: 20px;
        padding: 5px 10px;
        border: 1px solid #000;
        font-size: 20px;
      }
    }
  }

  .mySwiper {
    width: 100%;
    padding: 0 140px 0 80px;
    transform: translateY(-10px);
    opacity: 0;
    transition: 0.3s;
    transition-delay: 0.1s;
    transform: translateY(0);
    opacity: 1;

    @media only screen and (max-width: 1045px) {
      padding: 0 80px 0 20px;
    }

    @media only screen and (max-width: 830px) {
      padding: 0 60px 0 10px;
    }
  }

  .soper {
    overflow: visible;
  }

  .card {
    @media only screen and (max-width: 830px) {
      margin-right: 14px !important;
    }

    .innerCard {
      background-color: #0046c7;
      width: 100%;
      display: flex;
      border-radius: 30px;
      transition: 0.3s;

      a {
        cursor: pointer;
        display: block;
        width: 100%;
        padding: 20px 30px;
        text-decoration: none;

        .innerSpan {
          h4 {
            font-weight: 600;
            line-height: 1.1;
            letter-spacing: -0.05em;
            font-size: clamp(1.5rem, 1.159rem + 1.09vw, 2.25rem);
            color: #fff;
            max-width: 220px;
            height: 40px;
            z-index: 1;
            margin: 0;
            font-size: 25px;
          }

          div {
            width: 60%;
            aspect-ratio: 1/1;
            margin: -40px auto auto;
            border-radius: 50%;
            overflow: hidden;

            @media only screen and (max-width: 830px) {
              width: 90%;
              margin: -30px auto 10px;
            }
            /* -webkit-mask-image: -webkit-radial-gradient(#fff, #000); */

            span {
              box-sizing: border-box;
              display: block;
              overflow: hidden;
              width: initial;
              height: initial;
              background: none;
              opacity: 1;
              border: 0;
              margin: 0;
              padding: 0;
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;

              img {
                object-fit: cover;
                position: absolute;
                inset: 0px;
                box-sizing: border-box;
                padding: 0px;
                border: none;
                margin: auto;
                display: block;
                width: 0px;
                height: 0px;
                min-width: 100%;
                max-width: 100%;
                min-height: 100%;
                max-height: 100%;
              }
            }
          }
        }
      }
    }
  }
`;

export default function PastEvents(params) {
  return (
    <>
      <Container>
        <div className="pastEventTitle">
          <div className="innerDiv">
            <div>Past Events</div>
          </div>
        </div>
        <div className="mySwiper">
          <Swiper
            slidesPerView={1}
            loop={true}
            initialSlide={1}
            spaceBetween={10}
            breakpoints={{
              500: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
              1252: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="soper"
          >
            {events.map((event, index) => (
              <SwiperSlide className="card" key={index}>
                <div
                  className="innerCard"
                  style={{ backgroundColor: event.backgroundColor }}
                >
                  <a href="/">
                    <span className="innerSpan">
                      <h4>{event.eventTitle}</h4>
                      <div>
                        <span>
                          <img src={event.poster} alt="event" />
                        </span>
                      </div>
                    </span>
                  </a>
                  <SideCorner
                    style={{
                      bottom: "-20px",
                      right: "-30px",
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </>
  );
}
