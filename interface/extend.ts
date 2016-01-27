interface Shape{
	color:string;
}

interface Square extends Shape{
	sideLength:number;
}

let square = <Square>{};

square.color = 'red';
square.sideLength = 10;