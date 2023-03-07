let frc = document.querySelector("#valueFrc");
let cst = document.querySelector("#valueCst");
let int = document.querySelector("#valueInt");
let vit = document.querySelector("#valueVit");
let agi = document.querySelector("#valueAgi");
let pcp = document.querySelector("#valuePcp");

export const handleCalcRemaining = () => {
  for (let i = 0; i <= 5; i++) {
    const skill = ["Frc", "Cst", "Int", "Vit", "Agi", "Pcp"];

    const target1 = document.querySelector(`#maxPtAvailable${skill[i]}`);

    const target2 = document.querySelector(`#bonusClass${skill[i]}`).value;
    console.log(
      `Class (${skill[i]}) :` +
        document.querySelector(`#bonusClass${skill[i]}`).value
    );

    const target3 = document.querySelector(`#bonusTrib${skill[i]}`).value;
    console.log(
      `Trib (${skill[i]}) :` +
        document.querySelector(`#bonusTrib${skill[i]}`).value
    );

    let total =
      50 -
      (target2 +
        target3 +
        document.querySelector(`#value${skill[i]}`).value * 1);
    console.log(`total =` + total);

    if (total >= 0) {
      console.log(target1.innerHTML);
      target1.innerHTML = total;
    } else if (total < 0) {
      target1.innerHTML = `remove ${total * -1} point(s)`;
    }
  }
};

frc.addEventListener("keyup", handleCalcRemaining);
cst.addEventListener("keyup", handleCalcRemaining);
int.addEventListener("keyup", handleCalcRemaining);
vit.addEventListener("keyup", handleCalcRemaining);
agi.addEventListener("keyup", handleCalcRemaining);
pcp.addEventListener("keyup", handleCalcRemaining);
