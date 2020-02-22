import { Jeu } from "./jeu";

const execSync = require('child_process').execSync;

let jeu = new Jeu();
jeu.genererLaGrille();
while (true) {
    jeu.calculerLeTourSuivant();
    execSync('clear');
    jeu.afficher();
}
