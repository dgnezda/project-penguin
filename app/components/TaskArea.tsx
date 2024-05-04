import { Task } from '../utils/types';
import { COLORS } from '../constants/colors';
import TaskCard from './TaskCard';
import AddRemoveButton from './AddRemoveButton';

interface Props {
  tasks: Task[];
}

export default function TaskArea({ tasks }: Props) {
  return (
    <main className={`flex-grow ${COLORS.MAIN_BG_COLOR} ${COLORS.FONT_COLOR_MAIN} p-4 overflow-y-auto`}>
      {/* Task content */}
      <div className='flex justify-start'>
        <h2 className="text-lg font-semibold mb-4 mr-2">Tasks</h2>
        <AddRemoveButton buttonSize='26px' buttonText='+' />
      </div>
      {tasks.map((task: Task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </main>
  );
};
