let frc = document.querySelector("#frcValue");
let cst = document.querySelector("#cstValue");
let int = document.querySelector("#intValue");
let vit = document.querySelector("#vitValue");
let agi = document.querySelector("#agiValue");
let pcp = document.querySelector("#pcpValue");
let total = 300;

let target = document.querySelector("#calcSkillTarget");

export let calcSkill = () => {
  return (target.innerHTML =
    total -
    frc.value -
    cst.value -
    int.value -
    vit.value -
    agi.value -
    pcp.value);
};

frc.addEventListener("keyup", calcSkill);
cst.addEventListener("keyup", calcSkill);
int.addEventListener("keyup", calcSkill);
vit.addEventListener("keyup", calcSkill);
agi.addEventListener("keyup", calcSkill);
pcp.addEventListener("keyup", calcSkill);
