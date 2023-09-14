import React from "react";
import styled from "styled-components";
import Corner from "./Corner";

const Main = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  .SpanFirst {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline: 0;
    text-decoration: none;
    color: #000;
    cursor: pointer;
  }

  .SpanSecond {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: 0.15s;
  }

  .DivFirst {
    background-color: #e86927;
    padding: 10px;
    border-radius: 50% 0 0 0;
    margin: 0 -10px -10px 0;

    div {
      width: 50px;
      height: 50px;
      background-color: #000;
      border: 1px solid #000;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        display: block;
        width: 14px;
        height: 14px;
        transition: 0.3s;

        path {
          stroke: #fff;
        }
      }
    }
  }
`;

export default function SideCorner(props) {
  return (
    <>
      <Main style={props.style}>
        <a href="/contact">
          <span className="SpanFirst">
            <span className="SpanSecond">
              <div className="DivFirst">
                <Corner
                  style={{
                    top: "-30px",
                    height: "31px",
                    right: "9px",
                    transform: "rotate(180deg) scale(1.01)",
                  }}
                />
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
                    left: "-29px",
                    top: "31px",
                    transform: "rotate(180deg) scale(1.01)",
                  }}
                />
              </div>
            </span>
          </span>
        </a>
      </Main>
    </>
  );
}
