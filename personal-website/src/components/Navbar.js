import React from "react";

const Navbar = () => {
  const handleMenu = () => {
    let nav = document.querySelector(".navbar");
    nav.classList.toggle("show-menu");
  };

  return (
    <section className="navbar">
      <div className="navbar__hamburger" onClick={() => handleMenu()}>
        <div className="navbar__hamburger__line one"></div>
        <div className="navbar__hamburger__line two"></div>
        <div className="navbar__hamburger__line three"></div>
      </div>

      <div className="navbar__box">
        <ul className="navbar__box__list">
          <li className="navbar__box__list__item">
            <a href="#"> Home</a>
          </li>
          <li className="navbar__box__list__item">
            <a href="#"> About me</a>
          </li>
          <li className="navbar__box__list__item">
            <a href="#"> Skills</a>
          </li>
          <li className="navbar__box__list__item">
            <a href="#"> Projects</a>
          </li>
          <li className="navbar__box__list__item">
            <a href="#"> Contact</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
