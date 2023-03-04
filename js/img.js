let img = document.querySelector("#imgPortrait");
let target = document.querySelector("#targetImg");
img.addEventListener("click", handleImg);

export function handleImg() {
  target.src = "assets/" + img.value;
}
