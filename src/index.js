"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jeu_1 = require("./jeu");
const execSync = require('child_process').execSync;
let jeu = new jeu_1.Jeu();
jeu.genererLaGrille();
while (true) {
    jeu.calculerLeTourSuivant();
    execSync('clear');
    jeu.afficher();
}
