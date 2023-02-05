import React from "react";
import classes from "./ExperienceForm.module.css";

function ExperienceForm(props) {
  console.log(props.index);
  return (
    <form className={classes.form}>
      <div className={classes.position}>
        <label htmlFor="positionInput">თანამდებობა</label>
        <input
          name="positionInput"
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
          name={`employer`}
          type="text"
          onChange={props.changeHandler}
          placeholder="დამსაქმებელი"
          required
        />
        <p>მინუმუმ 2 სიმბოო</p>
      </div>
      <div className={classes.date}>
        <div className={classes.startdate}>
          <label htmlFor="startDate">დაწყების რიცხვი</label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            onChange={props.changeHandler}
          />
        </div>
        <div className={classes.enddate}>
          <label htmlFor="endDate">დამთავრების რიცხვი</label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            onChange={props.changeHandler}
          />
        </div>
      </div>

      <div className={classes.description}>
        <label htmlFor="description">აღწერა</label>
        <textarea
          name="description"
          id="description"
          onChange={props.changeHandler}
          placeholder="როლი თანამდებოდაზე და ზოგადი აღწერა"
        ></textarea>
      </div>
    </form>
  );
}

export default ExperienceForm;
