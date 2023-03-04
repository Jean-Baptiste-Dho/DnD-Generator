/* import Test from "./user.js"; //import OBJECT OR CLASS from
import { test } from "./user.js"; //import FUNCTION from
import { function1, function2 } from "./fonctions.js"; //import MULTIPLE-FUNCTION from
import { function3 as pomme, function4 as clafouti } from "./fonctions.js"; //import FUNCTION AS ALIAS from
import "./class1.js"; //import DEFAULT from
import Rectangle from "./class1.js"; */
import { handleImg } from "./img.js";
import { calcSkill } from "./calc_skills.js";
import { HandleBonusJobs, test } from "./job.js";

handleImg();

calcSkill();

HandleBonusJobs();

test();
/* const testClass = new Test("yvan", "dupoisson",50)
console.log(testClass)

test()

function1(3,7)

function2(5,5)

pomme(9,3)

clafouti(6,5)

const polygone = new Rectangle (5,13)
console.log(polygone) */
