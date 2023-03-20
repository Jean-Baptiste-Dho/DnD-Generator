import { skills, total } from "./variables.js";

export const calcSkill = () => {
  let reste = 0;
  let target = document.querySelector("#calcSkillTarget");
  for (let i = 0; i < skills.length - 1; i++) {
    if (skills[i] !== "Chc") {
      let target2 = document.querySelector(`#classVal${skills[i]}`);
      let target3 = document.querySelector(`#tribVal${skills[i]}`);
      let target4 = document.querySelector(`#value${skills[i]}`);
      reste +=
        parseInt(target2.value, 10) +
        parseInt(target3.value, 10) +
        parseInt(target4.value, 10);
    } else {
      let target2 = document.querySelector(`#classVal${skills[i]}`);
      let target3 = document.querySelector(`#tribVal${skills[i]}`);
      reste += parseInt(target2.value, 10) + parseInt(target3.value, 10);
    }
  }
  if (target.innerHTML === 0) {
    target.innerHTML = total - reste;
    target.style.color = "green";
  } else {
    target.innerHTML = total - reste;
    target.style.color = "red";
  }
};
