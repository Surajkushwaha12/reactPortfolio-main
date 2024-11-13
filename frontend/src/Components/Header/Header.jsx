import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
function Header() {
  const navigate = useNavigate();
  const [dark, setDark] = useState(false);
  const navebarItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Skills",
      slug: "/skills",
      active: true,
    },
    {
      name: "Projects",
      slug: "/projects",
      active: true,
    },
    {
      name: "Hire Me",
      slug: "/contactme",
      active: true,
    },
  ];

  return (
    <header className="text-white">
      <nav className="border-b-2  grid grid-cols-12  border-white p-1 pt-4 pb-2 ">
        <div className="col-span-11 ">
          <ul className=" w-[100%] p-1 m-auto text-lg font-semibold border-red-500 flex  flex-wrap flex-row justify-end  ">
            {navebarItems.map((item) => (
              <li className=" sm:ml-4 " key={item.name}>
                <button
                  className="hover:text-violet-300 p-2 text-l "
                  onClick={() => navigate(item.slug)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="col-span-0 gap-0  pt-2 pl-3 ">
          {dark == true ? (
            <MoonIcon className=" sm:w-10 sm:h-8 w-8 h-4 bg-transparent text-white" onClick={()=>setDark(!dark)} />
          ) : (
            <SunIcon className=" sm:w-10 sm:h-8 w-8 h-6 bg-transparent text-yellow-200" onClick={()=>setDark(!dark)}/>
          )}
        </div> */}
      </nav>
    </header>
  );
}

export default Header;
