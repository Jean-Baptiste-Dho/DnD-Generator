import { skillsNoLuck, maxPt, minPt } from "./variables.js";

export const verification = () => {
  let validator = 0;
  let validatorTot = 0;
  let validatorName = 0;
  let validatorJobs = 0;
  let validatorTribes = 0;

  if (nameInput.value) {
    validatorName = "0";
    console.log("validatorName : " + validatorName);
  } else {
    validatorName = "n";
  }

  if (listTemplate1.value !== "") {
    validatorJobs = "0";
    console.log("validatorJobs : " + validatorJobs);
  } else {
    validatorJobs = "j";
  }

  if (listTemplate2.value !== "") {
    validatorTribes = "0";
    console.log("validatorTribes : " + validatorTribes);
  } else {
    validatorTribes = "p";
  }

  if (calcSkillTarget.innerHTML == "0") {
    validatorTot = "0";
    console.log("validatorTot : " + validatorTot);
  } else {
    validatorTot = "t";
  }

  caracMaxCheck();

  caracMinCheck();

  validator =
    validatorName +
    validatorJobs +
    validatorTribes +
    validatorTot +
    caracMaxCheck() +
    caracMinCheck();
  return validator;
};

export const alertCheck = (verificateur) => {
  console.log(verificateur);
  let mot = verificateur;
  let nLetter = mot.indexOf("n");
  let jLetter = mot.indexOf("j");
  let tLetter = mot.indexOf("t");
  let pLetter = mot.indexOf("p");
  let MLetter = mot.indexOf("M");
  let mLetter = mot.indexOf("m");

  if (nLetter !== -1) {
    alert("Veuillez saisir votre nom.");
  } else if (jLetter !== -1) {
    alert(
      'Veuillez saisir une classe.\nSi vous ne souhaitez aucune classe, selectionnez "Solitaire".'
    );
  } else if (pLetter !== -1) {
    alert(
      'Veuillez saisir un peuple.\nSi vous ne souhaitez appartenir à aucun peuple,\n selectionnez "Apatride".'
    );
  } else if (tLetter !== -1) {
    alert("Veuillez attribuez le nombre correct de point.");
  } else if (MLetter !== -1) {
    alert("Une de vos caractéristiques possède trop de point.");
  } else if (mLetter !== -1) {
    alert("Une de vos caractéristiques ne possède pas assez de point.");
  } else {
    alert(
      'Vous pouvez valider la création de votre personnage\nen cliquant ur le boutton "Create".'
    );
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
      validatorMax = "0";
    } else {
      tl2.removeAttribute("class");
      tl2.classList.add("malus");
      validatorMax = "M";
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
      validatorMin = "0";
    } else {
      tl3.removeAttribute("class");
      tl3.classList.add("malus");
      validatorMin = "m";
      break;
    }
  }
  return validatorMin;
};
