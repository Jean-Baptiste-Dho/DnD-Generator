import { skills } from "./variables.js";
/**
 * initialise les valeurs des bonus/malus à int(0) pour futurs calculs de remaining_pt.js
 */
export const initialisation = () => {
  skills;
  for (let i = 0; i < 7; i++) {
    // document.addEventListener("DOMContentLoaded", (e) => {
    //   let inputVal = document.querySelector(`#value${skills[i]}`);
    //   //inputVal.value = 20;
    //   //inputVal.innerHTML = "30";
    // });

    const classVal = document.querySelector(`#classVal${skills[i]}`);
    const tribVal = document.querySelector(`#tribVal${skills[i]}`);

    classVal.value = 0;
    classVal.innerHTML = "0";
    tribVal.value = 0;
    tribVal.innerHTML = "0";
  }
};
