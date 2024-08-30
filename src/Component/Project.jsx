import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
const Project = ({ myContent }) => {
  const [activeHoverEffect, setActiveHoverEffect] = useState(false);
  return (
    <a
      href={myContent.link}
      className="w-full sm:p-4 flex hover:shadow-lg hover:bg-gray-500/10 rounded-sm gap-5"
      onMouseEnter={() => setActiveHoverEffect((prev) => !prev)}
      onMouseLeave={() => setActiveHoverEffect((prev) => !prev)}
    >
      <div className="flex flex-col gap-2 w-1/4">
        <img
          src={myContent.image}
          alt=""
          className=" rounded-sm outline outline-offset-2 outline-2 outline-cyan-500"
        />
        <span className="text-gray-400"> {myContent.subTitle}</span>
      </div>
      <div className="w-3/4 flex flex-col gap-3">
        <h1
          className={`text-xl ${
            activeHoverEffect ? "text-cyan-500" : ""
          } flex flex-row gap-1`}
        >
          {" "}
          <span>{myContent.name}</span>{" "}
          <FaArrowUp
            className={`rotate-45 transition-transform ease-in-out ${
              activeHoverEffect ? "-translate-y-1 translate-x-1" : ""
            }`}
          />
        </h1>

        <p className="text-sm text-gray-200">{myContent.text}</p>

        <div className="flex flex-row gap-2 flex-wrap">
          {myContent.techstack.map((text) => (
            <span className="bg-cyan-800/50 rounded-full px-3 py-1">
              {text}{" "}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};
export default Project;
