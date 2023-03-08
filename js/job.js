import { handleCalcRemaining } from "./remaining_pt.js";

const classPerso = document.querySelector("#jobs");

export let HandleBonusJobs = () => {
  switch (classPerso.value) {
    case "berserker":
      attribution(10, 0, 1);
      handleCalcRemaining();
      break;

    case "ranger":
      attribution(10, 2, 3);
      handleCalcRemaining();
      break;

    case "loekVol":
      attribution(10, 4, 5);
      handleCalcRemaining();
      break;

    case "skald":
      attribution(20, 6);
      handleCalcRemaining();
      break;

    default:
      break;
  }
};

classPerso.addEventListener("click", HandleBonusJobs);

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
