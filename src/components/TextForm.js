import React, { useState } from "react";

export default function TextForm(props) {
  const handelUpClick = () => {
    //console.log("Uppercase Was Clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const handelLwClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  const handelClear = () => {
    let newtext = "";
    setText(newtext);
  }
  const handelOnChange = (event) => {
    //console.log("On Change");
    setText(event.target.value);
  }
  const handelCopy = () => {
    let newtext = document.getElementById("mybox");
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
  }
  const handelExtraSpace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  }
  const [text, setText] = useState("Enter Text Here");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handelOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-dark" onClick={handelUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-danger mx-2 my-2" onClick={handelLwClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-success " onClick={handelClear}>
          Clear The Text
        </button>
        <button className="btn btn-secondary mx-2 my-2" onClick={handelCopy}>
          Copy The Text
        </button>
        <button className="btn btn-dark" onClick={handelExtraSpace}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-2">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
