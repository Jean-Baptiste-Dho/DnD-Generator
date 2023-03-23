import { skillsNoLuck, maxPt, minPt } from "./variables.js";

export const verification = () => {
  let validator = 0;
  let validatorTot = 0;
  let validatorName = 0;
  let validatorJobs = 0;
  let validatorTribes = 0;

  caracMaxCheck();

  caracMinCheck();

  if (tl1.value == "0") {
    validatorTot = 1;
  }

  if (nameInput.value) {
    validatorName = 1;
  }

  if (listTemplate1.value !== "") {
    validatorJobs = 1;
  }

  if (listTemplate2.value !== "") {
    validatorTribes = 1;
  }
  // console.log(
  //   validatorJobs +
  //     caracMaxCheck() +
  //     caracMinCheck() +
  //     validatorName +
  //     validatorTot +
  //     validatorTribes
  // );
  return (validator =
    validatorJobs +
    caracMaxCheck() +
    caracMinCheck() +
    validatorName +
    validatorTot +
    validatorTribes);
};

export const alertCheck = (verificateur) => {
  switch (verificateur) {
    case 1:
      alert(
        "Il y a un problème dans l'attribution de vos points !\nVérifiez les conditions maximales et minimale des points"
      );
      break;
    case 6:
      alert(
        "Vous n'avez pas attribué tout vos points, ou vous en avez attribué trop !"
      );
      break;
    case 7:
      alert(
        'Tout est valide pour la création de votre avatar ! Vous pouvez cliquez sur "Create"'
      );
      break;
    default:
      alert("Vous n'avez encore rien fait...");
      break;
  }
};

const caracMaxCheck = () => {
  let validatorMax = 0;
  for (let i = 0; i < 6; i++) {
    let target2 = document.querySelector(`#classVal${skillsNoLuck[i]}`).value;
    let target3 = document.querySelector(`#tribVal${skillsNoLuck[i]}`).value;
    let target4 = parseInt(
      document.querySelector(`#value${skillsNoLuck[i]}`).value,
      10
    );
    let somme = target2 + target3 + target4;
    if (somme <= maxPt) {
      tl2.removeAttribute("class");
      tl2.classList.add("bonus");
      validatorMax = 1;
    } else {
      tl2.removeAttribute("class");
      tl2.classList.add("malus");
      validatorMax = 0;
      break;
    }
  }
  return validatorMax;
};

const caracMinCheck = () => {
  let validatorMin = 0;
  for (let i = 0; i < 6; i++) {
    let target2 = document.querySelector(`#classVal${skillsNoLuck[i]}`).value;
    let target3 = document.querySelector(`#tribVal${skillsNoLuck[i]}`).value;
    let target4 = parseInt(
      document.querySelector(`#value${skillsNoLuck[i]}`).value,
      10
    );
    let somme = target2 + target3 + target4;
    if (somme >= minPt) {
      tl3.removeAttribute("class");
      tl3.classList.add("bonus");
      validatorMin = 1;
    } else {
      tl3.removeAttribute("class");
      tl3.classList.add("malus");
      validatorMin = 0;
      break;
    }
  }
  return validatorMin;
};
