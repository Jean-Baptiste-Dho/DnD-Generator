import { skills } from "./variables.js";

export const initialisation = () => {
  skills;
  for (let i = 0; i < 7; i++) {
    const classVal = document.querySelector(`#classVal${skills[i]}`);
    const tribVal = document.querySelector(`#tribVal${skills[i]}`);
    classVal.value = 0;
    classVal.innerHTML = "0";
    tribVal.value = 0;
    tribVal.innerHTML = "0";
  }
};
