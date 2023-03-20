import { skills, total, maxPt, minPt } from "./variables.js";
/**
 * initialise les valeurs des bonus/malus à int(0) pour futurs calculs de remaining_pt.js
 */
export const initialisation = () => {
  for (let i = 0; i < 7; i++) {
    const classVal = document.querySelector(`#classVal${skills[i]}`);
    const tribVal = document.querySelector(`#tribVal${skills[i]}`);
    const maxAvalaiblePt = document.querySelector(
      `#maxAvailablePt${skills[i]}`
    );

    classVal.value = 0;
    //classVal.innerHTML = "0";
    tribVal.value = 0;
    //tribVal.innerHTML = "0";
    if (skills[i] !== "Chc") {
      maxAvalaiblePt.innerHTML = maxPt;
    }
  }
  document.querySelector(`#calcSkillTarget`).innerHTML = total;
  document.querySelector(`#calcSkillTarget`).value = total;
  document.querySelector(
    `#tl2`
  ).innerHTML = `Maximum ${maxPt}pt / skills.\n(including bonus)`;
  document.querySelector(
    `#tl3`
  ).innerHTML = `Minimum ${minPt}pt / skills.\n(including malus)`;
};
