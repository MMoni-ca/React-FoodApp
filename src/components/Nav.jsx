import React from "react";
import pizza from "../../assets/pizza.jpg";
import style from "./nav.module.css";
function Nav() {
  return (
    <div className={style.nav}>
      <img src={pizza} className={style.img} />
      Food App
    </div>
  );
}

export default Nav;
