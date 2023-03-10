/**
 *
 * @param {string} target target div / using queryselector
 * @param {string} choiceListe exported content list (cf render.js)
 * @param {string} labelTitle label name / using queryselector
 * @param {int} itération template iteration
 */

export const generateList = (target, choiceListe, labelTitle, itération) => {
  const template = document.querySelector("#list-template");
  const clone = document.importNode(template.content, true);

  const targetDiv = document.querySelector(`#${target}`);

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

  targetDiv.appendChild(clone);
};

/**
 *
 * @param {string} target targeted div / using queryselector
 * @param {string} carac chosen skill (cf render.js)
 */
export const generateCarac = (target, carac) => {
  if (target != "Chc" || carac != "Chc") {
    const template = document.querySelector("#carac-template");
    const clone = document.importNode(template.content, true);

    const targetDiv = document.querySelector(`#${target}`);

    const label = clone.querySelector(".label");
    label.for = carac;
    label.textContent = carac;

    const span1 = clone.querySelector("#classText");
    span1.id = "classText" + carac;

    const span2 = clone.querySelector("#tribText");
    span2.id = "tribText" + carac;

    const span3 = clone.querySelector("#valClass");
    span3.id = "classVal" + carac;

    const span4 = clone.querySelector("#valTrib");
    span4.id = "tribVal" + carac;

    const input = clone.querySelector("#value");
    input.id = "value" + carac;
    input.name = carac;

    const span5 = clone.querySelector("#maxAvailablePt");
    span5.id = "maxAvailablePt" + carac;

    targetDiv.appendChild(clone);
  } else {
    const template = document.querySelector("#carac-template");
    const clone = document.importNode(template.content, true);

    const targetDiv = document.querySelector(`#${target}`);

    const label = clone.querySelector(".label");
    label.for = carac;
    label.textContent = carac + "(auto-gen)";

    const span1 = clone.querySelector("#classText");
    span1.id = "classText" + carac;

    const span2 = clone.querySelector("#tribText");
    span2.id = "tribText" + carac;

    const span3 = clone.querySelector("#valClass");
    span3.id = "classVal" + carac;

    const span4 = clone.querySelector("#valTrib");
    span4.id = "tribVal" + carac;

    const div = clone.querySelector("#div-template");
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
