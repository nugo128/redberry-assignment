import React, { useState, useEffect } from "react";
import CV from "../Components/CV";
import EducationCV from "../Components/EducationCV";
import ExperienceCV from "../Components/ExperienceCV";

function FinalResume(props) {
  console.log(props.postData.email);
  return (
    <div>
      <CV
        firstname={props.postData.name}
        lastname={props.postData.surname}
        image={props.postData.image}
        basicinfo={props.postData.about_me}
        email={props.postData.email}
        number={props.postData.phone_number}
      ></CV>
      {Array(Number(localStorage.getItem("i")))
        .fill(1)
        .map((_, index) => (
          <>
            {
              <ExperienceCV
                position={props.postData.experiences[index]?.position}
                employer={props.postData.experiences[index]?.employer}
                startdate={props.postData.experiences[index]?.start_date}
                enddate={props.postData.experiences[index]?.due_date}
                description={props.postData.experiences[index]?.description}
                index={index}
              ></ExperienceCV>
            }
          </>
        ))}
      {Array(Number(localStorage.getItem("j")))
        .fill(1)
        .map((_, index) => (
          <>
            {
              <EducationCV
                place={props.postData.educations[index]?.institute}
                degree={props.postData.educations[index]?.degree}
                finishDate={props.postData.educations[index]?.due_date}
                description={props.postData.educations[index]?.description}
                index={index}
              ></EducationCV>
            }
          </>
        ))}
    </div>
  );
}

export default FinalResume;
