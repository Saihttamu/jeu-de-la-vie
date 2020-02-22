import { tailleJeuX, tailleJeuY, Jeu } from "./jeu";

export class Cellule {
    vivante: boolean;
    positionX:number;
    positionY:number;

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

        this.vivante =
            (this.vivante && (nbCellulesVoisinesVivantes > 1 || nbCellulesVoisinesVivantes < 4))
            || (!this.vivante && nbCellulesVoisinesVivantes == 3);
    }
}