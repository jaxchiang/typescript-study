/**
 * 类的继承。
 */
class Person{
	protected name:string;
	constructor(name:string){
		this.name = name;
	}
}

class Emplyee extends Person{
	private department:string;
	constructor(name:string,department:string){
		super(name)
		this.department=department;
	}
	public getElevatorPitch(){
		return `Hello, my name is ${this.name} and i work in ${this.department}`;
	}
}

let howard = new Emplyee('howard','sales');
console.log(howard.getElevatorPitch());//即使person类中的name是私有属性，但是因为其实protected，所以我们可以通过实例访问的到。
									  //但是，如果我们直接输出howard.name是不行的，因为其毕竟是私有属性。

class Animal{
	public name:string;
	public constructor(theName:string){
		this.name = theName;
	}
	public move(distanceInMeters: number = 0){
        console.log(`${this.name} moved ${distanceInMeters}m.`);
	}
}

class Snake extends Animal{
	constructor(name:string){
		super(name);
	}
	move(distanceInMeters = 5){
		console.log('Slithering...');
		super.move(distanceInMeters);
	}
}

class Horse extends Animal{
	constructor (name:string){
		super(name);
	}
	move(distanceInMeters = 45){
		console.log(distanceInMeters);
	}
}

let snake = new Snake('Shinubi');
let tom : Animal = new Horse('Tommy');

snake.move();
tom.move(34);

/**
 * 这是一个简化的例子，我们把参数直接放到构造函数的参数里面。这样可以直接增加一个name成员。
 * 并且他是私有的。
 */
class People{
	constructor(private name:string){}
	move(distanceInMeters:number){
		console.log(`${this.name}`);
	}
}
