import React from "react";
import style from "../componenet/Footer.module.css";
import { AiOutlineDesktop } from "react-icons/ai";
import {GrStackOverflow} from "react-icons/gr"
import {BsCheckCircle} from "react-icons/bs"
const Footer = () => {
  return (
    <div className={style.Footer}>
      <div className={style.desktop}>
        <AiOutlineDesktop className={style.icon} />
        <p>
          <span>Reading is Faster</span>
          <br />
          Blah blah welcome to my video <br />
          begone!
        </p>
      </div>
      <div className={style.desktop}>
        <GrStackOverflow className={style.icon} />
        <p>
          <span>Probably Won't Fail</span>
          <br />
          Featuring the latest build of an <br />
          undocumented API.
        </p>
      </div>
      <div className={style.desktop}>
        <BsCheckCircle className={style.icon} />
        <p>
          <span>Easy to Use</span>
          <br />
          Website definitely made with a <br />
          bootstrap template.
        </p>
      </div>
    </div>
  );
};

export default Footer;
