import { skills } from "./variables.js";

export const setMarginPadding = () => {
  for (let i = 0; i < 7; i++) {
    tribCss = document.querySelector(`#tribText${skills[i]}`);
    classCss = document.querySelector(`#classText${skills[i]}`);
    tribCss.style.margin = "3px";
    tribCss.style.padding = "3px";
    classCss.style.margin = "3px";
    classCss.style.padding = "3px";
  }
};
