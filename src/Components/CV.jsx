import React from "react";
import classes from "./CV.module.css";
import { mailSVG, phoneSVG } from "./SVG";
import star from "../images/star.png";
import Line from "./Line";

function CV(props) {
  return (
    <div className={classes.maincontainer}>
      <div className={classes.cont2}>
        <div className={classes.cont5}>
          <div className={classes.cont3}>
            <div className={classes.cont4}>
              <div className={classes.firstlast}>
                {props.firstname ? (
                  <h2 className={classes.firstname}>{props.firstname}</h2>
                ) : (
                  ""
                )}
                <h2 className={classes.lastname}>{props.lastname}</h2>
              </div>
              {props.email && (
                <div className={classes.mail}>
                  <span>{mailSVG}</span>
                  <p>{props.email}</p>
                </div>
              )}
              {props.number && (
                <div className={classes.phone}>
                  <span>{phoneSVG}</span>
                  <p>{props.number}</p>
                </div>
              )}
              {props.basicinfo && (
                <h3 className={classes.aboutme}>ჩემ შესახებ</h3>
              )}
              <p className={classes.basicinfo}>{props.basicinfo}</p>
            </div>
            {props.image && (
              <img className={classes.img} src={props.image} alt="" />
            )}
          </div>
          {props.firstname && props.lastname && props.email && props.number && (
            <div className={classes.line}></div>
          )}
        </div>
        <img className={classes.star} src={star} alt="" />
      </div>
    </div>
  );
}

export default CV;
