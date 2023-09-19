import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from '../src/Pages/Welcome/Welcome';
import SkillsPage from '../src/Pages/SkillsPage/SkillsPage';
import ProjectsPage from '../src/Pages/ProjectsPage/ProjectsPage';
import Contact from '../src/Pages/Contact/Contact';
import Notfound from '../src/Pages/Notfound/Notfound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/SkillsPage" element={<SkillsPage />}/>
        <Route path="/ProjectsPage"element={<ProjectsPage />}/>
        <Route path="/Contact"element={<Contact />}/>
        <Route path="*" element={<Notfound />}/>
      </Routes>
    </Router>
  );
}

export default App;