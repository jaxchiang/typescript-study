function isNumber(x:any):x is number{
	return typeof x === 'number';
}

function isString(x:any):x is string{
	return typeof x === 'string';
}

function padLeft(value:string,padding:string | number){
	if(isNumber(padding)){
		return Array(padding).join('')+value;
	};
	if(isString(padding)){
		return padding+value;
	};
	throw new Error(`Expected string or number,got '${value}'.`)
}

let ex2 = padLeft('Hello World','this is a ');

console.log(ex2);