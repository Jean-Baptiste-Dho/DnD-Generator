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
import { verification } from "./verification.js";

export const HandleBonusTribes = () => {
  switch (listTemplate2.value) {
    /*
    skills = ["Frc", "Cst", "Agi", "Vit", "Int", "Pcp", "Chc"]
                0      1      2      3      4      5      6 
    */

    case "Björner":
      legend2.innerHTML = bjoLegend;
      attribution2(5, 0, -5, 4);
      handleCalcRemaining();
      calcSkill();
      verification();
      break;

    case "Wülwer":
      legend2.innerHTML = wulLegend;
      attribution2(5, 5, -5, 1);
      handleCalcRemaining();
      calcSkill();
      verification();
      break;

    case "Ravner":
      legend2.innerHTML = ravLegend;
      attribution2(5, 4, -5, 0);
      handleCalcRemaining();
      calcSkill();
      verification();
      break;

    case "Hanïer":
      legend2.innerHTML = hanLegend;
      attribution2(10, 6, -10, 3);
      handleCalcRemaining();
      calcSkill();
      verification();
      break;

    case "Apatride":
      legend2.innerHTML = apaLegend;
      attribution2(0, 8, 0, 8);
      handleCalcRemaining();
      calcSkill();
      verification();
      break;

    default:
      legend2.innerHTML =
        "Choissiez une classe pour en apprendre plus sur ses forces et faiblesses.";
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
