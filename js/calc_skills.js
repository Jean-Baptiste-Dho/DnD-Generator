import { skills, total } from "./variables.js";

export const calcSkill = () => {
  let reste = 0;
  for (let i = 0; i <= 6; i++) {
    if (i < 6) {
      let target2 = document.querySelector(`#classVal${skills[i]}`).value;
      let target3 = document.querySelector(`#tribVal${skills[i]}`).value;
      let target4 = parseInt(
        document.querySelector(`#value${skills[i]}`).value,
        10
      );
      reste += target2 + target3 + target4;
      calcSkillTarget.innerHTML = total - reste;
    } else {
      reste += classValChc.value + tribValChc.value;
      calcSkillTarget.innerHTML = total - reste;
      if (total - reste === 0) {
        tl1.removeAttribute("class");
        tl1.classList.add("bonus");
      } else {
        tl1.removeAttribute("class");
        tl1.classList.add("malus");
      }
    }
  }
};
