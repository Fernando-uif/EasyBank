import { useEffect, useState } from "react";

import button from "../../sass/components/button.module.scss";
import logo from "../../assets/images/logo.svg";
import menuIcon from "../../assets/images/icon-hamburger.svg";
import navBar from "../../sass/layout/navBar.module.scss";

export const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);
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
      <section>
        <img src={logo} alt="logo.svg" />
      </section>
      {isVisible ? (
        <div className={navBar["nav__menu"]}>
          <img src={menuIcon} alt="icon" />
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
