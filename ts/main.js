/**
 * Exo1: un personne peut ecrire sur un support (standard output, fichier, bdd, tableau, cahier...)
 *
 * Etape 7:
 *  Création de deux interface Writable et Deletable à la plasse de Support
 *  Composition par implements des types de support
*/
var StdOutput = /** @class */ (function () {
    function StdOutput() {
    }
    StdOutput.prototype.ecrire = function (text) {
        console.log('Standard output: ', text);
    };
    StdOutput.prototype.delete = function () {
        console.log('Standard output delete');
    };
    return StdOutput;
}());
var Fichier = /** @class */ (function () {
    function Fichier() {
    }
    Fichier.prototype.ecrire = function (text) {
        console.log('Fichier ecrire: ', text);
    };
    Fichier.prototype.delete = function () {
        console.log('Fichier delete');
    };
    return Fichier;
}());
var Cd = /** @class */ (function () {
    function Cd() {
    }
    Cd.prototype.ecrire = function (text) {
        console.log('CD ecrire: ', text);
    };
    return Cd;
}());
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.ecrire = function (text, support) {
        support.ecrire(text);
    };
    Person.prototype.delete = function (support) {
        support.delete();
    };
    Person.prototype.write = function (support, text) {
        return '';
    };
    Person.prototype.hello = function (obj) {
        console.log(obj);
    };
    return Person;
}());
/*
const stdOutput = new StdOutput();
const fichier = new Fichier();
const cd = new Cd();
*/
var moi = new Person();
var obj = {
    id: 1,
    name: 'Hllo',
    desc: 'qqq',
};
moi.hello(obj);
