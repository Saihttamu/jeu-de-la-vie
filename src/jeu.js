"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cellule_1 = require("./cellule");
exports.tailleJeuX = 24;
exports.tailleJeuY = 24;
class Jeu {
    constructor() {
        this.tour = 0;
        this.cellules = [];
    }
    genererLaGrille() {
        for (let y = 0; y < exports.tailleJeuY; y++) {
            if (this.cellules[y] == undefined) {
                this.cellules[y] = [];
            }
            for (let x = 0; x < exports.tailleJeuX; x++) {
                this.cellules[y][x] = new cellule_1.Cellule(Math.random() < 0.05, x, y);
            }
        }
    }
    calculerLeTourSuivant() {
        this.tour++;
        let cellulesMAJ = [];
        for (let y = 0; y < exports.tailleJeuY; y++) {
            if (cellulesMAJ[y] == undefined) {
                cellulesMAJ[y] = [];
            }
            for (let x = 0; x < exports.tailleJeuX; x++) {
                let celluleACopier = this.cellules[y][x];
                cellulesMAJ[y][x] = new cellule_1.Cellule(celluleACopier.vivante, celluleACopier.positionX, celluleACopier.positionY);
                cellulesMAJ[y][x].mettreAJourVivacite(this.recupererCellulesVoisines(this.cellules[y][x]));
            }
        }
        this.cellules = cellulesMAJ;
    }
    recupererCellulesVoisines(cellule) {
        let cellulesVoisines = [];
        if (cellule.positionX > 0) {
            if (cellule.positionY > 0) {
                cellulesVoisines.push(this.cellules[cellule.positionY - 1][cellule.positionX - 1]);
            }
            cellulesVoisines.push(this.cellules[cellule.positionY][cellule.positionX - 1]);
            if (cellule.positionY < exports.tailleJeuY - 1) {
                cellulesVoisines.push(this.cellules[cellule.positionY + 1][cellule.positionX - 1]);
            }
        }
        if (cellule.positionY > 0) {
            cellulesVoisines.push(this.cellules[cellule.positionY - 1][cellule.positionX]);
        }
        if (cellule.positionY < exports.tailleJeuY - 1) {
            cellulesVoisines.push(this.cellules[cellule.positionY + 1][cellule.positionX]);
        }
        if (cellule.positionX < exports.tailleJeuX - 1) {
            if (cellule.positionY > 0) {
                cellulesVoisines.push(this.cellules[cellule.positionY - 1][cellule.positionX + 1]);
            }
            cellulesVoisines.push(this.cellules[cellule.positionY][cellule.positionX + 1]);
            if (cellule.positionY < exports.tailleJeuY - 1) {
                cellulesVoisines.push(this.cellules[cellule.positionY + 1][cellule.positionX + 1]);
            }
        }
        return cellulesVoisines;
    }
    afficher() {
        console.log(`tour ${this.tour}\n`);
        let affichage = "";
        for (let y = 0; y < exports.tailleJeuY; y++) {
            let ligne = "";
            for (let x = 0; x < exports.tailleJeuX; x++) {
                ligne += this.cellules[x][y].vivante ? "X" : " ";
            }
            affichage += ligne + '\n';
        }
        console.log(affichage);
    }
}
exports.Jeu = Jeu;
