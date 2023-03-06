const classPerso = document.querySelector("#job");

export let HandleBonusJobs = () => {
  switch (classPerso.value) {
    case "berserker":
      attribution(10, 0, 1);
      break;

    case "ranger":
      attribution(10, 2, 3);
      break;

    case "loekVol":
      attribution(10, 4, 5);
      break;

    case "skald":
      attribution(20, 6);
      break;

    default:
      break;
  }
};

export const test = () => {};

classPerso.addEventListener("click", HandleBonusJobs);

const attribution = (Valbonus, Car1, Car2) => {
  const skill = ["Frc", "Cst", "Agi", "Vit", "Int", "Pcp", "Chc"];
  for (let i = 0; i < 7; i++) {
    if (i == Car1 || i == Car2) {
      document.querySelector(`#bonusClass${skill[i]}`).innerHTML =
        "Class Bonus +" + Valbonus;
    } else {
      document.querySelector(`#bonusClass${skill[i]}`).innerHTML = "";
    }
  }
};
