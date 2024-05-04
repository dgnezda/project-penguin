import { Project } from '../utils/types';
import { COLORS } from '../constants/colors';
import ProjectCard from './ProjectCard';
import AddRemoveButton from './AddRemoveButton';

interface Props {
  projects: Project[];
}

export default function Sidebar({ projects }: Props) {
  return (
    <aside className={`${COLORS.SIDEBAR_BG_COLOR} ${COLORS.FONT_COLOR_MAIN} p-4 w-64 overflow-y-auto`}>
      {/* Project list */}
      <div className="flex flex-col space-y-2">
        <div className='flex justify-between'>
          <h2 className="text-lg font-semibold">Projects</h2>
          <AddRemoveButton buttonSize='26px' buttonText='+' />
        </div>
        {projects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </aside>
  );
};
