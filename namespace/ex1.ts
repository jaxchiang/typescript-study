interface StringValidator{
	isAcceptable(s:string) : boolean;
}

let lettersRegexp = /^[A-Za-z]+$/;
let numberRegexp = /^[0-9]+$/;

class LettersOnlyValidator implements StringValidator{
	isAcceptable(s:string){
		return lettersRegexp.test(s);
	}
}

class ZipCodeValidator implements StringValidator {
	isAcceptable(s:string){
		return s.length === 5 && numberRegexp.test(s);
	}
}

//some samples to try

let strings = ['hello','98052','101'];
let validators: { [s: string]: StringValidator; } = {};

validators["ZIP code"] = new ZipCodeValidator();

validators["Letters only"] = new LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach(s => {
    for (let name in validators) {
        console.log("" " + s + "" " + (validators[name].isAcceptable(s) ? " matches " : " does not match ") + name);
    }
});