const tribPerso = document.querySelector("#tribe");

export let HandleBonusTribs = () => {
  switch (tribPerso.value) {
    case "bjorner":
      attribution2(5, 0, -5, 4);
      break;

    case "wulwer":
      attribution2(5, 5, -5, 1);
      break;

    case "ravner":
      attribution2(5, 4, -5, 0);
      break;

    case "hanier":
      attribution2(10, 6, -5, 3);
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
      document.querySelector(`#bonusTrib${skill[i]}`).innerHTML =
        "Tribe bonus :+" + valBonus;
    } else if (i == Car2) {
      document.querySelector(`#bonusTrib${skill[i]}`).innerHTML =
        "Tribe malus :" + valMalus;
    } else {
      document.querySelector(`#bonusTrib${skill[i]}`).innerHTML = "";
    }
  }
};
