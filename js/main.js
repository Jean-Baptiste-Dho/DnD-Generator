import { handleImg } from "./img.js";
import { calcSkill } from "./calc_skills.js";
import { HandleBonusJobs } from "./job.js";
import { HandleBonusTribs } from "./tribes.js";
//import { setMarginPadding } from "./mef_span.js";
import { handleCalcRemaining } from "./remaining_pt.js";
import { handleAutoFill } from "./autofill.js";
import { skills } from "./variables.js";
import { initialisation } from "./initialisation.js";

initialisation();

handleImg();

for (let i = 0; i < 6; i++) {
  let path = document.querySelector(`#value${skills[i]}`);
  path.addEventListener("keyup", calcSkill);
  path.addEventListener("keyup", handleCalcRemaining);
}

const classPerso = document.querySelector("#list-template-1");
classPerso.addEventListener("click", HandleBonusJobs);

const tribPerso = document.querySelector("#list-template-2");
tribPerso.addEventListener("click", HandleBonusTribs);

const autofill = document.querySelector("#af");
autofill.addEventListener("click", handleAutoFill);

//setMarginPadding();
