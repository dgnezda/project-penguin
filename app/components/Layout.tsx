import NavBar from './NavBar';
import SideBar from './SideBar';
import TaskArea from './TaskArea';
import { projects, tasks } from '../utils/mockData';

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      
      <div className="flex flex-grow">
        <SideBar projects={projects} />
        <TaskArea tasks={tasks} />
      </div>
    </div>
  );
};
