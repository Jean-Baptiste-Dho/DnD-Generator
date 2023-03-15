import { skills } from "./variables.js";
/**
 * recupère les valeurs dans les bonus/malus et de l'input pour faire le calcul des pt restants
 */
export const handleCalcRemaining = () => {
  for (let i = 0; i < 7; i++) {
    if (skills[i] !== "Chc") {
      const target2 = parseInt(
        document.querySelector(`#classVal${skills[i]}`).value,
        10
      );
      const target3 = parseInt(
        document.querySelector(`#tribVal${skills[i]}`).value,
        10
      );
      let target4 = parseInt(
        document.querySelector(`#value${skills[i]}`).value,
        10
      );

      let total = 50 - (target2 + target3 + target4);

      // console.log(skills[i]);
      // console.log(target2);
      // console.log(target3);
      // console.log(target4);
      // console.log(total);

      const target1 = document.querySelector(`#maxAvailablePt${skills[i]}`);

      if (total >= 0) {
        target1.innerHTML = total;
      } else if (total < 0) {
        target1.innerHTML = `remove ${total * -1} point(s)`;
      }
    } else {
      console.log("ca marche");
    }
  }
};
