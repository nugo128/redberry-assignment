import React from "react";
import classes from "./ExperienceCV.module.css";

function ExperienceCV(props) {
  console.log(props.index);
  return (
    <>
      <div className={classes.expContainer}>
        {props.index == 0 &&
          (props.position ||
            props.employer ||
            props.startdate ||
            props.enddate ||
            props.description) && (
            <h2 className={classes.expHeader}>გამოცდილება</h2>
          )}
        <div className={classes.expAndDates}>
          <div className={classes.positionContainer}>
            <p className={classes.position}>{props.position}</p>{" "}
            {props.employer && <p>, &nbsp;</p>}
            <p className={classes.employer}>{props.employer}</p>
          </div>
          <div className={classes.dates}>
            <p className={classes.startdate}>{props.startdate}</p>{" "}
            {props.enddate && <p>&nbsp; - &nbsp;</p>}
            <p className={classes.enddate}>{props.enddate}</p>
          </div>
        </div>
        <p className={classes.description}>{props.description}</p>
      </div>
    </>
  );
}

export default ExperienceCV;
