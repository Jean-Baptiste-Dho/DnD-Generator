export function handleImg() {
  const img = document.querySelector("#imgSelect");
  const img2 = document.querySelector("#list-template-2");
  let target = document.querySelector("#targetImgPortrait");
  let target2 = document.querySelector("#targetImgList-2");

  target.src = "assets/" + img.value;
  target2.src = "assets/logo/" + img2.value + "-logo.webp";
}
