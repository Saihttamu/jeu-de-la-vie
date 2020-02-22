import { Cellule } from "./cellule";

export const tailleJeuX: number = 24;
export const tailleJeuY: number = 24;

export class Jeu {
    tour: number = 0;
    cellules: Cellule[][] = [];

    genererLaGrille() {
        for (let y = 0; y < tailleJeuY; y++) {
            if (this.cellules[y] == undefined) {
                this.cellules[y] = [];
            }
            for (let x = 0; x < tailleJeuX; x++) {
                this.cellules[y][x] = new Cellule(Math.random() < 0.05, x, y);
            }
        }
    }

    calculerLeTourSuivant() {
        this.tour++;

        let cellulesMAJ: Cellule[][] = [];

        for (let y = 0; y < tailleJeuY; y++) {
            if (cellulesMAJ[y] == undefined) {
                cellulesMAJ[y] = [];
            }
            for (let x = 0; x < tailleJeuX; x++) {
                let celluleACopier = this.cellules[y][x];
                cellulesMAJ[y][x] = new Cellule(celluleACopier.vivante, celluleACopier.positionX, celluleACopier.positionY);
                cellulesMAJ[y][x].mettreAJourVivacite(this.recupererCellulesVoisines(this.cellules[y][x]));
            }
        }

        this.cellules = cellulesMAJ;
    }

    recupererCellulesVoisines(cellule: Cellule): Cellule[] {

        let cellulesVoisines: Cellule[] = [];

        if (cellule.positionX > 0) {
            if (cellule.positionY > 0) {
                cellulesVoisines.push(this.cellules[cellule.positionY - 1][cellule.positionX - 1]);
            }
            cellulesVoisines.push(this.cellules[cellule.positionY][cellule.positionX - 1]);
            if (cellule.positionY < tailleJeuY - 1) {
                cellulesVoisines.push(this.cellules[cellule.positionY + 1][cellule.positionX - 1]);
            }
        }

        if (cellule.positionY > 0) {
            cellulesVoisines.push(this.cellules[cellule.positionY - 1][cellule.positionX]);
        }
        if (cellule.positionY < tailleJeuY - 1) {
            cellulesVoisines.push(this.cellules[cellule.positionY + 1][cellule.positionX]);
        }

        if (cellule.positionX < tailleJeuX - 1) {
            if (cellule.positionY > 0) {
                cellulesVoisines.push(this.cellules[cellule.positionY - 1][cellule.positionX + 1]);
            }
            cellulesVoisines.push(this.cellules[cellule.positionY][cellule.positionX + 1]);
            if (cellule.positionY < tailleJeuY - 1) {
                cellulesVoisines.push(this.cellules[cellule.positionY + 1][cellule.positionX + 1]);
            }
        }

        return cellulesVoisines;
    }
    
    afficher() {
        console.log(`tour ${this.tour}\n`);
        let affichage: string = "";

        for (let y = 0; y < tailleJeuY; y++) {
            let ligne = "";
            for (let x = 0; x < tailleJeuX; x++) {
                ligne += this.cellules[x][y].vivante ? "X" : " ";
            }
            affichage += ligne + '\n';
        }

        console.log(affichage);
    }
}