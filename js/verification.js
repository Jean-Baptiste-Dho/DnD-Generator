import { skills, maxPt, minPt } from "./variables.js";

export const verification = () => {
  let validator = 0;

  for (let i = 0; i < skills.length; i++) {
    const target = parseInt(
      document.querySelector(`#maxAvailablePt${skills[i]}`).innerHTML,
      10
    );
    const target2 = parseInt(
      document.querySelector(`#classVal${skills[i]}`).value,
      10
    );
    const target3 = parseInt(
      document.querySelector(`#tribVal${skills[i]}`).value,
      10
    );
    let target4 = parseInt(
      document.querySelector(`#value${skills[i]}`).value,
      10
    );
    let total = target2 + target3 + target4;
    let parseTarget = parseInt(target, 10);
    console.log("parseTraget =" + parseTarget + skills[i]);

    if (total <= maxPt) {
      console.log("total =" + total + skills[i]);
      console.log("maxPt =" + maxPt + skills[i]);
      tl3.style.color = "green";
      validator = 3;
    } else {
      console.log("not Ok total =" + total + skills[i]);
      console.log("not OK maxPt =" + maxPt + skills[i]);
      tl2.style.color = "red";
      break;
    }

    if (parseTarget <= maxPt - minPt) {
      console.log("parseTarget =" + parseTarget + skills[i]);
      console.log("maxPt - minPt =" + (maxPt - minPt) + skills[i]);
      tl2.style.color = "green";
      validator = 2;
    } else {
      tl2.style.color = "red";
      break;
    }
  }

  if (calcSkillTarget.value == 0) {
    tl1.style.color = "green";
    calcSkillTarget.style.color = "green";
    validator += 1;
  } else {
    tl1.style.color = "red";
  }

  console.log(validator);
  return validator;
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
