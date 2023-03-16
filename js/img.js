let img = document.querySelector("#imgSelect");
let target = document.querySelector("#targetImgPortrait");
img.addEventListener("click", handleImg);

export function handleImg() {
  target.src = "assets/" + img.value;
}
