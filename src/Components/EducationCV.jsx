import React from "react";
import classes from "./EducationCV.module.css";

function EducationCV(props) {
  return (
    <div className={classes.eduContainer}>
      {props.index == 0 &&
        (props.place ||
          props.degree ||
          props.finishDate ||
          props.description) && (
          <h2 className={classes.eduHeader}>განათლება</h2>
        )}

      <div className={classes.degreeAndDate}>
        <div className={classes.degreeContainer}>
          <p className={classes.place}>{props.place}</p>{" "}
          {props.place && <p>, &nbsp;</p>}
          <p className={classes.employer}>{props.degree}</p>
        </div>

        <p className={classes.date}>{props.finishDate}</p>
      </div>
      <p className={classes.description}>{props.description}</p>
    </div>
  );
}

export default EducationCV;
