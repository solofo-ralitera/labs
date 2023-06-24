var StdOutput = /** @class */ (function () {
    function StdOutput() {
    }
    StdOutput.prototype.write = function (text) {
        console.log('Stdout write', text);
    };
    return StdOutput;
}());
var FileOutput = /** @class */ (function () {
    function FileOutput() {
    }
    FileOutput.prototype.write = function (text) {
        console.log('File write', text);
    };
    FileOutput.prototype.delete = function (text) {
        console.log('text deleted', text);
    };
    return FileOutput;
}());
var CdOutput = /** @class */ (function () {
    function CdOutput() {
    }
    CdOutput.prototype.write = function (text) {
        console.log('Cd burn', text);
    };
    return CdOutput;
}());
var TableauOutput = /** @class */ (function () {
    function TableauOutput() {
    }
    TableauOutput.prototype.write = function (text) {
        console.log('Tableau', text);
    };
    TableauOutput.prototype.delete = function (text) {
        console.log('delete text', text);
    };
    return TableauOutput;
}());
var BddOutput = /** @class */ (function () {
    function BddOutput() {
    }
    BddOutput.prototype.write = function (text) {
        console.log('Bdd', text);
    };
    BddOutput.prototype.delete = function (text) {
        console.log('delete text', text);
    };
    return BddOutput;
}());
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.ecrire = function (text, support) {
        support.write(text);
    };
    Person.prototype.delete = function (text, support) {
        support.delete(text);
    };
    return Person;
}());
var stdOut = new StdOutput();
var fileOut = new FileOutput();
var cdOut = new CdOutput();
var tableauOut = new TableauOutput();
var bddOut = new BddOutput();
var person = new Person();
person.ecrire('hello', stdOut);
person.ecrire('hello', fileOut);
person.ecrire('hello', cdOut);
person.ecrire('hello', tableauOut);
person.ecrire('hello', bddOut);
person.delete('hello', fileOut);
person.delete('hello', tableauOut);
person.delete('hello', bddOut);
