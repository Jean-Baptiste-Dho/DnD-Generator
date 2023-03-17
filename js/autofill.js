import { calcSkill } from "./calc_skills.js";
import { handleCalcRemaining } from "./remaining_pt.js";
import {
  skills,
  berSkills,
  ranSkills,
  lokSkills,
  skaSkills,
  solSkills,
} from "./variables.js";

export const handleAutoFill = () => {
  const classPerso = document.querySelector("#list-template-1");

  switch (classPerso.value) {
    case "Berserker":
      attribution3(skills, berSkills);
      calcSkill();
      handleCalcRemaining();
      alert("Vous avez choisi la classe Berserker !");
      break;
    case "Ranger":
      attribution3(skills, ranSkills);
      calcSkill();
      handleCalcRemaining();
      alert("Vous avez choisi la classe Ranger !");
      break;
    case "Loeknir/Völva":
      attribution3(skills, lokSkills);
      calcSkill();
      handleCalcRemaining();
      alert("Vous avez choisi la classe Loeknir/Völva !");
      break;
    case "Skald":
      attribution3(skills, skaSkills);
      calcSkill();
      handleCalcRemaining();
      alert("Vous avez choisi la classe Skald !");
      break;
    case "Solitaire":
      attribution3(skills, solSkills);
      calcSkill();
      handleCalcRemaining();
      alert("Vous avez choisi la classe Vanilla !");
      break;
    default:
      alert(
        'Choissiez une Classe (recommandé).\n Si vous ne voulez pas adopter de classe ou de peuple, choissiez "Solitaire"/"Apatride"'
      );
      break;
  }
};

/**
 *
 * @param {string} listCarac Liste de caractéristiques ciblées (cf skills)
 * @param {string} listClass Liste des caractéristique pré-établies (cf value autofill)
 */
const attribution3 = (listCarac, listClass) => {
  for (let i = 0; i <= 5; i++) {
    // let tribModif = document.querySelector(`#tribVal${listCarac[i]}`);
    // let classModif = document.querySelector(`#classVal${listCarac[i]}`);

    let autofillAttribution = document.querySelector(`#value${listCarac[i]}`);
    autofillAttribution.value = listClass[i];
    // }
  }
};
