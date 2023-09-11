import React from "react";
import styled from "styled-components";
import Corner from "./Corner";

const Header = styled.div`
  width: 100%;
  position: fixed;
  z-index: 99;

  @media only screen and (max-width: 1045px) {
    height: 60px;
    background: #e86927;
    top: 0;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: auto;
  max-width: 1800px;
  padding: 0 40px;

  @media only screen and (max-width: 1045px) {
    justify-content: space-between;
    padding: 0 20px;
  }
  @media only screen and (max-width: 830px) {
    padding: 0 10px;
  }

  &::before {
    content: "";
    display: block;
    width: 500vw;
    height: 10px;
    position: absolute;
    top: -10px;
    left: -100vw;
    background-color: #e86927;

    @media only screen and (max-width: 1045px) {
      content: none;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  background: #e86927;
  border-radius: 0 0 30px;
  padding: 12px 30px 12px 15px;
  align-items: center;
  width: fit-content;
  gap: 10px;
  height: 80px;

  @media only screen and (max-width: 1045px) {
    height: 60px;
  }

  p {
    padding: 0;
    margin: 0;
    font-size: 25px;
    font-weight: 600;
    letter-spacing: 2px;
    color: #1f1f1f;
  }
`;

const MobileMenu = styled.div`
  display: none;
  border-radius: 20px;
  padding: 7px 10px;
  margin: 0 10px 0 auto;
  border: 2px solid #fa1919;
  background-color: #fa191987;
  color: white;
  font-size: 18px;
  font-weight: 500;
  translate: 0 3px;
  transition: 0.3s;

  @media only screen and (max-width: 1045px) {
    display: block;
  }
`;

const Navmenu = styled.div`
  background-color: transparent;
  padding: 0 10px 0 50px;
  translate: -50px 0;
  border-radius: 0 0 40px 0;
  height: 80px;
  display: flex;
  align-items: center;
  transition: 0.3s;

  @media only screen and (max-width: 1045px) {
    /* width: calc(100% - 40px); */
    opacity: 0;
    /* visibility: hidden; */
    background-color: #f13e1f;
    position: absolute;
    top: 60px;
    left: 20px;
    padding: 0;
    translate: 0;
    border-radius: 30px 0 30px 30px;
    height: auto;
    width: calc(100% - 20px);
    left: 10px;
    z-index: 99;
  }

  ul {
    display: flex;
    align-items: center;
    padding: 0 25px;
    border-radius: 30px;
    background-color: hsl(20.52deg 80.75% 53.14% / 27%);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    margin: 0 0 0 10px;
    list-style: none;

    @media only screen and (max-width: 1045px) {
      flex-direction: column;
      border-radius: 30px;
      background-color: transparent;
      box-shadow: none;
      -webkit-backdrop-filter: none;
      backdrop-filter: none;
      height: 50vh;
      width: 100%;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }

    li {
      @media only screen and (max-width: 1045px) {
        width: 95%;
        font-size: 32px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        transition: 0.3s;
        display: block;
        text-align: inherit;
      }
    }

    a {
      display: block;
      padding: 20px 15px;
      cursor: pointer;
      text-decoration: none;
      color: white;
      line-height: 18px;
      font-size: 21px;
      font-weight: 300;
      letter-spacing: 1px;

      @media only screen and (max-width: 1045px) {
        padding: 15px 0;
        font-weight: 400;
        color: white;
        font-size: 30px;
      }
    }

    .social {
      padding-left: 10px;

      a {
        padding: 18px 5px;
        transition: 0.3s;

        svg {
          display: block;
          width: 22px;
          height: 22px;
        }
      }
    }
  }
`;

const MobileSocial = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  height: 55px;
  margin: 5px 0 0;
  padding: 0 10px;
  border-radius: 20px 20px 0 0;
  background-color: transparent;
  transition: 0.2s;

  @media only screen and (max-width: 1045px) {
    display: flex;
  }

  ul {
    gap: 10px;
    border: 2px solid #1e1e1e;
    padding: 5px 12px;
    border-radius: 30px;
    transition: 0.3s;
    flex-wrap: nowrap;
    display: flex;
    list-style: none;
    width: 45px;
    height: 45px;
    align-items: center;
    justify-content: center;
    transition: 0.2s;

    li {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
      transition: 0.3s;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        cursor: pointer;

        svg {
          display: block;
          width: 100%;
          fill: #fff;
        }
      }
    }
  }
`;

const Theme = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: hsl(20.52deg 80.75% 53.14% / 27%);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0 14px 0 auto;
  flex-shrink: 0;

  @media only screen and (max-width: 1045px) {
    display: none;
  }

  a {
    display: flex;
    justify-content: center;
    transition: 0.3s;
  }

  svg {
    width: 55%;
    display: block;
    height: 42;
  }
`;

export default function Navbar() {

  function MenuToggle(menuBtn) {
    const menu = document.getElementById("NavMenu");
    const corner = document.getElementById("SocialUl").nextElementSibling;
    const socialMain = document.getElementById("SocialUl").parentElement;
    const socialBtn = document.getElementById("SocialUl");

    if (menu) {
      const currentOpacity = parseFloat(window.getComputedStyle(menu).opacity);

      if (currentOpacity === 0) {
        menu.style.opacity = 1;
        corner.style.opacity = 1;
        socialMain.style.backgroundColor = "#f13e1f";
        socialBtn.style.border = "2px solid #1e1e1e00";
        menuBtn.style.border = "2px solid #1e1e1e";
        menuBtn.style.backgroundColor = "transparent";
        menuBtn.textContent = "Close";

      } else {
        menu.style.opacity = 0;
        corner.style.opacity = 0;
        socialMain.style.backgroundColor = "transparent";
        socialBtn.style.border = "2px solid #1e1e1e";
        menuBtn.style.backgroundColor = "#f13e1f";
        menuBtn.style.border = "2px solid #fa1919";
        menuBtn.textContent = "Menu";
      }
    }
  }

  return (
    <>
      <Header>
        <Container>
          <Logo>
            <Corner />
            <LogoContainer>
              <img
                src="/images/logo.png"
                alt="Landscape picture"
                width={800}
                height={500}
              />
              <p>C⬡DEHIVES</p>
            </LogoContainer>
            <Corner style={{ top: 0, left: "100%" }} />
          </Logo>
          <MobileMenu onClick={(el) => MenuToggle(el.target)}>Menu</MobileMenu>
          <Navmenu id="NavMenu">
            <ul>
              <li>
                <a href="/">
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Events</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Team</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>FAQs</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </Navmenu>
          <MobileSocial>
            <ul id="SocialUl">
              <li>
                <a
                  href="/"
                  target="_blank"
                  aria-label="instagram"
                  rel="noreferrer"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
                  </svg>
                </a>
              </li>
            </ul>
            <Corner
              id="SocialCorner"
              style={{
                bottom: 0,
                top: "25px",
                left: "-29px",
                transform: "rotate(180deg)",
                opacity: 0,
                transition: "0.2s",
              }}
              fillColor="#f13e1f"
            />
          </MobileSocial>
          <Theme>
            <a href="*" target="_blank" aria-label="instagram" rel="noreferrer">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#d6c8c8"
              >
                <title>Instagram</title>
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
              </svg>
            </a>
          </Theme>
        </Container>
      </Header>
    </>
  );
}
