export const calcSkill = () => {
  let frc = document.querySelector("#valueFrc");
  let cst = document.querySelector("#valueCst");
  let int = document.querySelector("#valueInt");
  let vit = document.querySelector("#valueVit");
  let agi = document.querySelector("#valueAgi");
  let pcp = document.querySelector("#valuePcp");
  let total =
    140 - frc.value - cst.value - int.value - vit.value - agi.value - pcp.value;
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
