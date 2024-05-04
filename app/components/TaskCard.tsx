import { Task } from "../utils/types";
import { COLORS } from '../constants/colors';
import AddRemoveButton from "./AddRemoveButton";

export default function TaskCard({ task }: { task: Task }) {
  return (
    <div className={`${COLORS.MAIN_BG_COLOR} ${COLORS.FONT_COLOR_MAIN} shadow-md p-4 rounded-lg mb-2`}>
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold">{task.title}</h2>
        <AddRemoveButton buttonSize="24px" buttonText="-" />
      </div>
      <p className={`text-sm ${COLORS.FONT_COLOR_MAIN}`}>{task.description}</p>
      <div className="flex items-center mt-2">
        {/* Additional task details */}
      </div>
    </div>
  );
};
