import { skillsNoLuck, maxPt, minPt } from "./variables.js";

export const verifAttribution = () => {
  const unattributePt = document.querySelector("#tl1");
  const unattributePtValue = document.querySelector("#calcSkillTarget");
  const max50Pt = document.querySelector("#tl2");
  const min10Pt = document.querySelector("#tl3");

  if (unattributePtValue.innerHTML == 0) {
    unattributePt.style.color = "green";
    unattributePtValue.style.color = "green";
  } else {
    unattributePt.style.color = "red";
  }

  for (let i = 0; i < skillsNoLuck.length; i++) {
    const target2 = parseInt(
      document.querySelector(`#classVal${skillsNoLuck[i]}`).value,
      10
    );
    const target3 = parseInt(
      document.querySelector(`#tribVal${skillsNoLuck[i]}`).value,
      10
    );
    let target4 = parseInt(
      document.querySelector(`#value${skillsNoLuck[i]}`).value,
      10
    );
    let maxAvalaiblePt = parseInt(
      document.querySelector(`#maxAvailablePt${skillsNoLuck[i]}`).innerHTML,
      10
    );
    let total = maxPt - (target2 + target3 + target4);

    if (total <= maxPt - minPt && total >= 0) {
      min10Pt.style.color = "green";
      max50Pt.style.color = "green";
    } else if (total > maxPt - minPt) {
      max50Pt.style.color = "green";
      min10Pt.style.color = "red";
    } else if (total < 0) {
      max50Pt.style.color = "red";
      min10Pt.style.color = "green";
      break;
    } else {
      max50Pt.style.color = "purple";
      min10Pt.style.color = "purple";
    }
  }
};
