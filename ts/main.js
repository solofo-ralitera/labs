var StdOutput = /** @class */ (function () {
    function StdOutput() {
    }
    StdOutput.prototype.ecrire = function (text) {
        console.log('Standard output: ', text);
    };
    return StdOutput;
}());
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.ecrireStdOutput = function (text) {
        var output = new StdOutput();
        output.ecrire(text);
    };
    return Person;
}());
var moi = new Person();
moi.ecrireStdOutput('Hello');
