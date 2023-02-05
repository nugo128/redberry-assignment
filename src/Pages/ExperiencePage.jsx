import React from "react";
import CV from "../Components/CV";
import classes from "./Experience.module.css";
import { Link } from "react-router-dom";
import Line from "../Components/Line";
import SVG from "../Components/SVG";
import ExperienceForm from "../Components/ExperienceForm";
import { useState } from "react";

function ExperiencePage() {
  let arr = [];
  const [input, setInput] = useState({});
  const [formCount, setFormCount] = useState(1);
  const backClickHandler = () => {
    localStorage.clear();
  };
  const changeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  };
  if (input.positionInput) {
    localStorage.setItem("positionInfo", input.positionInput);
  }
  if (input.employer) {
    localStorage.setItem("employer", input.employer);
  }
  if (input.startDate) {
    localStorage.setItem("startDate", input.startDate);
  }
  if (input.endDate) {
    localStorage.setItem("endDate", input.endDate);
  }
  if (input.description) {
    localStorage.setItem("description", input.description);
  }
  const addComponent = () => {
    setFormCount(formCount + 1);
    console.log(arr);
  };
  return (
    <main className={classes.main}>
      <section className={classes.formcontainer}>
        <section className={classes.header}>
          <Link to={"/"} className={classes.svg} onClick={backClickHandler}>
            <SVG></SVG>
          </Link>
          <div className={classes.pagename}>
            <h2>გამოცდილება</h2>
            <p>2/3</p>
          </div>
          <Line></Line>
        </section>
        {
          (arr = Array(formCount)
            .fill(1)
            .map((_, index) => (
              <ExperienceForm
                key={index}
                index={index}
                changeHandler={changeHandler}
              ></ExperienceForm>
            )))
        }
        <button onClick={addComponent}>rameee</button>
      </section>
      <CV></CV>
    </main>
  );
}

export default ExperiencePage;
