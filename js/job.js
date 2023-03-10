import { handleCalcRemaining } from "./remaining_pt.js";
import {
  berLegend,
  ranLegend,
  lokLegend,
  skaLegend,
  skills,
} from "./variables.js";

document.addEventListener("DOMContentLoaded", () => {
  const classPerso = document.querySelector("#list-template-1");
  classPerso.addEventListener("click", HandleBonusJobs);
});

export let HandleBonusJobs = () => {
  const legend = document.querySelector(".legend-1");
  const classPerso = document.querySelector("#list-template-1");
  switch (classPerso.value) {
    /* 
    skills = ["Frc", "Cst", "Agi", "Vit", "Int", "Pcp", "Chc"]
                0      1      2      3      4      5      6 
    */

    case "Berserker":
      attribution(10, 0, 1);
      handleCalcRemaining();
      legend.innerHTML = berLegend;
      break;

    case "Ranger":
      attribution(10, 2, 3);
      handleCalcRemaining();
      legend.innerHTML = ranLegend;
      break;

    case "Loeknir/Völva":
      attribution(10, 4, 5);
      handleCalcRemaining();
      legend.innerHTML = lokLegend;
      break;

    case "Skald":
      attribution(20, 6);
      handleCalcRemaining();
      legend.innerHTML = skaLegend;
      break;

    default:
      attribution("", 8);
      handleCalcRemaining();
      legend.innerHTML = "";
      break;
  }
};

/**
 * Défini la valeur du bonus pour les carac1 et carac 2
 * @param {int} Valbonus
 * @param {int} Car1
 * @param {int} Car2
 */
const attribution = (Valbonus, Car1, Car2) => {
  for (let i = 0; i < 7; i++) {
    let bonusText = document.querySelector(`#classText${skills[i]}`);
    let bonusValue = document.querySelector(`#valTrib${skills[i]}`);
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
