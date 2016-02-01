interface Padder{
	getPaddingString():string;
}

class SpaceRepeatingPadder implements Padder{
	constructor(private numSpaces:number){}
	getPaddingString(){
		return Array(this.numSpaces).join('');
	}
}

class StringPadder implements Padder{
	constructor(private value :string){}
	getPaddingString(){
		return this.value;
	}
}

function padLeft(value:string,padder:Padder){
	return padder.getPaddingString() + value;
}

console.log(padLeft('Hello World',new StringPadder('this is a')));