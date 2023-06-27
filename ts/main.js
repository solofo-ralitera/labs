/**
 * Exo1: un personne peut ecrire sur un support (standard output, fichier, bdd, tableau, cahier...)
 *
 * Etape 6:
 *  Implémentation de la methode delete
 *
 * Contrainte:
 *  Chaque support doit implémenter
 * Evolution: Possibilité d'effacer un support
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Support = /** @class */ (function () {
    function Support() {
    }
    return Support;
}());
var StdOutput = /** @class */ (function (_super) {
    __extends(StdOutput, _super);
    function StdOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StdOutput.prototype.ecrire = function (text) {
        console.log('Standard output: ', text);
    };
    StdOutput.prototype.delete = function () {
        console.log('Standard output delete');
    };
    return StdOutput;
}(Support));
var Fichier = /** @class */ (function (_super) {
    __extends(Fichier, _super);
    function Fichier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fichier.prototype.ecrire = function (text) {
        console.log('Fichier ecrire: ', text);
    };
    Fichier.prototype.delete = function () {
        console.log('Fichier delete');
    };
    return Fichier;
}(Support));
var Cd = /** @class */ (function (_super) {
    __extends(Cd, _super);
    function Cd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cd.prototype.ecrire = function (text) {
        console.log('CD ecrire: ', text);
    };
    Cd.prototype.delete = function () {
        throw new Error('CD cannot be erased');
    };
    return Cd;
}(Support));
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.ecrire = function (text, support) {
        support.ecrire(text);
    };
    Person.prototype.delete = function (support) {
        support.delete();
    };
    return Person;
}());
var stdOutput = new StdOutput();
var fichier = new Fichier();
var cd = new Cd();
var moi = new Person();
moi.ecrire('Hello', stdOutput);
moi.ecrire('Hello', fichier);
moi.ecrire('Hello', cd);
moi.delete(stdOutput);
moi.delete(fichier);
