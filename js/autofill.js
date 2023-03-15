import { calcSkill } from "./calc_skills.js";
import { jobsList, tribeList, skills } from "./variables.js";

export const handleAutoFill = () => {
  const classPerso = document.querySelector("#list-template-1");

  switch (classPerso.value) {
    case "Berserker":
      alert("Vous avez choisi la classe Berserker !");
      break;
    case "Ranger":
      alert("Vous avez choisi la classe Ranger !");
      break;
    case "Loeknir/Völva":
      alert("Vous avez choisi la classe Loeknir/Völva !");
      break;
    case "Skald":
      alert("Vous avez choisi la classe Skald !");
      break;
    case "Vanilla":
      alert("Vous avez choisi la classe Vanilla ! C'est courageux...");
      break;
    default:
      alert("Choissiez une Classe !");
      break;
  }
};
