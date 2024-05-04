import { Project } from "../utils/types";
import { COLORS } from '../constants/colors';
import AddRemoveButton from "./AddRemoveButton";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={`${COLORS.MAIN_BG_COLOR} ${COLORS.FONT_COLOR_MAIN} shadow-md p-4 rounded-lg`}>
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold">{project.name}</h2>
        <AddRemoveButton buttonText="-" buttonSize="24px" />
      </div>
      <p className={`text-sm ${COLORS.FONT_COLOR_MAIN}`}>{project.description}</p>
      <div className="flex items-center mt-2">
        {/* Additional project details */}
      </div>
    </div>
  );
};
