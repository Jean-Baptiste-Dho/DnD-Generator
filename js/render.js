import { generateList, generateTemplateCarac } from "./template.js";

import { jobsList, tribeList, sex, skills } from "./variables.js";

generateList("jobs", jobsList, "Choisisez votre classe", 1);

generateList("tribes", tribeList, "Choisisez votre peuple", 2);

generateList("genders", sex, "Choisisez votre genre", 3);

generateTemplateCarac(skills, skills);
