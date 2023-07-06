import "../App.css";
import { useState } from "react";
function Button({ className, content }) {
  const [entered, setEntered] = useState(false);
  const mouseEvent = () => {
    setEntered(!entered);
  };

  return (
    <div>
      <button
        onMouseEnter={mouseEvent}
        onMouseLeave={mouseEvent}
        lang="ar"
        dir="ltr"
        className={className}
      >
        {content}{" "}
        <span className={`${entered ? "animated-arrow" : ""}`}>&#10229;</span>
      </button>
    </div>
  );
}

export default Button;
