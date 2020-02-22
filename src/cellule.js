"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cellule {
    constructor(vivante, positionX, positionY) {
        this.vivante = vivante;
        this.positionX = positionX;
        this.positionY = positionY;
    }
    mettreAJourVivacite(cellulesVoisines) {
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
exports.Cellule = Cellule;
