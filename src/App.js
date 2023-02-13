import StartingPage from "./Pages/StartingPage";
import { RouterProvider, createBrowserRouter, json } from "react-router-dom";
import EducationPage from "./Pages/EducationPage";
import ExperiencePage from "./Pages/ExperiencePage";
import FinalResume from "./Pages/FinalResume";
import PersonalPage from "./Pages/PersonalPage";
import { useEffect, useState } from "react";
import axios from "axios";

const dataChangeHandler = (event) => {
  console.log(event);
};

function App() {
  const [postData, setPostData] = useState();
  let inputedMail = localStorage.getItem("email");
  let inputedFName = localStorage.getItem("inputedFirstname");
  let inputedLName = localStorage.getItem("inputedLastname");
  let inputedPhoto = localStorage.getItem("photo");
  let inputedNumber = localStorage.getItem("number");
  let expCount = Number(localStorage.getItem("i"));
  let eduCount = Number(localStorage.getItem("j"));

  const formData = new FormData();

  for (let i = 0; i < expCount; i++) {
    let position = localStorage.getItem(`positionInfo${i}`);
    let employer = localStorage.getItem(`employer${i}`);
    let start_date = localStorage.getItem(`startDate${i}`);
    let due_date = localStorage.getItem(`endDate${i}`);
    let description = localStorage.getItem(`description${i}`);
    formData.append(`experiences[${i}][position]`, position?.toString());
    formData.append(`experiences[${i}][employer]`, employer?.toString());
    formData.append(`experiences[${i}][start_date]`, start_date?.toString());
    formData.append(`experiences[${i}][due_date]`, due_date?.toString());
    formData.append(`experiences[${i}][description]`, description?.toString());
  }
  for (let i = 0; i < eduCount; i++) {
    let institute = localStorage.getItem(`place${i}`);
    let degree = localStorage.getItem(`degree${i}`);
    let due_date = localStorage.getItem(`finishDate${i}`);
    let description = localStorage.getItem(`educationDescription${i}`);

    formData.append(`educations[${i}][institute]`, institute?.toString());
    // formData.append(`educations[${i}][degree]`, degree.toString());
    formData.append(`educations[${i}][degree_id]`, `${i + 1}`);
    formData.append(`educations[${i}][due_date]`, due_date?.toString());
    formData.append(`educations[${i}][description]`, description?.toString());
  }

  let num = inputedNumber?.replace(/\s/g, "");
  function dataURLtoFile(dataurl, filename) {
    if (!dataurl) {
      return null;
    }

    const arr = dataurl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const blob = new Blob([u8arr], { type: mime });
    return new File([blob], filename);
  }

  const file = dataURLtoFile(inputedPhoto && inputedPhoto, "image.png");
  // console.log("file: " + file);
  formData.append("name", inputedFName);
  formData.append("surname", inputedLName);
  formData.append("email", inputedMail);
  formData.append("phone_number", num);
  formData.append("image", file);
  formData.append("about_me", localStorage.getItem("basicinfo"));
  useEffect(() => {
    axios
      .post(
        "https://resume.redberryinternship.ge/api/cvs",

        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((resp) => {
        console.log(resp.data);
        setPostData(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(file);

  const router = createBrowserRouter([
    { path: "/", element: <StartingPage></StartingPage> },

    {
      path: "/personal",
      element: <PersonalPage data={dataChangeHandler}></PersonalPage>,
    },
    { path: "/experience", element: <ExperiencePage></ExperiencePage> },
    { path: "/education", element: <EducationPage></EducationPage> },
    {
      path: "/final-resume",
      element: <FinalResume postData={postData}></FinalResume>,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
