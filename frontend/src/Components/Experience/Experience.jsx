import React from "react";

function Experience() {
  const bgcolorDark = "bg-[#3d3a3a]"
  return (
    <div className="">
      <h2 className="pb-2">Experiences</h2>
      <hr />
      <div className={`${bgcolorDark} w-[96%] my-2 rounded-md  mx-auto flex p-2 gap-2`}>
        <div className="text-xs">
            <p className="m-2">Dec 2024</p>
            <p className="m-2">Present</p>
        </div>
        <div>
            <h2 className="text-lg">Junior Java Developer/Grade-T3</h2>
            <p className="text-sm" >Thomas Cook India Limited</p>
        </div>
      </div>
      <div className={`${bgcolorDark} w-[96%] my-2 rounded-md  mx-auto flex p-2 gap-2`}>
        <div className="text-xs">
            <p className="m-2">June 2024</p>
            <p className="m-2">Nov 2024</p>
        </div>
        <div>
            <h2 className="text-lg">Frontend Developer</h2>
            <p className="text-sm" >Hand2Mart</p>
        </div>
      </div>
      <div className={`${bgcolorDark} w-[96%] my-2 rounded-md  mx-auto flex p-2 gap-2`}>
        <div className="text-xs">
            <p className="m-2">feb 2024</p>
            <p className="m-2">July 2024</p>
        </div>
        <div>
            <h2 className="text-lg">SDE Intern</h2>
            <p className="text-sm" >Nurturing Interns Private Limited</p>
        </div>
      </div>
      <div className={`${bgcolorDark} w-[96%] my-2 rounded-md  mx-auto flex p-2 gap-2`}>
        <div className="text-xs">
            <p className="m-2">May 2024</p>
            <p className="m-2">July 2024</p>
        </div>
        <div>
            <h2 className="text-lg">Open Source Contributor</h2>
            <p className="text-sm" >GirlScript Summer of Code (GSSoC)</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
