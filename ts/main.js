/**
 * Exo1: un personne peut ecrire sur un support (standard output, fichier, bdd, tableau, cahier...)
 *
 * Etape 3:
 *  unification des méthodes ecrire dans la classe personne
 *  suppr des new ...() dans Person
 *
 * Contrainte:
 *  - si nouveau support, on doit toujours modifier la méthode ecrire pour le nouveau support
 *
 * Evolution: minimiser les modifications à faire à chaque rajout de support
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
    Support.prototype.ecrire = function (text) {
    };
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
var moi = new Person();
moi.ecrire('Hello', stdOutput);
moi.ecrire('Hello', fichier);
