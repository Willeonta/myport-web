import Card from "./Card";

const ProjectsCard = ({ imgUrl, title, url }) => {
  return (
    <div className="projects_card">
        <Card 
          imgUrl={imgUrl}
          title={title}
          url={url}
        />
    </div>
  )
}
export default ProjectsCard