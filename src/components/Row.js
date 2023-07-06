import React from "react";
import "../App.css"
export function ToLeftRow({ par, title, img }) {
  return (
    <div>
      <div className="row">
        <img className="cog-imgs" src={img} alt="" />
        <div className="des">
          <h1 dir="rtl">{title}</h1>
          <br />
          <p lang="ar">{par}</p>
        </div>
      </div>
    </div>
  );
}

export function ToRightRow({ par, title, img }) {
  return (
    <div>
      <div className="row rev">
        <div className="des">
          <h1 lang="ar" dir="rtl">{title}</h1>
          <br />
          <p lang="ar">{par}</p>
        </div>
        <img className="cog-imgs" src={img} alt="" />
      </div>
      
    </div>
  );
}
