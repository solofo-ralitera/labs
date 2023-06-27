/**
 * Exo1: un personne peut ecrire sur un support (standard output, fichier, bdd, tableau, cahier...)
 *
 * Etape 1:
 *  - 2 classes:  Person et StdOutput
 * Evolution: rajouter un nouveau support pour ecrire
 */
var StdOutput = /** @class */ (function () {
    function StdOutput() {
    }
    StdOutput.prototype.ecrire = function (text) {
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
    Person.prototype.ecrireStdOutput = function (text) {
        var output = new StdOutput();
        output.ecrire(text);
    };
    Person.prototype.ecrireFichier = function (text) {
        var output = new Fichier();
        output.ecrire(text);
    };
    return Person;
}());
var moi = new Person();
moi.ecrireStdOutput('Hello');
moi.ecrireFichier('Hello');
