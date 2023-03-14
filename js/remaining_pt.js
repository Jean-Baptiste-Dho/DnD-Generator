import { skills } from "./variables.js";

export const handleCalcRemaining = () => {
  for (let i = 0; i <= 6; i++) {
    const target2 = document.querySelector(`#classVal${skills[i]}`);
    const target3 = document.querySelector(`#tribVal${skills[i]}`);
    const target4 = document.querySelector(`#value${skills[i]}`);
    let total =
      50 - (target2.value + target3.value + parseInt(target4.value, 10));

    console.log(target2.value);
    console.log(target3.value);
    console.log(target4.value);
    console.log(total);

    const target1 = document.querySelector(`#maxAvailablePt${skills[i]}`);

    if (total >= 0) {
      target1.innerHTML = total;
    } else if (total < 0) {
      target1.innerHTML = `remove ${total * -1} point(s)`;
    }
  }
};
