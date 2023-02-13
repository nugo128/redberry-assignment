import React, { useState } from "react";
import CV from "../Components/CV";
import EducationCV from "../Components/EducationCV";
import ExperienceCV from "../Components/ExperienceCV";
import classes from "./FinalResume.module.css";
import star from "../images/star.png";
import SVG from "../Components/SVG";
import { Link } from "react-router-dom";

function FinalResume(props) {
  const [closed, setClosed] = useState(false);
  const closePopupHandler = () => {
    setClosed(true);
  };
  const backClickHandler = () => {
    localStorage.clear();
  };

  return (
    <main className={classes.finalResume}>
      <Link to={"/"} className={classes.svg} onClick={backClickHandler}>
        <SVG></SVG>
      </Link>
      {!closed && (
        <div className={classes.popup}>
          <p className={classes.close} onClick={closePopupHandler}>
            X
          </p>
          <p>რეზიუმე წარმატებით გაიგზავნა 🎉</p>
        </div>
      )}
      <div className={classes.cont}>
        <div className={classes.cvStar}>
          <div className={classes.cvCont}>
            <CV
              firstname={props.postData?.name}
              lastname={props.postData?.surname}
              image={`https://resume.redberryinternship.ge${props.postData?.image}`}
              basicinfo={
                props.postData?.about_me !== "null" && props.postData?.about_me
              }
              email={props.postData?.email}
              number={props.postData?.phone_number}
            ></CV>
          </div>
          {Array(Number(localStorage.getItem("i")))
            .fill(1)
            .map((_, index) => (
              <>
                {
                  <ExperienceCV
                    position={props.postData?.experiences[index]?.position}
                    employer={props.postData?.experiences[index]?.employer}
                    startdate={props.postData?.experiences[index]?.start_date}
                    enddate={props.postData?.experiences[index]?.due_date}
                    description={
                      props.postData?.experiences[index]?.description
                    }
                    index={index}
                  ></ExperienceCV>
                }
              </>
            ))}
          <div className={classes.line}></div>
          {Array(Number(localStorage.getItem("j")))
            .fill(1)
            .map((_, index) => (
              <>
                {
                  <EducationCV
                    place={props.postData?.educations[index]?.institute}
                    degree={props.postData?.educations[index]?.degree}
                    finishDate={props.postData?.educations[index]?.due_date}
                    description={props.postData?.educations[index]?.description}
                    index={index}
                  ></EducationCV>
                }
              </>
            ))}
        </div>
        <img className={classes.star} src={star} alt="" />
      </div>
    </main>
  );
}

export default FinalResume;
