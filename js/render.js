import { generateItem } from "./template.js";
import { jobsList, tribeList, sex } from "./listes.js";

generateItem("classe", jobsList, "Choisisez votre classe");

generateItem("tribe", tribeList, "Choisisez votre peuple");

generateItem("gender", sex, "Choisisez votre genre");
