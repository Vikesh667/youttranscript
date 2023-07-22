import React from 'react'
import style from "../componenet/Header.module.css"
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <div className={style.Header}>
       <div className={style.p1}><p>YouTube Transcript</p></div> 
       <div className={style.p2}><p>Try my new <Link to='/pdf2gpt'>automatic PDF summary </Link>site </p></div> 
    </div>
  )
}

export default Header