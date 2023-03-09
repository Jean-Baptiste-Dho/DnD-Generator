import { generateItem } from "./template.js";
import { jobsList, tribeList, sex } from "./listes.js";

generateItem("jobs", jobsList, "Choisisez votre classe", 1);

generateItem("tribes", tribeList, "Choisisez votre peuple", 2);

generateItem("genders", sex, "Choisisez votre genre", 3);
