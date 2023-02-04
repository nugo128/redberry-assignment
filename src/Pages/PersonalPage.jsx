import React, { useState } from "react";
import classes from "./PersonalPage.module.css";
function PersonalPage(props) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    props.data = { file };
  };

  console.log(file);
  return (
    <form>
      <label htmlFor="">სახელი</label>
      <input type="text" />
      <p>მინუმუმ 2 ასო, ქართული ასოები</p>
      <label htmlFor="">გვარი</label>
      <input type="text" />
      <br />
      <p>მინუმუმ 2 ასო, ქართული ასოები</p>
      <label>
        Upload Image
        <input
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </label>
      {file ? (
        <img src={URL.createObjectURL(file)} alt="www" />
      ) : (
        <p>no image</p>
      )}
    </form>
  );
}

export default PersonalPage;
