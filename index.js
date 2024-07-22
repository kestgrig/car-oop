import { Car } from "./js/Car.js";

const bulka = new Car('Audi', 80, 'juoda', '68', '7.4');
console.log(bulka);
console.log(bulka.pavadinimas);
console.log(bulka.modelis);
console.log(bulka.spalva);
console.log(bulka.kuroBakoTalpa);
console.log(bulka.vidutinesKuroSanaudos);
console.log(bulka.arIjungtasVariklis);
console.log(bulka.greitis);


console.log(bulka.variklioUzvedimas());
console.log(bulka.variklioUzvedimas());


console.log(bulka.variklioIsjungimas());
console.log(bulka.variklioIsjungimas());

console.log(bulka.pradejimasVaziuoti(5));

console.log(bulka.vaziavimas(380));

console.log(bulka.sustojimas());

console.log(bulka.likesKuroKiekis());

console.log(bulka.kuroBakoUzpilimas(10));
console.log(bulka.kuroBakoUzpilimas(56.98));
