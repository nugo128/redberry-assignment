import React, { useEffect, useState } from "react";
import classes from "./PersonalPage.module.css";
import CV from "../Components/CV";
import Line from "../Components/Line";
import { Link } from "react-router-dom";
import SVG from "../Components/SVG";
import ExperienceCV from "../Components/ExperienceCV";
import star from "../images/star.png";
import EducationCV from "../Components/EducationCV";
import invalid from "../images/invalid.png";
import valid from "../images/valid.png";
function PersonalPage(props) {
  const [input, setInput] = useState({});

  const [file, setFile] = useState(null);
  const [nameIsValid, setNameIsValid] = useState(false);
  const [lastNameIsValid, setLastNameIsValid] = useState(false);
  const [photoIsValid, setPhotoIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [numberIsValid, setNumberIsValid] = useState(false);

  const [focusedName, setFocusedName] = useState(
    localStorage.getItem("inputedFirstname")
  );
  const [focusedLName, setFocusedLName] = useState(
    localStorage.getItem("inputedLastname")
  );
  const [focusedEmail, setFocusedEmail] = useState(
    localStorage.getItem("email")
  );
  const [focusedNumber, setFocusedNumber] = useState(
    localStorage.getItem("number")
  );

  let arr = [];
  let arr2 = [];
  const focusHandler = () => {
    setFocusedName(true);
    setFocusedLName(true);
    setFocusedEmail(true);
    setFocusedNumber(true);
  };
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    props.data = { file };
  };
  const changeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  if (input.nameInput) {
    localStorage.setItem("inputedFirstname", input.nameInput);
  }

  if (input.lastnameInput) {
    localStorage.setItem("inputedLastname", input.lastnameInput);
  }
  if (input.basicinfo) {
    localStorage.setItem("basicinfo", input.basicinfo);
  }
  if (input.email) {
    localStorage.setItem("email", input.email);
  }
  if (input.number) {
    localStorage.setItem("number", input.number);
  }
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const fileData = event.target.result;
      localStorage.setItem("photo", fileData);
    };
    window.location.reload();
  }
  const backClickHandler = () => {
    localStorage.clear();
  };
  const checkGeo = /^[ა-ჰ]{2,}$/;
  const checkMail = /^[a-zA-Z0-9.]+@redberry.ge$/;
  const pattern = /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/;
  console.log("22w" + pattern.test("+995 591 11 12 13"));
  useEffect(() => {
    let inputedMail = localStorage.getItem("email");
    let inputedFName = localStorage.getItem("inputedFirstname");
    let inputedLName = localStorage.getItem("inputedLastname");
    let inputedPhoto = localStorage.getItem("photo");
    let inputedNumber = localStorage.getItem("number");
    setEmailIsValid(checkMail.test(inputedMail));
    setNameIsValid(checkGeo.test(inputedFName));
    setLastNameIsValid(checkGeo.test(inputedLName));
    setPhotoIsValid(inputedPhoto);
    setNumberIsValid(pattern.test(inputedNumber));
  }, [input.nameInput, input.lastnameInput, input.email, input.number]);

  return (
    <main className={classes.maincontainer}>
      <section className={classes.formcontainer}>
        <section className={classes.header}>
          <Link to={"/"} className={classes.svg} onClick={backClickHandler}>
            <SVG></SVG>
          </Link>
          <div className={classes.pagename}>
            <h2>პირადი ინფო</h2>
            <p>1/3</p>
          </div>
          <Line></Line>
        </section>
        <form>
          <div className={classes.firstLastContainer}>
            <div className={classes.firstname}>
              <label
                htmlFor="nameInput"
                className={
                  !focusedName
                    ? ""
                    : nameIsValid
                    ? classes.validNameLabel
                    : classes.invalidNameLabel
                }
              >
                სახელი
              </label>
              <input
                name="nameInput"
                type="text"
                onChange={changeHandler}
                placeholder="ანზორ"
                onFocus={focusHandler}
                onBlur={focusHandler}
                Value={localStorage.getItem("inputedFirstname")}
                required
                className={
                  !focusedName
                    ? ""
                    : nameIsValid
                    ? classes.validName
                    : classes.invalidName
                }
              />

              <img
                src={invalid}
                className={
                  !focusedName
                    ? classes.validNameLogo
                    : !nameIsValid
                    ? classes.invalidNameLogo
                    : classes.validNameLogo
                }
              />

              <p>მინუმუმ 2 ასო, ქართული ასოები</p>
            </div>
            <div className={classes.lastname}>
              <label
                htmlFor="lastnameInput"
                className={
                  !focusedLName
                    ? ""
                    : lastNameIsValid
                    ? classes.validLNameLabel
                    : classes.invalidLNameLabel
                }
              >
                გვარი
              </label>
              <input
                name="lastnameInput"
                type="text"
                onChange={changeHandler}
                placeholder="მუმლაძე"
                required
                onFocus={focusHandler}
                onBlur={focusHandler}
                Value={localStorage.getItem("inputedLastname")}
                className={
                  !focusedLName
                    ? ""
                    : lastNameIsValid
                    ? classes.validLName
                    : classes.invalidLName
                }
              />
              <img
                src={invalid}
                className={
                  !focusedLName
                    ? classes.validLNameLogo
                    : !lastNameIsValid
                    ? classes.invalidLNameLogo
                    : classes.validLNameLogo
                }
              />
              <p>მინუმუმ 2 ასო, ქართული ასოები</p>
            </div>
          </div>
          <div className={classes.photoupload}>
            <label htmlFor="" className={classes.photolabel}>
              პირადი ფოტოს ატვირთვა
            </label>
            <label className={classes.photoinput}>
              <span>ატვირთვა</span>
              <input
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
                required
              />
            </label>
            <img
              src={photoIsValid ? valid : invalid}
              className={
                photoIsValid || focusedName || focusedLName
                  ? classes.showImg
                  : classes.hideImg
              }
            />
          </div>

          <div className={classes.aboutme}>
            <label htmlFor="">ჩემ შესახებ (არასავალდებულო)</label>
            <textarea
              onFocus={focusHandler}
              onBlur={focusHandler}
              name="basicinfo"
              onChange={changeHandler}
              placeholder="ზოგადი ტექსტი შენ შესახებ"
            ></textarea>
          </div>
          <div className={classes.email}>
            <label
              htmlFor="email"
              className={
                !focusedEmail
                  ? ""
                  : emailIsValid
                  ? classes.validEmailLabel
                  : classes.invalidEmailLabel
              }
            >
              ელ-ფოსტა
            </label>
            <input
              name="email"
              type="text"
              onChange={changeHandler}
              onFocus={focusHandler}
              onBlur={focusHandler}
              required
              placeholder="anzorr666@redberry.ge"
              Value={localStorage.getItem("email")}
              className={
                !focusedEmail
                  ? ""
                  : emailIsValid
                  ? classes.validEmail
                  : classes.invalidEmail
              }
            />
            <img
              src={invalid}
              className={
                !focusedEmail
                  ? classes.validEmailLogo
                  : !emailIsValid
                  ? classes.invalidEmailLogo
                  : classes.validEmailLogo
              }
            />
            <p>უნდა მთავრდებოდეს @redberry.ge-ით</p>
          </div>
          <div className={classes.phone}>
            <label
              htmlFor="number"
              className={
                !focusedLName
                  ? ""
                  : numberIsValid
                  ? ""
                  : classes.invalidNumberLabel
              }
            >
              მობილურის ნომერი
            </label>
            <input
              name="number"
              type="text"
              onFocus={focusHandler}
              onBlur={focusHandler}
              onChange={changeHandler}
              Value={localStorage.getItem("number")}
              required
              placeholder="+995 551 12 34 56"
              className={
                !focusedNumber
                  ? ""
                  : numberIsValid
                  ? classes.validNumber
                  : classes.invalidNumber
              }
            />
            <p>უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს</p>
            <img
              src={invalid}
              className={
                !focusedNumber
                  ? classes.validNumberLogo
                  : !numberIsValid
                  ? classes.invalidNumberLogo
                  : classes.validNumberLogo
              }
            />
          </div>
          {nameIsValid &&
          lastNameIsValid &&
          photoIsValid &&
          emailIsValid &&
          numberIsValid ? (
            <Link className={classes.btn} to={"/experience"}>
              <span>შემდეგი</span>
            </Link>
          ) : (
            <button className={classes.btn}>
              <span>შემდეგი</span>
            </button>
          )}
        </form>
        {/* <p>{localStorage.getItem("inputedFirstname2")}</p> */}
        {/* <p>{data}</p> */}
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

export default PersonalPage;
