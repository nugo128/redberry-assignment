import React from "react";
import { useEffect, useState } from "react";

function CV(props) {
  return (
    <div>
      <p>{props.firstname}</p>
      <p>{props.lastname}</p>
    </div>
  );
}

export default CV;
