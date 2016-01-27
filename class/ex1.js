var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'hello' + this.greeting;
    };
    return Greeter;
})();
var greeter = new Greeter('world');
var loginfo = greeter.greet();
console.log(loginfo);
