import { generateList, generateTemplateCarac } from "./template.js";

import { jobsList, tribeList, sex, skills } from "./variables.js";

generateList("jobs", jobsList, "Choose your class", 1);

generateList("tribes", tribeList, "Choose your tribe", 2);

generateList("genders", sex, "Choose your gender", 3);

generateTemplateCarac(skills, skills);
