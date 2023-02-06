import React, { useEffect, useState } from "react";
import classes from "./PersonalPage.module.css";
import CV from "../Components/CV";
import Line from "../Components/Line";
import { Link } from "react-router-dom";
import SVG from "../Components/SVG";
import ExperienceCV from "../Components/ExperienceCV";
import star from "../images/star.png";
function PersonalPage(props) {
  const [input, setInput] = useState({});

  const [file, setFile] = useState(null);
  let arr = [];

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    props.data = { file };
  };
  const changeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
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

  // let a =  /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/ tel validation

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
              <label htmlFor="nameInput">სახელი</label>
              <input
                name="nameInput"
                type="text"
                onChange={changeHandler}
                placeholder="ანზორ"
                required
              />
              <p>მინუმუმ 2 ასო, ქართული ასოები</p>
            </div>
            <div className={classes.lastname}>
              <label htmlFor="lastnameInput">გვარი</label>
              <input
                name="lastnameInput"
                type="text"
                onChange={changeHandler}
                placeholder="მუმლაძე"
                required
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
          </div>

          <div className={classes.aboutme}>
            <label htmlFor="">ჩემ შესახებ(არასავალდებულო)</label>
            <textarea
              name="basicinfo"
              onChange={changeHandler}
              placeholder="ზოგადი ტექსტი შენ შესახებ"
            ></textarea>
          </div>
          <div className={classes.email}>
            <label htmlFor="email">ელ-ფოსტა</label>
            <input
              name="email"
              type="email"
              onChange={changeHandler}
              required
              placeholder="anzorr666@redberry.ge"
            />
            <p>უნდა მთავრდებოდეს @redberry.ge-ით</p>
          </div>
          <div className={classes.phone}>
            <label htmlFor="number">მობილურის ნომერი</label>
            <input
              name="number"
              type="number"
              onChange={changeHandler}
              required
              placeholder="+995 551 12 34 56"
            />
            <p>უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს</p>
          </div>
          <Link className={classes.btn} to={"/experience"}>
            <span>შემდეგი</span>
          </Link>
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
        </div>
        <img className={classes.star} src={star} alt="" />
      </div>
    </main>
  );
}

export default PersonalPage;
