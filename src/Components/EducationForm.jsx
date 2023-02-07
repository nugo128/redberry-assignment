import React, { useEffect } from "react";
import classes from "./EducationForm.module.css";
import { useState } from "react";

function EducationForm(props) {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://resume.redberryinternship.ge/api/degrees"
      );
      const data = await response.json();
      setPlaces(data);
    };
    fetchData();
  }, []);
  console.log(places);

  return (
    <form className={classes.form}>
      <div className={classes.place}>
        <label htmlFor="">სასწავლებელი</label>
        <input
          type="text"
          placeholder="სასწავლებელი"
          name={`place${props.index}`}
          onChange={props.changeHandler}
        />
        <p>მინიმუმ 2 სიმბოლო</p>
      </div>
      <div className={classes.degreeAndDate}>
        <div className={classes.degree}>
          <label htmlFor="">ხარისხი</label>
          <select
            name={`degree${props.index}`}
            id=""
            onChange={props.changeHandler}
            className={classes.select}
          >
            <option value="">აირჩიეთ ხარისხი</option>
            {places.map((option) => (
              <option key={option.id} value={option.title}>
                {option.title}
              </option>
            ))}
          </select>
        </div>

        <div className={classes.date}>
          <label htmlFor="finishDate">დამთავრების რიცხვი</label>
          <input
            type="date"
            name={`finishDate${props.index}`}
            id="finishDate"
            onChange={props.changeHandler}
          />
        </div>
      </div>
      <div className={classes.eduDesc}>
        <label htmlFor="educationDescription">აღწერა</label>
        <textarea
          name={`educationDescription${props.index}`}
          id="educationDescription"
          onChange={props.changeHandler}
        ></textarea>
      </div>
      <div className={classes.line}></div>
    </form>
  );
}

export default EducationForm;
