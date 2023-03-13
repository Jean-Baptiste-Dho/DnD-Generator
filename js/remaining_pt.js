import { skills } from "./variables.js";

export const handleCalcRemaining = () => {
  for (let i = 0; i <= 5; i++) {
    const target1 = document.querySelector(`#maxAvailablePt${skills[i]}`);
    const target2 = document.querySelector(`#valClass${skills[i]}`);
    const target3 = document.querySelector(`#valTrib${skills[i]}`);
    //const target4 = document.querySelector(`#value${skills[i]}`);
    let total = 50 - (target2.value + target3.value + path.value);

    if (total >= 0) {
      target1.innerHTML = total;
    } else if (total < 0) {
      target1.innerHTML = `remove ${total * -1} point(s)`;
    }
  }
};
