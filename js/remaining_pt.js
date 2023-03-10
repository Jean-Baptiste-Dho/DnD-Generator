import { skills } from "./variables.js";

let frc = document.querySelector("#valueFrc");
let cst = document.querySelector("#valueCst");
let int = document.querySelector("#valueInt");
let vit = document.querySelector("#valueVit");
let agi = document.querySelector("#valueAgi");
let pcp = document.querySelector("#valuePcp");

export const handleCalcRemaining = () => {
  for (let i = 0; i <= 5; i++) {
    const target1 = document.querySelector(`#maxAvailablePt${skills[i]}`);
    const target2 = document.querySelector(`#classVal${skills[i]}`).value;
    const target3 = document.querySelector(`#tribVal${skills[i]}`).value;

    let total =
      50 -
      (target2 +
        target3 +
        document.querySelector(`#value${skills[i]}`).value * 1);

    if (total >= 0) {
      target1.innerHTML = total;
    } else if (total < 0) {
      target1.innerHTML = `remove ${total * -1} point(s)`;
    }
  }
};

frc.addEventListener("keyup", handleCalcRemaining);
cst.addEventListener("keyup", handleCalcRemaining);
int.addEventListener("keyup", handleCalcRemaining);
vit.addEventListener("keyup", handleCalcRemaining);
agi.addEventListener("keyup", handleCalcRemaining);
pcp.addEventListener("keyup", handleCalcRemaining);
