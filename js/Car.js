export class Car {
    constructor(pavadinimas, modelis, spalva, kuroBakoTalpa, vidutinesKuroSanaudos) {
        this.pavadinimas = pavadinimas;
        this.modelis = modelis;
        this.spalva = spalva;
        this.kuroBakoTalpa = kuroBakoTalpa;
        this.vidutinesKuroSanaudos = vidutinesKuroSanaudos;
        this.arIjungtasVariklis = false;
        this.greitis = 0;
        this.kuroLikutis = kuroBakoTalpa;
    }

    variklioUzvedimas() {
        if (this.arIjungtasVariklis === false) {
            this.arIjungtasVariklis = true;
            return `Variklis uzvestas, galite vaziuoti.`;
        } else if (this.arIjungtasVariklis === true) {
            return `Variklis uzvestas, uzvesto variklio dar karta uzvesti negalite, bus sugadintas starteris ir prireiks remonto❗❗❗ 🔧`;
        }
    }


    variklioIsjungimas() {
        if (this.greitis > 0) {
            return `Pirmiausia sustokite ir tik tada isjunkite varikli❗❗❗`;
        }

        if (this.arIjungtasVariklis === true && this.greitis === 0) {
            this.arIjungtasVariklis = false;
            return `Variklis isjungtas.`;
        } else if (this.arIjungtasVariklis === false) {
            return `Variklis isjungtas, isjungto variklio dar karta isjungti negalite❗❗❗`;
        }
    }

    pradejimasVaziuoti(km) {
        this.arIjungtasVariklis = true;
        if (this.arIjungtasVariklis !== true) {
            return `Variklis neuzvestas, pries pradedami vaziuoti uzveskite varikli.`;
        } else if (this.kuroLikutis === 0) {
            return `Automobilis negali vaziuoti nes nera kuro bake`;
        } else if (this.greitis > 0) {
            return `Automobilis pradejo vaziuoti`;
        } else {
            this.greitis = 70;
            this.kuroLikutis = (this.kuroLikutis - ((2 * this.vidutinesKuroSanaudos * km) / 100));
            return `Automobilis isibegejo ir sunaudojo ${((2 * this.vidutinesKuroSanaudos * km) / 100)} litrus degalu, bake liko ${this.kuroLikutis} litrai degalu.`;
        }
    }

    vaziavimas(km) {
        if (this.kuroLikutis < ((this.vidutinesKuroSanaudos * km) / 100)) {
            return `Nepakanka kuro, reikalingas kuro papildymas`;
        } else {
            this.greitis = 90;
            this.kuroLikutis = this.kuroLikutis - ((this.vidutinesKuroSanaudos * km) / 100);
            return `Automobilis nuvaziavo ${km} kilometru atstuma ir sunaudojo ${((2 * this.vidutinesKuroSanaudos * km) / 100)} litrus degalu, bake liko ${this.kuroLikutis = this.kuroLikutis - ((this.vidutinesKuroSanaudos * km) / 100)} litrai degalu.`;
        }
    }

    sustojimas() {
        if (this.greitis === 0) {
            return `Automobilis sustojo`;
        }
        this.greitis === 0;
        return `Automobilis sustojo ir stovi vietoje.`;
    }

    likesKuroKiekis() {
        return `Automobilio bake liko ${this.kuroLikutis} litru kuro.`;
    }

    kuroBakoUzpilimas(litrai) {
        // this.greitis = 0;
        // this.arIjungtasVariklis === false;
        if (this.greitis !== 0 && this.arIjungtasVariklis === true) {
            return `Pilti kura draudziama i vaziuojanti ir su uzkurtu varikliu automobili. Prasome sustoti ir isjungti varikli.`;
        }

        if (this.kuroBakoTalpa === this.likesKuroKiekis) {
            return `Automobilio kuro bakas pilnas, yra ${this.kuroBakoTalpa} litrai kuro. `;
        }
        if (litrai >= (this.kuroBakoTalpa - this.kuroLikutis)) {
            return `I automobilio baka buvo uzpilta ${this.kuroBakoTalpa - this.kuroLikutis}.`;
        }
        if (litrai < (this.kuroBakoTalpa - this.kuroLikutis)) {
            return `I automobilio baka buvo uzpilta ${litrai} litru kuro.`;
        }
    }
}

