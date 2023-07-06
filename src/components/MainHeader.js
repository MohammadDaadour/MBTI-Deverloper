import "../App.css";
import Button from "./Button";
import GeneralHeader from "./GeneralHeader";
import { Link } from "react-router-dom";

function Header() {
  
  return (
    <div>
      <div className="white">
        <GeneralHeader link3='visited' fontChange='white' />
      </div>
      <header dir="rtl">
        <div class="intro">
          <h1 lang="ar">
            الشعار او جملة عن الجروب او اي حاجة هتكتبوها 
          </h1>
          <Link to="/functions">
            {" "}
            <Button content='المزيد' />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
