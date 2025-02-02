import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClicked = () => {
    // console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLoClicked = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleClearClicked = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("TextArea is Clear", "success");
  };
  const handleSpaceRemovalClicked = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra Spaces are Removed", "success");
  };
  const handleCopyText = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied to Clipboard ", "success");
  };
  const handleOnChange = (event) => {
    // console.log("ON Change");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container "
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="container mb-3 my-3">
          <textarea
            className="form-Control"
            id="mybox"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#13466e",
              color: props.mode === "light" ? "black" : "white",
              width: "100%",
              boxsizing: "border-box",
            }}
            onChange={handleOnChange}
            rows="10"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-sm btn-primary mx-1 my-1"
          onClick={handleUpClicked}
        >
          Convert To Uppercase
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-sm btn-secondary mx-1 my-1"
          onClick={handleLoClicked}
        >
          Convert To Lowercase
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-sm btn-warning mx-1 my-1"
          onClick={handleSpaceRemovalClicked}
        >
          ExtraSpace Removal
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-sm btn-info mx-1"
          onClick={handleCopyText}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-sm btn-danger mx-1 my-1"
          onClick={handleClearClicked}
        >
          Clear Textarea
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          Words{" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          And Characters {text.length}
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes Take you read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing To Preview "}</p>
      </div>
    </>
  );
}
