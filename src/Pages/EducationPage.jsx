import React, { useState, useEffect } from "react";
import EducationForm from "../Components/EducationForm";
import classes from "./EducationPage.module.css";
import { Link } from "react-router-dom";
import Line from "../Components/Line";
import SVG from "../Components/SVG";

function EducationPage() {
  let arr = [];
  const [input, setInput] = useState({});
  const [formCount, setFormCount] = useState(Number(localStorage.getItem("j")));
  const [educationData, setEducationData] = useState({});
  const [keys, setKeys] = useState([]);

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
    for (let i = 0; i < arr.length; i++) {
      if (input[`place${i}`]) {
        localStorage.setItem(`place${i}`, input[`place${i}`]);
        // setExperienceData(localStorage.getItem(`positionInfo${i}`));
        // console.log(experienceData);
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
    setKeys(Object.keys(localStorage));
    console.log(keys);
  }, [input]);
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
            <p>3/3</p>
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
    </main>
  );
}

export default EducationPage;
