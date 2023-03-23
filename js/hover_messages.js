import {
  agiTomato,
  chcTomato,
  cstTomato,
  frcTomato,
  intTomato,
  pcpTomato,
  skills,
  vitTomato,
} from "./variables.js";

export const setSkillsTitle = () => {
  for (let i = 0; i <= 6; i++) {
    const target = document.querySelector(`#${skills[i]}`);
    switch (target.id) {
      case "Frc":
        target.title = frcTomato;
        break;
      case "Cst":
        target.title = cstTomato;
        break;
      case "Agi":
        target.title = agiTomato;
        break;
      case "Vit":
        target.title = vitTomato;
        break;
      case "Int":
        target.title = intTomato;
        break;
      case "Pcp":
        target.title = pcpTomato;
        break;
      case "Chc":
        target.title = chcTomato;
        break;
      default:
        console.log("erreur");
    }
  }
};
