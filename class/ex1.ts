class Greeter{
	greeting:string;
	constructor(message:string){
		this.greeting = message;
	}
	greet(){
		return 'hello' + this.greeting;
	}
}

let greeter = new Greeter('world');
let loginfo = greeter.greet();
console.log(loginfo);