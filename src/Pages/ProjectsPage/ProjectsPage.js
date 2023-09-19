import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import DataProjects from "../../Data/DataProjects";
import Collapse from "../../Components/Collapse/Collapse";
import'./style.scss';

function ProjectsPage() {
  return (
    <div className="projectsPage">
      <Navbar />
      <div className='projectsMain'>
        {DataProjects.map((item) => (
          <div className="projectCard" 
          key={item.id}>
            <img src={item.cover} alt={item.title} className="projectImage" />
            <Collapse 
            title={item.title} 
            description={item.description} 
            link={item.link}>
            </Collapse>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default ProjectsPage;

