import { COLORS } from '../constants/colors';

export default function Navbar() {
  return (
    <nav className={`${COLORS.NAVBAR_BG_COLOR} ${COLORS.FONT_COLOR_LIGHT} p-4`}>
      <div className="container mx-auto text-4xl">
        {/* Navbar content */}
        🐧 ProjectPenguin
      </div>
    </nav>
  );
};