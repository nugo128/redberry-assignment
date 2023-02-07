import React from "react";
import classes from "./ExperienceForm.module.css";

function ExperienceForm(props) {
  console.log(props.index);
  return (
    <form className={classes.form}>
      <div className={classes.position}>
        <label htmlFor="positionInput">თანამდებობა</label>
        <input
          name={`positionInput${props.index}`}
          type="text"
          onChange={props.changeHandler}
          placeholder="დეველოპერი, დიზაინერი, ა.შ"
          required
        />
        <p>მინუმუმ 2 სიმბოლო</p>
      </div>
      <div className={classes.employer}>
        <label htmlFor="employerInput">დამსაქმებელი</label>
        <input
          name={`employer${props.index}`}
          type="text"
          onChange={props.changeHandler}
          placeholder="დამსაქმებელი"
          value={localStorage.getItem(`employer${props.index}`)}
          required
        />
        <p>მინუმუმ 2 სიმბოო</p>
      </div>
      <div className={classes.date}>
        <div className={classes.startdate}>
          <label htmlFor="startDate">დაწყების რიცხვი</label>
          <input
            type="date"
            name={`startDate${props.index}`}
            id="startDate"
            onChange={props.changeHandler}
          />
        </div>
        <div className={classes.enddate}>
          <label htmlFor="endDate">დამთავრების რიცხვი</label>
          <input
            type="date"
            name={`endDate${props.index}`}
            id="endDate"
            onChange={props.changeHandler}
          />
        </div>
      </div>

      <div className={classes.description}>
        <label htmlFor="description">აღწერა</label>
        <textarea
          name={`description${props.index}`}
          id="description"
          onChange={props.changeHandler}
          placeholder="როლი თანამდებოდაზე და ზოგადი აღწერა"
        ></textarea>
      </div>
      <div className={classes.line}></div>
    </form>
  );
}

export default ExperienceForm;
