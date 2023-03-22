import { skills, total } from "./variables.js";

export const calcSkill = () => {
  let reste = 0;
  let target = document.querySelector("#calcSkillTarget");
  let tl1 = document.querySelector("#tl1");
  for (let i = 0; i < skills.length; i++) {
    if (skills[i] !== "Chc") {
      let target2 = document.querySelector(`#classVal${skills[i]}`);
      let target3 = document.querySelector(`#tribVal${skills[i]}`);
      let target4 = document.querySelector(`#value${skills[i]}`);
      reste +=
        parseInt(target2.value, 10) +
        parseInt(target3.value, 10) +
        parseInt(target4.value, 10);
      target.innerHTML = total - reste;
      if (total - reste == 0) {
        target.style.color = "green";
        tl1.style.color = "green";
      } else {
        target.style.color = "red";
        tl1.style.color = "red";
      }
    } else {
      let target2 = document.querySelector(`#classVal${skills[i]}`);
      let target3 = document.querySelector(`#tribVal${skills[i]}`);
      reste += parseInt(target2.value, 10) + parseInt(target3.value, 10);
      target.innerHTML = total - reste;
      if (total - reste == 0) {
        target.style.color = "green";
      } else {
        target.style.color = "red";
      }
    }
  }
};
