import React from "react";
import classes from "./StartingPage.module.css";
import logo2 from "../images/logo2.png";
import redberryLogo from "../images/redberry-logo.png";
import { Link } from "react-router-dom";

function StartingPage() {
  return (
    <div className={classes.main}>
      <img className={classes.redberryLogo} src={redberryLogo} alt="logo" />
      <div className={classes.line}></div>
      <img className={classes.logo2} src={logo2} alt="logo" />
      <Link to={"/personal"} className={classes.btn}>
        <p>რეზიუმეს დამატება</p>
      </Link>
    </div>
  );
}

export default StartingPage;
