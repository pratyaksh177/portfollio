import { TbBrandCpp } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaSquareGit } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { MdHtml } from "react-icons/md";
import { FaBootstrap } from "react-icons/fa";
import { SiMui } from "react-icons/si";


const SkillSection = ({reference}) => {
  return (
    <div ref = {reference} id = "skillSection" className="flex gap-2 justify-center flex-wrap py-12">
      <span className="flex items-center text-lg gap-1 bg-cyan-800/50 rounded-full px-6 py-2 bg-sky-500 hover:bg-sky-700 ">
        <TbBrandCpp /> C++
      </span>
      <span className="flex items-center text-lg gap-1 bg-cyan-800/50 rounded-full px-6 py-2 bg-sky-500 hover:bg-sky-700 ">
        <SiMongodb />
        Mongodb
      </span>
      <span className="flex items-center text-lg gap-1 bg-cyan-800/50 rounded-full px-6 py-2 bg-sky-500 hover:bg-sky-700 ">
        <FaSquareGit />
        Git Vsc
      </span>
      <span className="flex items-center text-lg gap-1 bg-cyan-800/50 rounded-full px-6 py-2 bg-sky-500 hover:bg-sky-700 ">
        <FaNodeJs/> Node Js
      </span>
      <span className="flex items-center text-lg gap-1 bg-cyan-800/50 rounded-full px-6 py-2 bg-sky-500 hover:bg-sky-700 ">
        <FaReact />React Js
      </span>
      <span className="flex items-center text-lg gap-1 bg-cyan-800/50 rounded-full px-6 py-2 bg-sky-500 hover:bg-sky-700 ">
        <SiExpress /> Express
      </span>
      <span className="flex items-center text-lg gap-1 bg-cyan-800/50 rounded-full px-6 py-2 bg-sky-500 hover:bg-sky-700 ">
        <DiJavascript /> Javascript
      </span>
      <span className="flex items-center text-lg gap-1 bg-cyan-800/50 rounded-full px-6 py-2 bg-sky-500 hover:bg-sky-700 ">
        <MdHtml/> Html
      </span>
      <span className="flex items-center text-lg gap-1 bg-cyan-800/50 rounded-full px-6 py-2 bg-sky-500 hover:bg-sky-700 ">
        <FaBootstrap /> Bootstrap
      </span>
      <span className="flex items-center text-lg gap-1 bg-cyan-800/50 rounded-full px-6 py-2 bg-sky-500 hover:bg-sky-700 ">
        <SiMui/> Mui
      </span>
    </div>
  );
};

export default SkillSection;
