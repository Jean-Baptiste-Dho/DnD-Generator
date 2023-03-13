import { handleCalcRemaining } from "./remaining_pt.js";
import {
  bjoLegend,
  wulLegend,
  ravLegend,
  hanLegend,
  skills,
} from "./variables.js";

// document.addEventListener("DOMContentLoaded", () => {
//   const tribPerso = document.querySelector("#list-template-2");
//   tribPerso.addEventListener("click", HandleBonusTribs);
// });

export const HandleBonusTribs = () => {
  const tribPerso = document.querySelector("#list-template-2");
  const legend = document.querySelector(".legend-2");
  switch (tribPerso.value) {
    /*
    skills = ["Frc", "Cst", "Agi", "Vit", "Int", "Pcp", "Chc"]
                0      1      2      3      4      5      6 
    */

    case "Björner":
      attribution2(5, 0, -5, 4);
      handleCalcRemaining();
      legend.innerHTML = bjoLegend;
      break;

    case "Wülwer":
      attribution2(5, 5, -5, 1);
      handleCalcRemaining();
      legend.innerHTML = wulLegend;
      break;

    case "Ravner":
      attribution2(5, 4, -5, 0);
      handleCalcRemaining();
      legend.innerHTML = ravLegend;
      break;

    case "Hanïer":
      attribution2(10, 6, -5, 3);
      handleCalcRemaining();
      legend.innerHTML = hanLegend;
      break;

    default:
      attribution2("", 8, "", 8);
      handleCalcRemaining();
      legend.innerHTML = "";
      break;
  }
};

/**
 * Tribes modifications
 * @param {int} valBonus define BONUS value
 * @param {int} Car1 targeted Bonus skill
 * @param {int} valMalus define MALUS value ( !!! <0 !!!)
 * @param {int} Car2 targeted Malus skill
 */
const attribution2 = (valBonus, Car1, valMalus, Car2) => {
  for (let i = 0; i < 7; i++) {
    let bonusText = document.querySelector(`#tribText${skills[i]}`);
    let bonusValue = document.querySelector(`#tribVal${skills[i]}`);
    if (i == Car1) {
      bonusText.removeAttribute("class");
      bonusText.classList.add("bonus");
      bonusValue.innerHTML = valBonus;
      bonusValue.value = valBonus;
    } else if (i == Car2) {
      bonusText.removeAttribute("class");
      bonusText.classList.add("malus");
      bonusValue.innerHTML = valMalus;
      bonusValue.value = valMalus;
    } else {
      bonusText.removeAttribute("class");
      bonusText.classList.add("hideText");
      bonusValue.innerHTML = 0;
      bonusValue.value = 0;
    }
  }
};
