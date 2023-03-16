import { skills, total } from "./variables.js";

export const calcSkill = () => {
  let reste = 0;
  let target = document.querySelector("#calcSkillTarget");
  for (let i = 0; i < 7; i++) {
    if (skills[i] !== "Chc") {
      let target4 = parseInt(
        document.querySelector(`#value${skills[i]}`).value,
        10
      );
      let target2 = parseInt(
        document.querySelector(`#classVal${skills[i]}`).value,
        10
      );
      let target3 = parseInt(
        document.querySelector(`#tribVal${skills[i]}`).value,
        10
      );
      reste += target2 + target3 + target4;
    } else {
      let target2 = parseInt(
        document.querySelector(`#classVal${skills[i]}`).value,
        10
      );
      let target3 = parseInt(
        document.querySelector(`#tribVal${skills[i]}`).value,
        10
      );
      reste += target2 + target3;
    }
  }
  if (target.innerHTML != 0) {
    target.innerHTML = total - reste;
    target.style.color = "red";
  } else {
    target.innerHTML = total - reste;
    target.style.color = "green";
  }
};
