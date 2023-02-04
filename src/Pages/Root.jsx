import React from "react";
import { Outlet } from "react-router-dom";
import CV from "../Components/CV";

function Root() {
  return (
    <>
      <main>
        <Outlet></Outlet>
        <CV></CV>
      </main>
    </>
  );
}

export default Root;
