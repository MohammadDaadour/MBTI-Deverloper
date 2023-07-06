import GeneralHeader from "./GeneralHeader";
import Function from "./Function";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

function AllFunctions() {
  function removeClassFromButtons() {
    const buttons = document.querySelectorAll(".funBtn");
    buttons.forEach((button) => {
      button.classList.remove("visitedTwo");
    });
  }

  function addClasses(event) {
    removeClassFromButtons();
    event.target.classList.add("visitedTwo");
  }

  const { pathname } = useLocation();
const scrollToTop = ()=>{
  window.scrollTo(0, 0);
}
  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        document.querySelector(".mbtiTop").style = "display:none;";
        document.querySelector(".up").style = "display:inherit;"

      } else {
        document.querySelector(".mbtiTop").style = "display:flex;";
        document.querySelector(".up").style = "display:none;"

      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const scrollHeader = () => {
    document.querySelector('.scrollableHeader').scrollLeft += 50; 
  };




  return (
    <div className="mbtiContainer">
      <div className="mbtiHeader">
        <GeneralHeader link2="visited" className="mbtiTop" fontChange="black" />

        <div class="top2">
          <div className="scrollableHeader">
          <Link to="/allFunctions/Se">
            {" "}
            <div onClick={addClasses} className="funBtn">
              Se
            </div>
          </Link>
          <Link to="/allFunctions/Si">
            {" "}
            <div onClick={addClasses} className="funBtn">
              Si
            </div>
          </Link>
          <Link to="/allFunctions/Ne">
            {" "}
            <div onClick={addClasses} className="funBtn">
              Ne
            </div>
          </Link>
          <Link to="/allFunctions/Ni">
            {" "}
            <div onClick={addClasses} className="funBtn">
              Ni
            </div>
          </Link>
          <Link to="/allFunctions/Fe">
            {" "}
            <div onClick={addClasses} className="funBtn">
              Fe
            </div>
          </Link>
          <Link to="/allFunctions/Fi">
            {" "}
            <div onClick={addClasses} className="funBtn">
              Fi
            </div>
          </Link>

          <Link to="/allFunctions/Te">
            {" "}
            <div onClick={addClasses} className="funBtn">
              Te
            </div>
          </Link>

          <Link to="/allFunctions/Ti">
            {" "}
            <div onClick={addClasses} className="funBtn visitedTwo">
              Ti
            </div>
          </Link>
          </div>
        </div>

        {//<div onClick={scrollHeader} className="toRightButton">&#8594;</div>
        }
      </div>
      <button onClick={scrollToTop} className="up">^</button>
      <div className="block">
        <GeneralHeader className="mbtiTop" />
        <div class="top2">
          <button>Se</button>
          <button>Si</button>
          <button>Ne</button>
          <button>Ni</button>
          <button>Fe</button>
          <button>Fi</button>
          <button>Te</button>
          <button>Ti</button>
        </div>
      </div>
      <div lang="ar" className="container fun">
        <Function />
      </div>
    </div>
  );
}

export default AllFunctions;
