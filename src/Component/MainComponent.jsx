import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import About from "./About";
import ProjectSection from "./ProjectSection";
import SkillSection from "./SkillSection";
import EducationSection from "./EducationSection";
// import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const MainComponent = () => {
  const [activeSection, setActivesection] = useState("about");

  const mainScrollRefs = useRef(null);
  const sectionRefs = {
    aboutRef: useRef(null),
    skillRef: useRef(null),
    projectRef: useRef(null),
    educationRef: useRef(null),
  };

  const handleScroll = () => {
    const scrollPosition = mainScrollRefs.current.scrollTop;

    Object.keys(sectionRefs).forEach((sectionId) => {
      const sectionRef = sectionRefs[sectionId];

      const sectionTop = sectionRef.current.offsetTop;
      const sectionBottom = sectionTop + sectionRef.current.clientHeight;
      if (
        scrollPosition + 280 >= sectionTop &&
        scrollPosition + 280 <= sectionBottom
      ) {
        setActivesection(sectionRef.current.id);
        console.log(activeSection);
      }
    });
  };

  const handleClickScroll = (sectionId) => {
    const sectionRef = sectionRefs[sectionId];
    const sectionTop = sectionRef.current.offsetTop;
    mainScrollRefs.current.scrollTop = sectionTop - 80;
  };

  useEffect(() => {
    const scrollableElement = mainScrollRefs.current;
    if (scrollableElement)
      scrollableElement.addEventListener("scroll", handleScroll, {
        passive: true,
      });
    return () => {
      scrollableElement.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      ref={mainScrollRefs}
      className="w-screen lg:h-screen lg:max-h-screen overflow-x-hidden text-white bg-gradient-to-tr from-slate-900 to-slate-800 to bg-gray-50 "
    >
      <div className="flex lg:flex-row flex-col  gap-5 ">
        <div className="lg:w-1/2 w-full lg:h-screen h-fit lg:sticky left-0 top-0 bg-white-500 flex flex-col justify-between lg:gap-0 gap-10 lg:px-20 lg:py-20 sm:px-14 px-4 sm:py-16 py-28">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <h1 className="text-5xl font-bold">Pratyaksh Raj</h1>
              <h2 className="text-3xl font-semibold"> Mern Stack </h2>
              <p className="text-lg font-medium">
                Hello, I am a Mern Stack Developer{" "}
              </p>
            </div>

            <nav className="">
              <ul className=" t flex flex-col text-xl font-semibold gap-1">
                <li className=" p flex flex-row items-center gap-1" onClick={()=>handleClickScroll('aboutRef')}>
                  <div
                    className={`${
                      activeSection === "about" ? "w-16" : "w-8"
                    } h-1  bg-white transition-all`}
                  ></div>{" "}
                  
                  About
                </li>

                <li className="flex flex-row items-center gap-1" onClick={()=>handleClickScroll('skillRef')}>
                  <div
                    className={`${
                      activeSection === "skillSection" ? "w-16" : "w-8"
                    } h-1  bg-white transition-all`}
                  ></div>{" "}
                  Skill
                </li>
                <li className="flex flex-row items-center gap-1" onClick={()=>handleClickScroll('projectRef')}>
                  <div
                    className={`${
                      activeSection === "project" ? "w-16" : "w-8"
                    } h-1  bg-white transition-all`}
                  ></div>
                  Project{" "}
                </li>
                <li className="flex flex-row items-center gap-1" onClick={()=>handleClickScroll('educationRef')}>
                  <div
                    className={`${
                      activeSection === "education" ? "w-16" : "w-8"
                    } h-1  bg-white transition-all`}
                  ></div>{" "}
                  Education
                </li>
              </ul>
            </nav>
          </div>

          <ul className="flex sm:flex-row flex-col text-3xl gap-3">
            <li>
              <a href="">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="">
                <SiGeeksforgeeks />
              </a>
            </li>
            <li>
              <a href="">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://leetcode.com/pratyaksh_07/">
                <SiLeetcode />
              </a>
            </li>
            <li className="text-base">
              {" "}
              <a></a>pratyakshraj17@gmail.com
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 w-full flex flex-col lg:gap-28 gap-20 lg:px-20 lg:py-20 sm:px-14 px-4 sm:py-16 py-4">
          <About reference={sectionRefs.aboutRef} />
          <SkillSection reference={sectionRefs.skillRef} />
          <ProjectSection reference={sectionRefs.projectRef} />
          <EducationSection reference={sectionRefs.educationRef} />
        </div>
      </div>
    </div>
  );
};
export default MainComponent;
