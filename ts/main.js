/**
 * Exo1: un personne peut ecrire sur un support (standard output, fichier, bdd, tableau, cahier...)
 *
 * Etape 4:
 *  Création d'une lcass mère pour tous les support
 *  Plus besoin de modifier Person pour écrire sur un nouveau support
 *
 * Contrainte:
 *  - Chaque support n'est pas obligé d'implémenter la méthode écrire
 *
 * Evolution: forcer chaque support à implémenter ecrire
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
    return Cd;
}(Support));
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.ecrire = function (text, support) {
        support.ecrire(text);
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
