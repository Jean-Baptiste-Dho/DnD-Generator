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

calcSkill();
for (let i = 0; i < 6; i++) {
  let path = document.querySelector(`#value${skills[i]}`);
  path.addEventListener("keyup", calcSkill);
  path.addEventListener("keyup", handleCalcRemaining);
}

//HandleBonusJobs();
const classPerso = document.querySelector("#list-template-1");
classPerso.addEventListener("click", HandleBonusJobs);
classPerso.addEventListener("click", calcSkill);
classPerso.addEventListener("click", handleCalcRemaining);

//HandleBonusTribs();
const tribPerso = document.querySelector("#list-template-2");
tribPerso.addEventListener("click", HandleBonusTribs);
tribPerso.addEventListener("click", calcSkill);
tribPerso.addEventListener("click", handleCalcRemaining);

//handleAutoFill();
const autofill = document.querySelector("#af");
autofill.addEventListener("click", handleAutoFill);

//setMarginPadding();

//skills.forEach((element) => console.log(element));

// let path = skills.forEach((element) =>
//   document.querySelector(`#value${element}`)
// );
