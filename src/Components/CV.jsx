import React from "react";
import classes from "./CV.module.css";
import { mailSVG, phoneSVG } from "./SVG";

function CV(props) {
  return (
    <div className={classes.maincontainer}>
      <div>
        <div className={classes.firstlast}>
          <h2 className={classes.firstname}>{props.firstname}</h2>
          <h2 className={classes.lastname}>{props.lastname}</h2>
        </div>
        <div className={classes.mail}>
          <span>{mailSVG}</span>
          <p>{props.email}</p>
        </div>
        <div className={classes.phone}>
          <span>{phoneSVG}</span>
          <p>{props.number}</p>
        </div>
        <h3 className={classes.aboutme}>ჩემ შესახებ</h3>
        <p className={classes.basicinfo}>{props.basicinfo}</p>
      </div>
      {props.image && <img className={classes.img} src={props.image} alt="" />}
    </div>
  );
}

export default CV;
