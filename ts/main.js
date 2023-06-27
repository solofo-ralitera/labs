/**
 * Exo1: un personne peut ecrire sur un support (standard output, fichier, bdd, tableau, cahier...)
 *
 * Etape 2:
 *  une classs par type de support
 * Contrainte:
 *  - si nouveau support, il faut rajouter la méthode d'ecriture correspondants à ce support
 *  - on a une dépendance de chaque support dans Person (ligne 27 et 32) + new à chaque ecriture
 *
 * Evolution: traiter cette dépendance et minimiser les modifications à faire à chaque rajout de support
 */
var StdOutput = /** @class */ (function () {
    function StdOutput() {
    }
    StdOutput.prototype.log = function (text) {
        console.log('Standard output: ', text);
    };
    return StdOutput;
}());
var Fichier = /** @class */ (function () {
    function Fichier() {
    }
    Fichier.prototype.ecrire = function (text) {
        console.log('Fichier ecrire: ', text);
    };
    return Fichier;
}());
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.ecrire = function (text, support) {
        if (support instanceof StdOutput) {
            support.log(text);
        }
        else if (support instanceof Fichier) {
            support.ecrire(text);
        }
    };
    return Person;
}());
var stdOutput = new StdOutput();
var fichier = new Fichier();
var moi = new Person();
moi.ecrire('Hello', stdOutput);
moi.ecrire('Hello', fichier);
