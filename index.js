import { Car } from "./js/Car.js";

const bulka = new Car('Audi', 80, 'juoda', '68 litrai', '7.4 litrai/100 km');
console.log(bulka);
console.log(bulka.pavadinimas);
console.log(bulka.modelis);
console.log(bulka.spalva);
console.log(bulka.kuroBakoTalpa);
console.log(bulka.vidutinesKuroSanaudos);
console.log(bulka.arIjungtasVariklis);
console.log(bulka.greitis);


console.log(bulka.variklioIjungimas());
console.log(bulka.variklioIsjungimas());
console.log(bulka.pradejimasVaziuoti());
console.log(bulka.vaziavimas());
console.log(bulka.sustojimas());
console.log(bulka.likesKuroKiekis());
console.log(bulka.kuroBakoUzpilimas());

