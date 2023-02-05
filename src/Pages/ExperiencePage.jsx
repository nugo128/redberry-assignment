import React, { useEffect } from "react";
import CV from "../Components/CV";
import classes from "./Experience.module.css";
import { Link } from "react-router-dom";
import Line from "../Components/Line";
import SVG from "../Components/SVG";
import ExperienceForm from "../Components/ExperienceForm";
import { useState } from "react";
import ExperienceCV from "../Components/ExperienceCV";

function ExperiencePage() {
  let arr = [];
  const [input, setInput] = useState({});
  const [formCount, setFormCount] = useState(1);
  const [experienceData, setExperienceData] = useState({});
  const [keys, setKeys] = useState([]);

  const backClickHandler = () => {
    localStorage.clear();
  };
  const changeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    for (let i = 0; i < arr.length; i++) {
      if (input[`positionInput${i}`]) {
        localStorage.setItem(`positionInfo${i}`, input[`positionInput${i}`]);
        setExperienceData(localStorage.getItem(`positionInfo${i}`));
        console.log(experienceData);
      }
      if (input[`employer${i}`]) {
        localStorage.setItem(`employer${i}`, input[`employer${i}`]);
      }
      if (input[`startDate${i}`]) {
        localStorage.setItem(`startDate${i}`, input[`startDate${i}`]);
      }
      if (input[`endDate${i}`]) {
        localStorage.setItem(`endDate${i}`, input[`endDate${i}`]);
      }

      if (input[`description${i}`]) {
        localStorage.setItem(`description${i}`, input[`description${i}`]);
      }
    }
    setKeys(Object.keys(localStorage));
    console.log(keys);
  }, [input]);
  localStorage.setItem("i", formCount);
  const addComponent = () => {
    setFormCount(formCount + 1);
    localStorage.setItem("i", formCount);
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
          (arr = Array(Number(localStorage.getItem("i")))
            .fill(1)
            .map((_, index) => (
              <>
                <ExperienceForm
                  key={index}
                  index={index}
                  changeHandler={changeHandler}
                ></ExperienceForm>
              </>
            )))
        }
        <button onClick={addComponent} className={classes.btnadd}>
          მეტი გამოცდილების დამატება
        </button>
        <div className={classes.links}>
          <Link to={"/personal"} className={classes.backLink}>
            <span>უკან</span>
          </Link>
          <Link to={"/education"} className={classes.nextLink}>
            <span>შემდეგი</span>
          </Link>
        </div>
      </section>
      <div>
        <CV
          firstname={localStorage.getItem("inputedFirstname")}
          lastname={localStorage.getItem("inputedLastname")}
          image={localStorage.getItem("photo")}
          basicinfo={localStorage.getItem("basicinfo")}
          email={localStorage.getItem("email")}
          number={localStorage.getItem("number")}
          // data={Object.keys(localStorage)}
        ></CV>
        {
          (arr = Array(Number(localStorage.getItem("i")))
            .fill(1)
            .map((_, index) => (
              <>
                {
                  <ExperienceCV
                    position={localStorage.getItem(`positionInfo${index}`)}
                    employer={localStorage.getItem(`employer${index}`)}
                    startdate={localStorage.getItem(`startDate${index}`)}
                    enddate={localStorage.getItem(`endDate${index}`)}
                    description={localStorage.getItem(`description${index}`)}
                  ></ExperienceCV>
                }
              </>
            )))
        }
      </div>
    </main>
  );
}

export default ExperiencePage;
