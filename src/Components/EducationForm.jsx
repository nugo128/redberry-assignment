import React, { useEffect } from "react";
import classes from "./EducationForm.module.css";
import { useState } from "react";
import Select from "react-select";
import invalid from "../images/invalid.png";

function EducationForm(props) {
  const [places, setPlaces] = useState([]);
  const [showChoose, setShowChoose] = useState(true);
  const [placeIsValid, setPlaceIsValid] = useState(false);
  const [focusedplace, setFocusedplace] = useState(
    localStorage.getItem(`place${props.index}`)
  );
  const [degreeIsValid, setDegreeIsValid] = useState(false);
  const [focusedDegree, setFocusedDegree] = useState(
    localStorage.getItem(`degree${props.index}`)
  );
  const [fDateIsValid, setFDateIsValid] = useState(false);
  const [focusedFDate, setFocusedFDate] = useState(
    localStorage.getItem(`finishDate${props.index}`)
  );
  const [educationDescriptionIsValid, setEducationDescriptionIsValid] =
    useState(false);
  const [focusedeEucationDescription, setFocusEdeducationDescription] =
    useState(localStorage.getItem(`educationDescription${props.index}`));

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
  const focusHandler = () => {
    setFocusedDegree(true);
    setFocusEdeducationDescription(true);
    setFocusedplace(true);
    setFocusedFDate(true);
  };
  let place = localStorage.getItem(`place${props.index}`);
  let degree = localStorage.getItem(`degree${props.index}`);
  let finishedDate = localStorage.getItem(`finishDate${props.index}`);
  let descr = localStorage.getItem(`educationDescription${props.index}`);

  useEffect(() => {
    setPlaceIsValid(place?.length >= 2);
    setDegreeIsValid(degree);
    setFDateIsValid(finishedDate);
    setEducationDescriptionIsValid(descr?.length > 1);
  }, [place, degree, finishedDate, descr]);
  console.log(educationDescriptionIsValid);

  return (
    <form className={classes.form}>
      <div className={classes.place}>
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
          htmlFor=""
          className={
            !focusedplace
              ? ""
              : placeIsValid
              ? classes.validPlaceLabel
              : classes.invalidPlaceLabel
          }
        >
          სასწავლებელი
        </label>
        <input
          type="text"
          placeholder="სასწავლებელი"
          name={`place${props.index}`}
          onChange={props.changeHandler}
          onFocus={focusHandler}
          onBlur={focusHandler}
          required
          Value={place}
          className={
            !focusedplace
              ? ""
              : placeIsValid
              ? classes.validPlace
              : classes.invalidPlace
          }
        />
        <p>მინიმუმ 2 სიმბოლო</p>
      </div>
      <div className={classes.degreeAndDate}>
        <div className={classes.degree}>
          <img
            src={invalid}
            className={
              !focusedDegree
                ? classes.validDegreeLogo
                : !degreeIsValid
                ? classes.invalidDegreeLogo
                : classes.validDegreeLogo
            }
          />
          <label
            htmlFor=""
            className={
              !focusedDegree
                ? ""
                : degreeIsValid
                ? classes.validDegreeLabel
                : classes.invalidDegreeLabel
            }
          >
            ხარისხი
          </label>
          <select
            name={`degree${props.index}`}
            id=""
            onChange={props.changeHandler}
            onClick={() => {
              setShowChoose(false);
            }}
            onFocus={focusHandler}
            onBlur={focusHandler}
            required
            Value={degree}
            className={
              !focusedDegree
                ? ""
                : degreeIsValid
                ? classes.validDegree
                : classes.invalidDegree
            }
          >
            {showChoose && <option value="">აირჩიეთ ხარისხი</option>}
            {places.map((option) => (
              <option key={option.id} id={option.id} value={option.title}>
                {option.title}
              </option>
            ))}
          </select>
        </div>

        <div className={classes.date}>
          <img
            src={invalid}
            className={
              !focusedFDate
                ? classes.validDateLogo
                : !fDateIsValid
                ? classes.invalidDateLogo
                : classes.validDateLogo
            }
          />
          <label
            htmlFor="finishDate"
            className={
              !focusedFDate
                ? ""
                : fDateIsValid
                ? classes.validDateLabel
                : classes.invalidDateLabel
            }
          >
            დამთავრების რიცხვი
          </label>
          <input
            type="date"
            name={`finishDate${props.index}`}
            id="finishDate"
            onChange={props.changeHandler}
            onFocus={focusHandler}
            onBlur={focusHandler}
            required
            Value={finishedDate}
            className={
              !focusedFDate
                ? ""
                : fDateIsValid
                ? classes.validDate
                : classes.invalidDate
            }
          />
        </div>
      </div>
      <div className={classes.eduDesc}>
        <img
          src={invalid}
          className={
            !focusedeEucationDescription
              ? classes.validddescLogo
              : !educationDescriptionIsValid
              ? classes.invalidddescLogo
              : classes.validddescLogo
          }
        />
        <label
          htmlFor="educationDescription"
          className={
            !focusedeEucationDescription
              ? ""
              : educationDescriptionIsValid
              ? classes.validDescLabel
              : classes.invalidDescLabel
          }
        >
          აღწერა
        </label>
        <textarea
          name={`educationDescription${props.index}`}
          id="educationDescription"
          onChange={props.changeHandler}
          onFocus={focusHandler}
          onBlur={focusHandler}
          required
          Value={descr}
          className={
            !focusedeEucationDescription
              ? ""
              : educationDescriptionIsValid
              ? classes.validdesc
              : classes.invaliddesc
          }
        ></textarea>
      </div>
      <div className={classes.line}></div>
    </form>
  );
}

export default EducationForm;
