import React, { useState } from "react";
import style from "../componenet/MiddleSection.module.css";
import ReactPlayer from "react-player/youtube";

const MiddleSection = () => {
  const [input, setInput] = useState("");
  const [video, setVideo] = useState(null);
  const [message, setMessage] = useState("Get a transcript:");
  const handleButon = (e) => {
    e.preventDefault();
    if (input.includes("https://www.youtube.com/watch?v")) {
      setVideo(input);
    }else{
      setMessage("This is not youtube url")
    }
  };

  return (
    <>
      {video && 
      <>
      <ReactPlayer url={video} /> 
       <button className={style.copyTranscript}>copy entire transcript</button>
       <h4>Jump to video position in transcript</h4>
       <input className={style.checkbox} type="checkbox"/> Autoscroll
        </>
      }
      <div className={style.MiddleSection}>
        <img src="https://images.pexels.com/photos/448748/pexels-photo-448748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <div className={style.heading}>
          <h1>{message}</h1>
          <div className={style.inputBox}>
            <input
              placeholder="Enter a youtube url..."
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleButon}>Go</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleSection;
