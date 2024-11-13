import React,{useState} from 'react'
import { Link } from "react-router-dom";
import vibex from "./Vibex.png"
function ProjectsContainer() {
  const [teckStack,setTeckState] = useState(["React.js ", "Express.js ","MongoDB ","Node.Js ","Tailwind Css"])
  const bgcolorDark = "bg-[#3d3a3a]"
  return (
    
    <div>
      <div className='text-white'>
        <h1 className='pl-2'>
          Live Projects{" "}
          <span className="w-2 h-2 bg-green-400  rounded-full inline-block">
            {" "}
          </span>
        </h1>
        <hr />

        <div
          className={`${bgcolorDark} mt-2  rounded-md sm:w-[95%] w-[95%] m-auto p-2`}

        >
          <div className="flex place-content-between py-4  px-5">
            <h2 className='text-gray-100 text-2xl font-bold '>VibeX</h2>
            <h2>
            <Link className='cursor-pointer hover:text-white text-blue-400' to="https://vibe-x-liard.vercel.app/">

              Visit Website
            </Link>
            </h2>
          </div>

          <div className="grid gap-2 grid-cols-6">
            <div className="sm:col-span-2 col-span-6 m-5 mt-2">
              <img src={vibex} className="object-cover w-[100%] h-[12rem] " />{" "}
            </div>
            <ul className="sm:col-span-4 col-span-6">
              <li >
                <p className="">
                  <span className="w-1 h-1 bg-violet-400  rounded-full inline-block m-1"></span>
                  VibeX is a music streaming website inspired by Spotify, offering users a wide range of music to explore & enjoy.

                </p>{" "}
              </li>
              <li>
                <p>
                  <span className="w-1 h-1 bg-violet-400   rounded-full inline-block m-1"></span>
                  Implemented user authentication, music streaming features, and created a fully responsive UI for a seamless
experience across devices.

                </p>{" "}
              </li>
              <li>
                <p>
                  <span className="w-1 h-1 bg-violet-400   rounded-full inline-block m-1"></span>
                  Utilized React, Express, MongoDB, Tailwind CSS, JWT, and Login authentication to develop a highly functional and
                  engaging platform with 100% responsiveness.
                </p>{" "}
              </li>
              <li className="flex">
                <p>
                <span className="w-1 h-1 bg-violet-400  rounded-full inline-block m-1">
                  {" "}
                </span>
                <span className="w-1 h-1 text-violet-400  inline m-1">
                 
                Tech Stack - 
                </span>
                <ul className="inline" >
                  {teckStack.map((i)=><li className="inline m-2">{i}</li>)}
                </ul>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default ProjectsContainer;
