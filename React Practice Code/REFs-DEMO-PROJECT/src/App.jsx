import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useState} from 'react';
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
  let content;
  
  if(projectState.selectedProjectID === undefined)
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} projects={projectState.projects}/>;
  else if(projectState.selectedProjectID == null)
    content = <NewProject onAdd={handleAddProject}/>;
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectState.projects}/>
      {content}
    </main>
  );
}

export default App;
