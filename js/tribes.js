import { handleCalcRemaining } from "./remaining_pt.js";
import { calcSkill } from "./calc_skills.js";
import {
  bjoLegend,
  wulLegend,
  ravLegend,
  hanLegend,
  apaLegend,
  skills,
} from "./variables.js";

// document.addEventListener("DOMContentLoaded", () => {
//   const tribPerso = document.querySelector("#list-template-2");
//   tribPerso.addEventListener("click", HandleBonusTribes);
// });

export const HandleBonusTribes = () => {
  const tribPerso = document.querySelector("#list-template-2");
  const legend = document.querySelector("#legend-2");
  switch (tribPerso.value) {
    /*
    skills = ["Frc", "Cst", "Agi", "Vit", "Int", "Pcp", "Chc"]
                0      1      2      3      4      5      6 
    */

    case "Björner":
      legend.innerHTML = bjoLegend;
      attribution2(5, 0, -5, 4);
      handleCalcRemaining();
      calcSkill();
      break;

    case "Wülwer":
      legend.innerHTML = wulLegend;
      attribution2(5, 5, -5, 1);
      handleCalcRemaining();
      calcSkill();
      break;

    case "Ravner":
      legend.innerHTML = ravLegend;
      attribution2(5, 4, -5, 0);
      handleCalcRemaining();
      calcSkill();
      break;

    case "Hanïer":
      legend.innerHTML = hanLegend;
      attribution2(10, 6, -10, 3);
      //attribution2(-10, 1, -10, 3);
      handleCalcRemaining();
      calcSkill();
      break;

    case "Apatride":
      legend.innerHTML = apaLegend;
      attribution2(0, 8, 0, 8);
      //attribution2(-10, 1, -10, 3);
      handleCalcRemaining();
      calcSkill();
      break;

    default:
      legend.innerHTML = "";
      attribution2(0, 8, 0, 8);
      handleCalcRemaining();
      calcSkill();
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
  for (let i = 0; i <= 6; i++) {
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
