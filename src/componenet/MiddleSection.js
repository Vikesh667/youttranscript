import React, { useState } from "react";
import style from "../componenet/MiddleSection.module.css";
import YouTube from "react-youtube";

const MiddleSection = () => {
  const [input, setInput] = useState("");
  const [video,setVideo]=useState([])
  const handleButon = (e) => {
    e.preventDefault()
    setVideo(input)
  };
 
  return (
    <>
   {video && <YouTube videoId={video}/>} 
    <div className={style.MiddleSection}>
      <img src="https://images.pexels.com/photos/448748/pexels-photo-448748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <div className={style.heading}>
        <h1>Get a transcript:</h1>
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
