import React from 'react';
import './Landing.css';
import { Outlet,Link } from "react-router-dom";


export default function Landing() {
  return (
    <div className="wrapper">

      <div className="innerbox">
        <img className='photo' src="./Images/coverPage.jpg" alt="coverimg"/>
      </div>
      <div className="innerbox">
        <h1 className="heading">10X Batch 2022</h1>
        <button>
            <Link to="/postview">Enter</Link>
        </button>
      </div>
    <Outlet />
    </div>
  )
}
