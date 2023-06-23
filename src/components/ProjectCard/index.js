import './index.css'

const ProjectCard = props => {
  const {projectDetails} = props
  const {projectName, imageUrl} = projectDetails
  return (
    <li className="list-item">
      <img src={imageUrl} alt={projectName} className="project-image" />
      <p className="project-name">{projectName}</p>
    </li>
  )
}

export default ProjectCard
