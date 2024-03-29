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
import { verification } from "./verification.js";

export const handleAutoFill = () => {
  switch (listTemplate1.value) {
    case "Berserker":
      attribution3(skills, berSkills);
      calcSkill();
      handleCalcRemaining();
      verification();
      alert("Vous avez choisi la classe Berserker !");
      break;
    case "Ranger":
      attribution3(skills, ranSkills);
      calcSkill();
      handleCalcRemaining();
      verification();
      alert("Vous avez choisi la classe Ranger !");
      break;
    case "Loeknir/Völva":
      attribution3(skills, lokSkills);
      calcSkill();
      handleCalcRemaining();
      verification();
      alert("Vous avez choisi la classe Loeknir/Völva !");
      break;
    case "Skald":
      attribution3(skills, skaSkills);
      calcSkill();
      handleCalcRemaining();
      verification();
      alert("Vous avez choisi la classe Skald !");
      break;
    case "Solitaire":
      attribution3(skills, solSkills);
      calcSkill();
      handleCalcRemaining();
      verification();
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
    let tribModif = document.querySelector(`#tribVal${listCarac[i]}`);
    let autofillAttribution = document.querySelector(`#value${listCarac[i]}`);

    autofillAttribution.value = listClass[i] - tribModif.value;
  }
};
