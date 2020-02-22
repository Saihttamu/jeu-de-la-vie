import { tailleJeuX, tailleJeuY, Jeu } from "./jeu";

export class Cellule {
    vivante: boolean;
    positionX: number;
    positionY: number;

    constructor(
        vivante: boolean,
        positionX: number,
        positionY: number,
    ) {
        this.vivante = vivante;
        this.positionX = positionX;
        this.positionY = positionY;
    }

    mettreAJourVivacite(cellulesVoisines: Cellule[]) {
        let nbCellulesVoisinesVivantes = 0;

        cellulesVoisines.forEach(celluleVoisine => {
            if (celluleVoisine.vivante) {
                nbCellulesVoisinesVivantes++;
            }
        });

        let vivanteEtLeReste = this.vivante && (nbCellulesVoisinesVivantes > 1 && nbCellulesVoisinesVivantes < 4);
        let morteEtDevientVivante = !this.vivante && nbCellulesVoisinesVivantes == 3;

        this.vivante = vivanteEtLeReste || morteEtDevientVivante;
    }
}