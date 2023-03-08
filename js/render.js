import { generateItem } from "./template.js";
import { jobsList, tribeList, sex } from "./listes.js";

generateItem("jobs", jobsList, "Choisisez votre classe");

generateItem("tribes", tribeList, "Choisisez votre peuple");

generateItem("genders", sex, "Choisisez votre genre");
