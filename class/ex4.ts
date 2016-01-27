class Greeter{
	greeting:string;
	constructor(messag:string){
		this.greeting = messag;
	}
	greet(){
		return 'hello' + this.greeting; 
	}
}

// let greeter:Greeter;
let greeter= new Greeter('hello world');
console.log(greeter.greet());