import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function GeneralHeader({ link1, link2, link3, link4, className, fontChange }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const [background, setBackground] = useState("transparent");
  const [font, setFont] = useState(fontChange);

  const style = { color: active ? "black" : font };
  const bdStyle = { borderColor: active ? "black" : font };
  const headerBackGroundStyle = {
    backgroundColor: active ? "transparent" : background,
  };

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setBackground("rgb(65, 161, 149)");
        setFont("white");
      } else {
        setBackground("transparent");
        setFont(fontChange);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`general ${className}`} style={headerBackGroundStyle}>
        <Link to={{ pathname: "/", state: { replace: true } }}>
          <p style={style} className={`title ${active ? "color-change " : ""}`}>
            The Developer
          </p>
        </Link>
        <div class="list" onClick={handleClick}>
          <hr
            style={bdStyle}
            class={`first-hr ${active ? "color-change first-hr-animated" : ""}`}
          />
          <hr
            style={bdStyle}
            class={`second-hr ${
              active ? "color-change second-hr-animated" : ""
            }`}
          />
        </div>
      </div>
      <div className={`opened-list ${active ? "active" : ""}`}>
        <ul lang="ar" id="inner-list">
          <li className={link3}>
            <Link to="/">الرئيسية</Link>
          </li>
          <li className={link1}>
            <Link to={{ pathname: "/functions", state: { replace: true } }}>
              Archetypes
            </Link>
          </li>
          <li className={link2}>
            {" "}
            <Link to="/allFunctions/Ti">كل الوظائف المعرفية </Link>
          </li>
          <li>من نحن؟</li>
        </ul>
      </div>
    </div>
  );
}

export default GeneralHeader;
