import { skills, total } from "./variables.js";

export const calcSkill = () => {
  let reste = 0;
  for (let i = 0; i < skills.length; i++) {
    if (skills[i] !== "Chc") {
      let target2 = document.querySelector(`#classVal${skills[i]}`);
      let target3 = document.querySelector(`#tribVal${skills[i]}`);
      let target4 = document.querySelector(`#value${skills[i]}`);
      reste +=
        parseInt(target2.value, 10) +
        parseInt(target3.value, 10) +
        parseInt(target4.value, 10);
      calcSkillTarget.innerHTML = total - reste;
      if (total - reste == 0) {
        calcSkillTarget.style.color = "green";
        tl1.style.color = "green";
      } else {
        calcSkillTarget.style.color = "red";
        tl1.style.color = "green";
      }
    } else {
      let target2 = document.querySelector(`#classVal${skills[i]}`);
      let target3 = document.querySelector(`#tribVal${skills[i]}`);
      reste += parseInt(target2.value, 10) + parseInt(target3.value, 10);
      calcSkillTarget.innerHTML = total - reste;
      if (total - reste == 0) {
        calcSkillTarget.style.color = "green";
      } else {
        calcSkillTarget.style.color = "red";
      }
    }
  }
};
