import { handleImg } from "./img.js";
import { calcSkill } from "./calc_skills.js";
import { HandleBonusJobs } from "./job.js";
import { HandleBonusTribes } from "./tribes.js";
import { handleCalcRemaining } from "./remaining_pt.js";
import { handleAutoFill } from "./autofill.js";
import { skills } from "./variables.js";
import { initialisation } from "./initialisation.js";
import { verification, alertCheck } from "./verification.js";
import { setSkillsTitle } from "./hover_messages.js";

initialisation();

setSkillsTitle();

for (let i = 0; i < 6; i++) {
  let path = document.querySelector(`#value${skills[i]}`);
  path.addEventListener("keyup", () => {
    handleCalcRemaining();
    calcSkill();
    verification();
  });
}

listTemplate1.addEventListener("click", HandleBonusJobs);

listTemplate2.addEventListener("click", () => {
  HandleBonusTribes();
  handleImg();
});

autoFillButton.addEventListener("click", handleAutoFill);

check.addEventListener("click", () => {
  let validator = verification();
  alertCheck(validator);
});

imgSelect.addEventListener("click", handleImg);
