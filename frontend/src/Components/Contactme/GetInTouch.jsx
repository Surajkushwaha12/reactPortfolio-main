import React from "react";
import { Link } from "react-router-dom";
import x from "./instagram.png";
import linkedin from "./linkedin.png";
import github from "./github.png";
import gmail from "./gmail.png";
function GetInTouch() {
  const bgcolorDark = "bg-[#3d3a3a]"
  return (
  <div className={``}>
      <h2 className="pb-2">Get in touch</h2>
      <hr />
      <div className={`flex justify-center gap-5  pt-10 `}>
        <a href="mailto:surajkushwaha8272@gmail.com">
          <img src={gmail} className={`rounded-full p-2 w-14 h-14 ${bgcolorDark} `} />
        </a>
        <Link to="https://github.com/Surajkushwaha12">
          <img src={github}className={`rounded-full p-2 w-14 h-14 ${bgcolorDark} `}/>
        </Link>
        <Link to="https://www.linkedin.com/in/suraj-kushwaha-b399201a9/">
          <img src={linkedin} className={`rounded-full p-2 w-14 h-14 ${bgcolorDark} `} />
        </Link>

        <Link to="https://www.instagram.com/suraj_kushwahass/">
          <img src={x}className={`rounded-full p-2 w-14 h-14 ${bgcolorDark} `} />
        </Link>
      </div>
    </div>
  );
}

export default GetInTouch;
