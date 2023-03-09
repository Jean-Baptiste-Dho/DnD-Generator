import { handleCalcRemaining } from "./remaining_pt.js";
import { berLegend, ranLegend, skaLegend, lokLegend } from "./legends.js";

document.addEventListener("DOMContentLoaded", () => {
  const classPerso = document.querySelector("#list-template-1");
  classPerso.addEventListener("click", HandleBonusJobs);
});

export let HandleBonusJobs = () => {
  const legend = document.querySelector(".legend-1");
  const classPerso = document.querySelector("#list-template-1");
  switch (classPerso.value) {
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

const attribution = (Valbonus, Car1, Car2) => {
  const skill = ["Frc", "Cst", "Agi", "Vit", "Int", "Pcp", "Chc"];
  for (let i = 0; i < 7; i++) {
    if (i == Car1 || i == Car2) {
      document
        .querySelector(`#bonusClass${skill[i]}1`)
        .classList.replace("hideText", "bonus");
      document.querySelector(`#bonusClass${skill[i]}`).value = Valbonus;
      document.querySelector(`#bonusClass${skill[i]}`).innerHTML = Valbonus;
    } else {
      document
        .querySelector(`#bonusClass${skill[i]}1`)
        .classList.replace("bonus", "hideText");
      document.querySelector(`#bonusClass${skill[i]}`).value = 0;
      document.querySelector(`#bonusClass${skill[i]}`).innerHTML = 0;
    }
  }
};
