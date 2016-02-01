var SpaceRepeatingPadder = (function () {
    function SpaceRepeatingPadder(numSpaces) {
        this.numSpaces = numSpaces;
    }
    SpaceRepeatingPadder.prototype.getPaddingString = function () {
        return Array(this.numSpaces).join('');
    };
    return SpaceRepeatingPadder;
})();
var StringPadder = (function () {
    function StringPadder(value) {
        this.value = value;
    }
    StringPadder.prototype.getPaddingString = function () {
        return this.value;
    };
    return StringPadder;
})();
function padLeft(value, padder) {
    return padder.getPaddingString() + value;
}
console.log(padLeft('Hello World', new StringPadder('this is a')));
