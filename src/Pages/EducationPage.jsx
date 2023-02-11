import React, { useState, useEffect } from "react";
import EducationForm from "../Components/EducationForm";
import classes from "./EducationPage.module.css";
import { Link } from "react-router-dom";
import Line from "../Components/Line";
import SVG from "../Components/SVG";
import CV from "../Components/CV";
import ExperienceCV from "../Components/ExperienceCV";
import star from "../images/star.png";
import EducationCV from "../Components/EducationCV";

function EducationPage() {
  let arr = [];
  let arr2 = [];
  const [input, setInput] = useState({});
  const [formCount, setFormCount] = useState(Number(localStorage.getItem("j")));
  const [formValid, setFormIsValid] = useState(false);

  if (!Number(localStorage.getItem("j"))) {
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
    for (let i = 0; i < formCount; i++) {
      if (input[`place${i}`]) {
        localStorage.setItem(`place${i}`, input[`place${i}`]);
      }
      if (input[`degree${i}`]) {
        localStorage.setItem(`degree${i}`, input[`degree${i}`]);
      }

      if (input[`finishDate${i}`]) {
        localStorage.setItem(`finishDate${i}`, input[`finishDate${i}`]);
      }

      if (input[`educationDescription${i}`]) {
        localStorage.setItem(
          `educationDescription${i}`,
          input[`educationDescription${i}`]
        );
      }
    }
    let a = Array(formCount + 1).fill(true);
    for (let i = 0; i < formCount; i++) {
      a[i] = Boolean(
        localStorage.getItem(`place${i}`)?.length >= 2 &&
          localStorage.getItem(`degree${i}`) &&
          localStorage.getItem(`finishDate${i}`) &&
          localStorage.getItem(`educationDescription${i}`)?.length > 1
      );
      if (i >= 1) {
        if (
          !localStorage.getItem(`place${i}`) &&
          !localStorage.getItem(`degree${i}`) &&
          !localStorage.getItem(`finishDate${i}`) &&
          !localStorage.getItem(`educationDescription${i}`)
        ) {
          a[i] = true;
        }
      }
    }

    // const allTrue = arr.every((elem) => elem === true);
    setFormIsValid(a.every((elem) => elem === true));
    // console.log(formValid);
  }, [input, arr, arr2, formCount]);
  localStorage.setItem("j", formCount);
  const addComponent = () => {
    setFormCount(formCount + 1);
    localStorage.setItem("j", formCount);
  };
  return (
    <main className={classes.main}>
      <section className={classes.formcontainer}>
        <section className={classes.header}>
          <Link to={"/"} className={classes.svg} onClick={backClickHandler}>
            <SVG></SVG>
          </Link>
          <div className={classes.pagename}>
            <h2>განათლება</h2>
            <p>
              {Number(localStorage.getItem("i")) + formCount}/
              {Number(localStorage.getItem("i")) + formCount + 1}
            </p>
          </div>
          <Line></Line>
        </section>
        {
          (arr = Array(Number(localStorage.getItem("j")))
            .fill(1)
            .map((_, index) => (
              <>
                <EducationForm
                  key={index}
                  index={index}
                  changeHandler={changeHandler}
                ></EducationForm>
              </>
            )))
        }

        <button onClick={addComponent} className={classes.btnadd}>
          მეტი სასწავლებლის დამატება
        </button>
        <div className={classes.links}>
          <Link to={"/experience"} className={classes.backLink}>
            <span>უკან</span>
          </Link>
          {formValid ? (
            <Link to={"/final-resume"} className={classes.nextLink}>
              <span>დასრულება</span>
            </Link>
          ) : (
            <button className={classes.nextLink}>
              <span>დასრულება</span>
            </button>
          )}
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
                      place={
                        input[`place${index}`]?.length > 0
                          ? input[`place${index}`]
                          : localStorage.getItem(`place${index}`)
                      }
                      degree={
                        input[`degree${index}`]?.length > 0
                          ? input[`degree${index}`]
                          : localStorage.getItem(`degree${index}`)
                      }
                      finishDate={
                        input[`finishDate${index}`]?.length > 0
                          ? input[`finishDate${index}`]
                          : localStorage.getItem(`finishDate${index}`)
                      }
                      description={
                        input[`educationDescription${index}`]?.length > 0
                          ? input[`educationDescription${index}`]
                          : localStorage.getItem(`educationDescription${index}`)
                      }
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

export default EducationPage;
