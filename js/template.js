export const generateList = (target, choiceListe, labelTitle, itération) => {
  const template = document.querySelector("#list-template");
  const clone = document.importNode(template.content, true);

  const target2 = document.querySelector(`#${target}`);

  const label = clone.querySelector(".label");
  label.textContent = labelTitle;

  const p = clone.querySelector(".legend");
  if (target !== "genders") {
    p.className = `legend-` + itération;
  } else {
    clone.removeChild(p);
  }

  const select = clone.querySelector("#list-template-id");
  select.id = `list-template-` + itération;
  select.value = `list-template-` + itération;
  let nbItems = choiceListe.length;
  let i = 0;

  for (i; i < nbItems; i++) {
    let option = document.createElement("option");
    option.text = choiceListe[i];
    option.className = "list-template-" + itération + "-option";
    select.add(option);
  }

  target2.appendChild(clone);
};

export const generateCarac = (target, carac) => {
  const template = document.querySelector("#carac-template");
  const clone = document.importNode(template.content, true);

  const target2 = document.querySelector(`#${target}`);

  const label = clone.querySelector(".label");
  label.textContent = labelTitle;

  const p = clone.querySelector(".legend");
  p.className = `legend-` + itération;

  const select = clone.querySelector("#list-template-id");
  select.id = `list-template-` + itération;
  select.value = `list-template-` + itération;
  let nbItems = choiceListe.length;
  let i = 0;

  for (i; i < nbItems; i++) {
    let option = document.createElement("option");
    option.text = choiceListe[i];
    option.className = "list-template-" + itération + "-option";
    select.add(option);
  }

  target2.appendChild(clone);
};
