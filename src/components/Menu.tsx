import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../App";
import sun from "../assets/sun.png";
import moon from "../assets/moon.jpg";
import havadurumu from "../assets/havadurumu.png";
import git from "../assets/git.png";
import gitw from "../assets/gwhite.png";

import { Container, Nav, Navbar } from "react-bootstrap";

export const NavbarMenu: React.FC = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    var element = document.getElementById("background");
    if (theme === true) {
      element?.classList.add("bg-secondary");
    } else {
      element?.classList.remove("bg-secondary");
    }
  }, [theme]);


  const navigate2 = () => {
    window.location.replace("https://github.com/uhuddurmus");
  };
  return (
    <>
      <Navbar bg={theme ? "dark" : "light"} className="bg-gray-800">
        <Container>
          <Navbar.Brand href="">
            <img alt="" src={havadurumu} height="54" />{" "}
            <span className={!theme ? "text-dark" : "text-light"}>Weather</span>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link onClick={toggleTheme}>
              <span className={!theme ? "text-dark" : "text-light"}>
                {theme ? (
                  <img
                    className=""
                    style={{ height: "25px" }}
                    src={moon}
                    alt="moon logo"
                  />
                ) : (
                  <img
                    className=""
                    style={{ height: "25px" }}
                    src={sun}
                    alt="sun logo"
                  />
                )}{" "}
                {theme ? "Dark Theme" : "Light Theme"}
              </span>
            </Nav.Link>

            <Nav.Link onClick={navigate2}>
              <span className={!theme ? "text-dark" : "text-light"}>
                {theme ? (
                  <img
                    className=""
                    style={{ height: "25px" }}
                    src={gitw}
                    alt="moon logo"
                  />
                ) : (
                  <img
                    className=""
                    style={{ height: "25px" }}
                    src={git}
                    alt="moon logo"
                  />
                )}{" "}
                {"Github"}
              </span>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
