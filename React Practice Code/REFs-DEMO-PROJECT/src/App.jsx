import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useState} from 'react';
import SelectedProject from "./components/SelectedProject.jsx";
function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectID: undefined,
    projects:[]
  });

  function handleStartAddProject(){
      setProjectState(prevState => {
        return {
          ...prevState,
          selectedProjectID:null,
        }
      })
  }
  function handleCancelProject()
  {
    setProjectState(prevState =>
    {
      return {
        ...prevState,
        selectedProjectID : undefined,
      }
    }
    )
  }
  function handleAddProject(projectData){
      setProjectState(prevState => {
        const newProject = {
          ...projectData,
          id : Math.random()
        };
        return{
          ...prevState,
          selectedProjectID : undefined,
          projects : [...prevState.projects, newProject]
        };
      });
  }
  function handleSelectProject(id){
     setProjectState(prevState =>
      {
        return {
          ...prevState,
          selectedProjectID : id,
        }
      }
    )
  }
  function handleDeleteProject(){
    setProjectState((prevState) =>
    {
      return {
        ...prevState,
        selectedProjectID : undefined,
        projects : prevState.projects.filter((project) =>
          project.id !== prevState.selectedProjectID
        ),
      };
    }
    )
  }
  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectID)
  let content=(
  <SelectedProject project={selectedProject} onDelete={handleDeleteProject}/>
  );
  
  if(projectState.selectedProjectID === undefined)
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} projects={projectState.projects}/>;
  else if(projectState.selectedProjectID == null)
    content = <NewProject onAdd={handleAddProject} onCancelProject={handleCancelProject}/>;
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
        onStartAddProject={handleStartAddProject} 
        projects={projectState.projects}
        onSelectProject={handleSelectProject}/>
      {content}
    </main>
  );
}

export default App;
