import { handleImg } from "./img.js";
import { calcSkill } from "./calc_skills.js";
import { HandleBonusJobs } from "./job.js";
import { HandleBonusTribs } from "./tribes.js";
import { setMarginPadding } from "./mef_span.js";
import { handleCalcRemaining } from "./remaining_pt.js";

handleImg();

calcSkill();

HandleBonusJobs();

HandleBonusTribs();

setMarginPadding();

handleCalcRemaining();

//trib();
/* const testClass = new Test("yvan", "dupoisson",50)
console.log(testClass)

test()

function1(3,7)

function2(5,5)

pomme(9,3)

clafouti(6,5)

const polygone = new Rectangle (5,13)
console.log(polygone) */
