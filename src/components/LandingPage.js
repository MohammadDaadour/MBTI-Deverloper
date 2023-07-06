import { CFImg, MbtiImg } from "./Img";
import {
  History,
  WhatIsCognitiveFunctions,
  WhatIsMbti,
  AboutTest,
} from "./Paragraphs";
import MainHeader from "./MainHeader";
import Button from "./Button";
import "../App.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <MainHeader />
      <section>
        <div lang="ar" dir="rtl" class="container">
          <History />
          <div class="cf">
            <img src={CFImg} alt="" />
            <h1>ما هي الوظائف المعرفية؟</h1>
          </div>
          <WhatIsCognitiveFunctions />
          <Link to='/functions'><Button content='المزيد' className='learn-more' /></Link>
          <img src={MbtiImg} alt="" className="MbtiImg"/>
          <WhatIsMbti />
          <AboutTest />
          <Button content='المزيد' className='learn-more'/>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
