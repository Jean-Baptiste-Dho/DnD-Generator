/**
 *
 * @param {string} target target div / using queryselector
 * @param {string} choiceListe exported content list (cf render.js)
 * @param {string} labelTitle label name / using queryselector
 * @param {int} itération template iteration
 */
export const generateList = (target, choiceListe, labelTitle, itération) => {
  const template = document.querySelector("#listTemplate");
  const clone = document.importNode(template.content, true);
  const label = clone.querySelector(".label");
  const select = clone.querySelector("#listTemplateId");
  const img = clone.querySelector("#imgList");
  const div = clone.querySelector("#divSelect");
  const targetDiv = document.querySelector(`#${target}`);
  let nbItems = choiceListe.length;
  let i = 0;
  const p = clone.querySelector(".legend");

  img.id = `targetImgList` + itération;

  label.textContent = labelTitle;
  select.id = `listTemplate` + itération;
  select.value = `listTemplate` + itération;
  div.id = `divSelect-` + itération;

  for (i; i < nbItems; i++) {
    let option = document.createElement("option");
    option.text = choiceListe[i];
    option.className = "listTemplate" + itération + "Option";
    select.add(option);
  }

  if (target !== "genders") {
    p.id = `legend` + itération;
    img.className = "imgList";
  } else {
    clone.removeChild(p);
    clone.removeChild(img);
  }

  targetDiv.appendChild(clone);
};

/**
 *
 * @param {string} target targeted div / using queryselector
 * @param {string} carac chosen skill (cf render.js)
 */
export const generateCarac = (target, carac) => {
  if (target != "Chc" || carac != "Chc") {
    const template = document.querySelector("#caracTemplate");
    const clone = document.importNode(template.content, true);

    const targetDiv = document.querySelector(`#${target}`);

    const label = clone.querySelector(".label");
    label.for = carac;
    label.textContent = carac;

    const span1 = clone.querySelector("#classText");
    span1.id = "classText" + carac;

    const span2 = clone.querySelector("#tribText");
    span2.id = "tribText" + carac;

    const span3 = clone.querySelector("#classVal");
    span3.id = "classVal" + carac;

    const span4 = clone.querySelector("#tribVal");
    span4.id = "tribVal" + carac;

    const input = clone.querySelector("#value");
    input.id = "value" + carac;
    input.name = carac;

    const span5 = clone.querySelector("#maxAvailablePt");
    span5.id = "maxAvailablePt" + carac;

    targetDiv.appendChild(clone);
  } else {
    const template = document.querySelector("#caracTemplate");
    const clone = document.importNode(template.content, true);

    const targetDiv = document.querySelector(`#${target}`);

    const label = clone.querySelector(".label");
    label.for = carac;
    label.textContent = carac + "(auto-gen)";

    const span1 = clone.querySelector("#classText");
    span1.id = "classText" + carac;

    const span2 = clone.querySelector("#tribText");
    span2.id = "tribText" + carac;

    const span3 = clone.querySelector("#classVal");
    span3.id = "classVal" + carac;

    const span4 = clone.querySelector("#tribVal");
    span4.id = "tribVal" + carac;

    const div = clone.querySelector("#divTemplate");
    clone.removeChild(div);

    targetDiv.appendChild(clone);
  }
};
/**
 *
 * @param {string} target list targeted divs / using querySelector
 * @param {string} carac exported skills list (cf render.js)
 */
export const generateTemplateCarac = (target, carac) => {
  for (let i = 0; i < target.length; i++) {
    generateCarac(target[i], carac[i]);
  }
};
