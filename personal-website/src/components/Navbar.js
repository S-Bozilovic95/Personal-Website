import React from "react";

const Navbar = () => {
  const handleMenu = () => {
    let nav = document.querySelector(".navbar");
    nav.classList.toggle("show-menu");
    console.log(nav);
  };

  return (
    <section className="navbar" onClick={() => handleMenu()}>
      <div className="navbar__hamburger">
        <div className="navbar__hamburger__line one"></div>
        <div className="navbar__hamburger__line two"></div>
        <div className="navbar__hamburger__line three"></div>
      </div>

      <ul className="navbar__list">
        <li className="navbar__list__item">
          <a href="#"> Opt1</a>
        </li>
        <li className="navbar__list__item">
          <a href="#"> Opt1</a>
        </li>
        <li className="navbar__list__item">
          <a href="#"> Opt1</a>
        </li>
        <li className="navbar__list__item">
          <a href="#"> Opt1</a>
        </li>
        <li className="navbar__list__item">
          <a href="#"> Opt1</a>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
