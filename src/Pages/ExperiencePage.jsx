import React, { useEffect } from "react";
import CV from "../Components/CV";
import classes from "./Experience.module.css";
import { Link } from "react-router-dom";
import Line from "../Components/Line";
import SVG from "../Components/SVG";
import ExperienceForm from "../Components/ExperienceForm";
import { useState } from "react";
import ExperienceCV from "../Components/ExperienceCV";
import star from "../images/star.png";
import EducationCV from "../Components/EducationCV";

function ExperiencePage() {
  let arr = [];
  let arr2 = [];
  const [input, setInput] = useState({});
  const [formCount, setFormCount] = useState(Number(localStorage.getItem("i")));
  const [experienceData, setExperienceData] = useState({});
  const [keys, setKeys] = useState([]);

  if (!Number(localStorage.getItem("i"))) {
    setFormCount(1);
  }

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
        // setExperienceData(localStorage.getItem(`positionInfo${i}`));
        // console.log(experienceData);
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
            <p>
              {1 + Number(localStorage.getItem("i"))}/
              {2 + Number(localStorage.getItem("i"))}
            </p>
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
      <div className="cv-container">
        <div>
          <CV
            firstname={localStorage.getItem("inputedFirstname")}
            lastname={localStorage.getItem("inputedLastname")}
            image={localStorage.getItem("photo")}
            basicinfo={localStorage.getItem("basicinfo")}
            email={localStorage.getItem("email")}
            number={localStorage.getItem("number")}
            data={Object.keys(localStorage)}
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
                      index={index}
                    ></ExperienceCV>
                  }
                </>
              )))
          }
          {
            (arr2 = Array(Number(localStorage.getItem("j")))
              .fill(1)
              .map((_, index) => (
                <>
                  {
                    <EducationCV
                      place={localStorage.getItem(`place${index}`)}
                      degree={localStorage.getItem(`degree${index}`)}
                      finishDate={localStorage.getItem(`finishDate${index}`)}
                      description={localStorage.getItem(
                        `educationDescription${index}`
                      )}
                      index={index}
                    ></EducationCV>
                  }
                </>
              )))
          }
        </div>
        <img className={classes.star} src={star} alt="" />
      </div>
    </main>
  );
}

export default ExperiencePage;
