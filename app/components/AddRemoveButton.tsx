// components/AddRemoveButton.tsx

import { useState } from 'react';
import { COLORS } from '../constants/colors';

interface AddRemoveButtonProps {
  buttonText: string;
  buttonSize: string;
}

export default function AddRemoveButton({ buttonText, buttonSize }: AddRemoveButtonProps) {

  return (
    <button
      className={`
        rounded-full 
        ${COLORS.BORDER_COLOR} 
        ${buttonText === '-' || buttonText === '+'
          ? `${COLORS.AR_BUTTON_BG} ${COLORS.AR_BUTTON_BG_HOVER} ${COLORS.FONT_COLOR_DIM}`
          : `${COLORS.MAIN_BG_COLOR} ${COLORS.HOVER_BG_COLOR}`
        } 
        ${COLORS.FONT_COLOR_MAIN} 
        ${COLORS.HOVER_TEXT_COLOR} 
        ${COLORS.FOCUS_OUTLINE} 
        ${COLORS.FOCUS_BORDER_COLOR} 
        ${COLORS.FOCUS_RING} 
        ${COLORS.FOCUS_RING_COLOR} 
        ${COLORS.FOCUS_RING_OPACITY}
      `}
      style={{ width: buttonSize, height: buttonSize }}
    >
      {buttonText}
    </button>
  );
};
