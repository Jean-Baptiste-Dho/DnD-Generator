export const setMarginPadding = () => {
  const skill = ["Frc", "Cst", "Agi", "Vit", "Int", "Pcp", "Chc"];
  for (let i = 0; i < 7; i++) {
    document.querySelector(`#bonusTrib${skill[i]}1`).style.margin = "3px";
    document.querySelector(`#bonusTrib${skill[i]}1`).style.padding = "3px";
    document.querySelector(`#bonusClass${skill[i]}1`).style.margin = "3px";
    document.querySelector(`#bonusClass${skill[i]}1`).style.padding = "3px";
  }
};
