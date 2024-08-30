import Project from "./Project"
import ProjectInfo from "./ProjectInfo"

const ProjectSection = ({reference}) =>{
    return <div id="project" ref={reference} className="">
        {ProjectInfo.map((project) => <Project key={project.id} myContent = {project}/>)}
      
      

    </div>

}
export default ProjectSection