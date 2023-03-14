import { skills } from "./variables.js";

export const calcSkill = () => {
  let target = document.querySelector("#calcSkillTarget");

  let total = 140;
  for (let i = 0; i <= 5; i++) {
    let test = parseInt(document.querySelector(`#value${skills[i]}`).value, 10);
    let target2 = parseInt(
      document.querySelector(`#classVal${skills[i]}`).value,
      10
    );
    let target3 = parseInt(
      document.querySelector(`#tribVal${skills[i]}`).value,
      10
    );

    total -= test + target2 + target3;
    console.log(total);
  }
  if (target.innerHTML === 0) {
    target.innerHTML = total;
    target.style.color = "green";
  } else {
    target.innerHTML = total;
    target.style.color = "red";
  }
};
