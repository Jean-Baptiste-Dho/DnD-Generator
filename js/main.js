import { handleImg } from "./img.js";
import { calcSkill } from "./calc_skills.js";
import { HandleBonusJobs } from "./job.js";
import { HandleBonusTribes } from "./tribes.js";
import { handleCalcRemaining } from "./remaining_pt.js";
import { handleAutoFill } from "./autofill.js";
import { skills } from "./variables.js";
import { initialisation } from "./initialisation.js";
import { verifAttribution } from "./verification.js";

initialisation();

verifAttribution();

const img = document.querySelector("#imgSelect");
img.addEventListener("click", handleImg);
const img2 = document.querySelector("#list-template-2");
img2.addEventListener("click", handleImg);

for (let i = 0; i < 6; i++) {
  let path = document.querySelector(`#value${skills[i]}`);
  path.addEventListener("keyup", handleCalcRemaining);
  path.addEventListener("keyup", calcSkill);
}

const classPerso = document.querySelector("#list-template-1");
classPerso.addEventListener("click", HandleBonusJobs);

const tribPerso = document.querySelector("#list-template-2");
tribPerso.addEventListener("click", HandleBonusTribes);

const autofill = document.querySelector("#af");
autofill.addEventListener("click", handleAutoFill);
