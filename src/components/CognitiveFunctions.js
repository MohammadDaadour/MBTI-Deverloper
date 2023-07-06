import React from "react";
import GeneralHeader from "./GeneralHeader";
import { ToLeftRow, ToRightRow } from "./Row";
import {
  HeroPar,
  ParentPar,
  ChildPar,
  InferiorPar,
  OverView,
} from "./Paragraphs";
import {
  ArchetypesImg,
  HeroImg,
  ParentImg,
  ChildImg,
  InferiorImg,
  OpposingImg,
  CriticalImg,
  TrickImg,
  DemonImg,
} from "./Img";
import Button from "./Button";
import { Link } from "react-router-dom";

function CognitiveFunctions() {
  const show = (event) => {
    event.target.style = 'display:none;'
    document.querySelector('.hrr').style = 'display:inherit;';
    document.querySelector('.shadow').classList.remove('shadow');
  };
  return (
    <div>
      <GeneralHeader link1="visited" fontChange='black'/>
      <div className="containerTwo">
        <ToRightRow img={ArchetypesImg} title="نظرة عامة" par={<OverView />} />
        <div>
          <ToLeftRow
            img={HeroImg}
            title="The Dominant Function(Hero)"
            par={<HeroPar />}
          />

          <ToRightRow
            img={ParentImg}
            title="The Auxiliary Function(Parent)"
            par={<ParentPar />}
          />

          <ToLeftRow
            img={ChildImg}
            title="The Tertiary Function(Child)"
            par={<ChildPar />}
          />

          <ToRightRow
            img={InferiorImg}
            title="The Inferior Function"
            par={<InferiorPar />}
          />
        </div>

        <p onClick={show} className="more">&#10230; Shadow Archetypes</p>
        
        <hr className="hrr "></hr>
        
        <div className="shadow">
        
          <ToLeftRow
            img={OpposingImg}
            title="The Opposing Function"
            par={<HeroPar />}
          />

          <ToRightRow
            img={CriticalImg}
            title="The Critical Function"
            par={<ParentPar />}
          />

          <ToLeftRow
            img={TrickImg}
            title="The Trickster Function"
            par={<ChildPar />}
          />

          <ToRightRow
            img={DemonImg}
            title="The Demon Function"
            par={<InferiorPar />}
          />
        </div>
       <Link to='/allFunctions/Ti'> <Button
          className="learn-more learn-more-width"
          content="شرح مفصل لكل الوظائف المعرفية"
        /></Link>
      </div>
    </div>
  );
}

export default CognitiveFunctions;
