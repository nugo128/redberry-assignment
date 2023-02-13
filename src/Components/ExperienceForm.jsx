import React, { useState, useEffect } from "react";
import classes from "./ExperienceForm.module.css";
import invalid from "../images/invalid.png";

function ExperienceForm(props) {
  const [placeIsValid, setPlaceIsValid] = useState(false);

  const [focusedplace, setFocusedplace] = useState(
    localStorage.getItem(`positionInfo${props.index}`)
  );
  const [startDateIsValid, setStartDateIsValid] = useState(false);
  const [focusedStartDate, setFocusedStartDate] = useState(
    localStorage.getItem(`startDate${props.index}`)
  );
  const [endDateIsValid, setEndDateIsValid] = useState(false);
  const [focusedEndDate, setFocusedEndDate] = useState(
    localStorage.getItem(`endDate${props.index}`)
  );
  const [employerIsValid, setEmployerIsValid] = useState(false);
  const [focusedEmployer, setFocusEdemployer] = useState(
    localStorage.getItem(`employer${props.index}`)
  );
  const [descriptionIsValid, setDescriptionIsValid] = useState(false);
  const [focusedDescription, setFocusEdDescription] = useState(
    localStorage.getItem(`description${props.index}`)
  );

  const focusHandler = (e) => {
    console.log(e.target.value);
    setFocusedplace(true);
    setFocusEdemployer(true);
    setFocusedStartDate(true);
    setFocusedEndDate(true);
    setFocusEdDescription(true);
  };
  let place = localStorage.getItem(`positionInfo${props.index}`);
  let employer = localStorage.getItem(`employer${props.index}`);
  let startDate = localStorage.getItem(`startDate${props.index}`);
  let endDate = localStorage.getItem(`endDate${props.index}`);
  let description = localStorage.getItem(`description${props.index}`);

  useEffect(() => {
    setPlaceIsValid(place?.length > 1);
    setEmployerIsValid(employer?.length > 1);
    setStartDateIsValid(startDate);
    setEndDateIsValid(endDate);
    setDescriptionIsValid(description?.length > 1);
    console.log(props.inp);
  }, [
    place,
    employer,
    startDate,
    endDate,
    description,
    focusedEmployer,
    props.inp,
  ]);
  // console.log(placeIsValid);

  return (
    <form className={classes.form}>
      <div className={classes.position}>
        <img
          src={invalid}
          className={
            !focusedplace
              ? classes.validPlaceLogo
              : !placeIsValid
              ? classes.invalidPlaceLogo
              : classes.validPlaceLogo
          }
        />
        <label
          htmlFor="positionInput"
          className={
            !focusedplace
              ? ""
              : placeIsValid
              ? classes.validPlaceLabel
              : classes.invalidPlaceLabel
          }
        >
          თანამდებობა
        </label>
        <input
          name={`positionInput${props.index}`}
          type="text"
          onChange={props.changeHandler}
          placeholder="დეველოპერი, დიზაინერი, ა.შ"
          onFocus={focusHandler}
          onBlur={focusHandler}
          required
          Value={localStorage.getItem(`positionInfo${props.index}`)}
          className={
            !focusedplace
              ? ""
              : placeIsValid
              ? classes.validPlace
              : classes.invalidPlace
          }
        />
        <p>მინუმუმ 2 სიმბოლო</p>
      </div>
      <div className={classes.employer}>
        <img
          src={invalid}
          className={
            !focusedEmployer
              ? classes.validEmployerLogo
              : !employerIsValid
              ? classes.invalidEmployerLogo
              : classes.validEmployerLogo
          }
        />
        <label
          htmlFor="employerInput"
          className={
            !focusedEmployer
              ? ""
              : employerIsValid
              ? classes.validEmployerLabel
              : classes.invalidEmployerLabel
          }
        >
          დამსაქმებელი
        </label>
        <input
          name={`employer${props.index}`}
          type="text"
          onChange={props.changeHandler}
          placeholder="დამსაქმებელი"
          onFocus={focusHandler}
          onBlur={focusHandler}
          required
          Value={employer}
          className={
            !focusedEmployer
              ? ""
              : employerIsValid
              ? classes.validEmployer
              : classes.invalidEmployer
          }
        />
        {placeIsValid && <p>ერორიაააააააა</p>}
        <p>მინუმუმ 2 სიმბოო</p>
      </div>
      <div className={classes.date}>
        <div className={classes.startdate}>
          <img
            src={invalid}
            className={
              !focusedStartDate
                ? classes.validEmployerLogo
                : !startDateIsValid
                ? classes.invalidStartDateLogo
                : classes.validEmployerLogo
            }
          />
          <label
            htmlFor="startDate"
            className={
              !focusedEmployer
                ? ""
                : startDateIsValid
                ? classes.validStartDateLabel
                : classes.invalidStartDateLabel
            }
          >
            დაწყების რიცხვი
          </label>
          <input
            type="date"
            name={`startDate${props.index}`}
            id="startDate"
            onChange={props.changeHandler}
            onFocus={focusHandler}
            onBlur={focusHandler}
            className={
              !focusedEmployer
                ? ""
                : startDateIsValid
                ? classes.validStartDate
                : classes.invalidStartDate
            }
          />
        </div>
        <img
          src={invalid}
          className={
            !focusedEndDate
              ? classes.validEmployerLogo
              : !endDateIsValid
              ? classes.invalidEndDateLogo
              : classes.validEmployerLogo
          }
        />
        <div className={classes.enddate}>
          <label
            htmlFor="endDate"
            className={
              !focusedEmployer
                ? ""
                : endDateIsValid
                ? classes.validStartDateLabel
                : classes.invalidStartDateLabel
            }
          >
            დამთავრების რიცხვი
          </label>
          <input
            type="date"
            name={`endDate${props.index}`}
            id="endDate"
            onChange={props.changeHandler}
            onFocus={focusHandler}
            onBlur={focusHandler}
            Value={endDate}
            className={
              !focusedEmployer
                ? ""
                : endDateIsValid
                ? classes.validStartDate
                : classes.invalidStartDate
            }
          />
        </div>
      </div>

      <div className={classes.description}>
        <img
          src={invalid}
          className={
            !focusedDescription
              ? classes.validEmployerLogo
              : !descriptionIsValid
              ? classes.invalidDescriptionLogo
              : classes.validEmployerLogo
          }
        />
        <label
          htmlFor="description"
          className={
            !focusedEmployer
              ? ""
              : descriptionIsValid
              ? classes.validStartDateLabel
              : classes.invalidStartDateLabel
          }
        >
          აღწერა
        </label>
        <textarea
          name={`description${props.index}`}
          id="description"
          onChange={props.changeHandler}
          placeholder="როლი თანამდებოდაზე და ზოგადი აღწერა"
          onFocus={focusHandler}
          onBlur={focusHandler}
          Value={description}
          className={
            !focusedEmployer
              ? ""
              : descriptionIsValid
              ? classes.validDescription
              : classes.invalidDescription
          }
        ></textarea>
      </div>
      <div className={classes.line}></div>
    </form>
  );
}

export default ExperienceForm;
