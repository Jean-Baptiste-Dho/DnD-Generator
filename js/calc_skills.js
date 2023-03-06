export let calcSkill = () => {
  let frc = document.querySelector("#frcValue");
  let cst = document.querySelector("#cstValue");
  let int = document.querySelector("#intValue");
  let vit = document.querySelector("#vitValue");
  let agi = document.querySelector("#agiValue");
  let pcp = document.querySelector("#pcpValue");
  let total =
    300 - frc.value - cst.value - int.value - vit.value - agi.value - pcp.value;
  let target = document.querySelector("#calcSkillTarget");
  if (target.innerHTML == 0) {
    target.style.color = "green";
    target.innerHTML = total;
  } else {
    target.style.color = "red";
    target.innerHTML = total;
  }
  return (target.innerHTML = total);
};

frc.addEventListener("keyup", calcSkill);
cst.addEventListener("keyup", calcSkill);
int.addEventListener("keyup", calcSkill);
vit.addEventListener("keyup", calcSkill);
agi.addEventListener("keyup", calcSkill);
pcp.addEventListener("keyup", calcSkill);
