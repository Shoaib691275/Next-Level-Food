"use client";
import classes from "./image-picker.module.css";
import { useRef, useState } from "react";
import Image from "next/image";
export default function ImagePicker({ name, label }) {
  const imageValue = useRef();
  const [pickedImage, setPickedImage] = useState();

  const handleClick = () => {
    imageValue.current.click();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setPickedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No Pic Chosen</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              fill
              alt="The image selected by the user"
            />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/jpeg,image/png"
          name={name}
          ref={imageValue}
          onChange={handleChange}
        />
        <button onClick={handleClick} className={classes.button} type="button">
          Pick an image
        </button>
      </div>
    </div>
  );
}
