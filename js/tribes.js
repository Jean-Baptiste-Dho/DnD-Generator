import { handleCalcRemaining } from "./remaining_pt.js";

const tribPerso = document.querySelector("#tribe");

export let HandleBonusTribs = () => {
  switch (tribPerso.value) {
    case "bjorner":
      attribution2(5, 0, -5, 4);
      handleCalcRemaining();
      break;

    case "wulwer":
      attribution2(5, 5, -5, 1);
      handleCalcRemaining();
      break;

    case "ravner":
      attribution2(5, 4, -5, 0);
      handleCalcRemaining();
      break;

    case "hanier":
      attribution2(10, 6, -5, 3);
      handleCalcRemaining();
      break;

    default:
      break;
  }
};

tribPerso.addEventListener("click", HandleBonusTribs);

const attribution2 = (valBonus, Car1, valMalus, Car2) => {
  const skill = ["Frc", "Cst", "Agi", "Vit", "Int", "Pcp", "Chc"];
  for (let i = 0; i < 7; i++) {
    if (i == Car1) {
      document
        .querySelector(`#bonusTrib${skill[i]}1`)
        .classList.replace("malus", "bonus");
      document
        .querySelector(`#bonusTrib${skill[i]}1`)
        .classList.remove("hideText");
      document.querySelector(`#bonusTrib${skill[i]}`).innerHTML = valBonus;
      document.querySelector(`#bonusTrib${skill[i]}`).value = valBonus;
    } else if (i == Car2) {
      document
        .querySelector(`#bonusTrib${skill[i]}1`)
        .classList.replace("bonus", "malus");
      document
        .querySelector(`#bonusTrib${skill[i]}1`)
        .classList.remove("hideText");
      document.querySelector(`#bonusTrib${skill[i]}`).innerHTML = valMalus;
      document.querySelector(`#bonusTrib${skill[i]}`).value = valMalus;
    } else {
      document
        .querySelector(`#bonusTrib${skill[i]}1`)
        .classList.add("hideText");
      document.querySelector(`#bonusTrib${skill[i]}`).innerHTML = 0;
      document.querySelector(`#bonusTrib${skill[i]}`).value = 0;
    }
  }
};
