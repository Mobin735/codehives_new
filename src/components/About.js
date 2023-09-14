import React from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  margin: 80px 0;
  font-size: clamp(1rem, 0.886rem + 0.36vw, 1.25rem);

  @media only screen and (max-width: 830px) {
    margin: 40px 0;
  }

  div {
    max-width: 1700px;
    padding: 0 80px;
    width: 100%;
    margin: auto;

    @media only screen and (max-width: 1045px) {
      padding: 0 20px;
    }

    @media only screen and (max-width: 830px) {
      padding: 0 10px;
    }

    h2 {
      font-size: clamp(2.125rem, 1.557rem + 1.82vw, 3.075rem);
      max-width: 1024px;
      margin: 0;
      font-weight: 500;

      em {
        color: #ffdebf;
        font-style: normal;
      }

      @media only screen and (max-width: 830px) {
        font-size: clamp(1.125rem, 1.557rem + 1.82vw, 1.375rem);
        max-width: 365px;
      }
    }
  }
`;

export default function About(params) {
  return (
    <>
      <Container>
        <div>
          <h2>
            <em>Code Hives </em>Empowering beginner hackers, celebrating
            diversity. Join us for engaging events, meaningful coding, and{" "}
            <em>Git/GitHub </em>
            mastery. Create, learn, and grow with us
          </h2>
        </div>
      </Container>
    </>
  );
}
