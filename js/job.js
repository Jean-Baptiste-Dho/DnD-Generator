import { handleCalcRemaining } from "./remaining_pt.js";
import { calcSkill } from "./calc_skills.js";
import {
  berLegend,
  ranLegend,
  lokLegend,
  skaLegend,
  solLegend,
  skills,
} from "./variables.js";
import { verification } from "./verification.js";

// document.addEventListener("DOMContentLoaded", () => {
//   const classPerso = document.querySelector("#listTemplate1");
//   classPerso.addEventListener("click", HandleBonusJobs);
// });

export let HandleBonusJobs = () => {
  switch (listTemplate1.value) {
    /* 
    skills = ["Frc", "Cst", "Agi", "Vit", "Int", "Pcp", "Chc"]
                0      1      2      3      4      5      6 
    */

    case "Berserker":
      legend1.innerHTML = berLegend;
      attribution(10, 0, 1);
      calcSkill();
      handleCalcRemaining();
      verification();
      break;

    case "Ranger":
      legend1.innerHTML = ranLegend;
      attribution(10, 2, 3);
      calcSkill();
      handleCalcRemaining();
      verification();
      break;

    case "Loeknir/Völva":
      legend1.innerHTML = lokLegend;
      attribution(10, 4, 5);
      calcSkill();
      handleCalcRemaining();
      verification();
      break;

    case "Skald":
      legend1.innerHTML = skaLegend;
      attribution(20, 6, 8);
      calcSkill();
      handleCalcRemaining();
      verification();
      break;

    case "Solitaire":
      legend1.innerHTML = solLegend;
      attribution(10, 6, 8);
      calcSkill();
      handleCalcRemaining();
      verification();
      break;

    default:
      legend1.innerHTML =
        "Choissiez un peuple pour en apprendre plus sur son fonctionnement.";
      attribution("", 8);
      calcSkill();
      handleCalcRemaining();
      verification();
      break;
  }
};

/**
 * Défini la valeur du bonus pour les carac1 et carac 2
 * @param {int} Valbonus valeur du bonus (idem pour chaque carac. "8" pour ne définir aucune attribution)
 * @param {int} Car1 première carac a bénéficier du bonus
 * @param {int} Car2 deuxieme carac à bénéficier du bonus
 */
const attribution = (Valbonus, Car1, Car2) => {
  for (let i = 0; i <= 6; i++) {
    let bonusText = document.querySelector(`#classText${skills[i]}`);
    let bonusValue = document.querySelector(`#classVal${skills[i]}`);
    if (i == Car1 || i == Car2) {
      bonusText.classList.replace("hideText", "bonus");
      bonusValue.value = Valbonus;
      bonusValue.innerHTML = Valbonus;
    } else {
      bonusText.classList.replace("bonus", "hideText");
      bonusValue.value = 0;
      bonusValue.innerHTML = 0;
    }
  }
};
