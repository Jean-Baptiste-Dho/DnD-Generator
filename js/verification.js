export const verifAttribution = () => {
  const unattributePt = document.querySelector("#tl1");
  //   const max50Pt = document.querySelector("#tl1");
  //   const min10Pt = document.querySelector("#tl1");

  if (unattributePt.innerHTML !== "0") {
    unattributePt.style.color = "red";
  } else {
    unattributePt.style.color = "green";
  }
};
