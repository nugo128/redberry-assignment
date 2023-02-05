import React from "react";

function ExperienceCV(props) {
  return (
    <>
      <div>
        {(props.position ||
          props.employer ||
          props.startdate ||
          props.enddate ||
          props.description) && <h2>გამოცდილება</h2>}
        <p>{props.position}</p>
        <p>{props.employer}</p>
        <p>{props.startdate}</p>
        <p>{props.enddate}</p>
        <p>{props.description}</p>
      </div>
    </>
  );
}

export default ExperienceCV;
