import React, { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import style from "../componenet/Pdf2Gpt.module.css";
const Pdf2Gpt = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };
  const handleSummarize = () => {
    setShow(false);
  };
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1>
          <BsGoogle className={style.BsGoogle} />
        </h1>
        <p>Sigin with Google </p>
      </div>

      <div className={style.middle}>
        <img src="https://images.unsplash.com/photo-1629382312424-7c6d593b91c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Image not found"/>
        <h2>pdf2gpt - Summarize a PDF</h2>
        <div className={style.content}>
          <div className={style.Summarize}>
            <h4> I want to </h4>{" "}
            <span>
              <p onClick={handleSummarize}>Summarize</p>
              <button onClick={handleClick}>
                ask a specific question about
              </button>
            </span>
            <h4>a PDF</h4>
            <div>
              {show ? (
                <div className={style.question}>
                  <h3>Questions:</h3>{" "}
                  <input placeholder="ex: dose this mention penuguins?" />
                </div>
              ) : null}
            </div>
          </div>

          <div className={style.files}>
            <div className={style.inputs}>
              <label htmlFor="fileInput" className={style.label}>
                <p>Drop PDF </p>
                <br />
                <p>(or click to browser)</p>
              </label>
              <input type="file" id="fileInput" hidden />
            </div>
            <p>or paste a URL:</p>
            <span>
              <input placeholder="https://example.com.file.pdf" />
              <button>Go</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pdf2Gpt;
