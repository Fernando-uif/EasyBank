import { useEffect, useState } from "react";

import button from "../../sass/components/button.module.scss";
import logo from "../../assets/images/logo.svg";
import navBar from "../../sass/layout/navBar.module.scss";

export const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [changueMenu, setChangueMenu] = useState(false);

  const handleMenu = () => {
    setChangueMenu(!changueMenu);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth > 768 ? setIsVisible(false) : setIsVisible(true);
    });
    window.innerWidth > 768 ? setIsVisible(false) : setIsVisible(true);

    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth > 768) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      });
    };
  }, []);

  return (
    <nav className={navBar.nav}>
      {isVisible ? (
        <ul
          className={`${navBar["nav__menuMobil"]} ${
            !changueMenu && navBar["nav__menuMobilClose"]
          }`}
        >
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      ) : (
        <></>
      )}

      <section>
        <img src={logo} alt="logo.svg" />
      </section>

      {isVisible ? (
        <div className={navBar["nav__menu"]} onClick={handleMenu}>
          <span
            className={`${navBar["nav__lines"]} ${
              changueMenu && navBar["nav__actionLine"]
            }`}
          ></span>
        </div>
      ) : (
        <>
          <ul className={navBar["nav__options"]}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
          <button className={button.button}>Request Invite</button>
        </>
      )}
    </nav>
  );
};
