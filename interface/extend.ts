/**
 * 类的扩展。
 */
interface Shape{
	color:string;
}

interface PenStroke{
	penDidth:number;
}

interface Square extends Shape,PenStroke{
	sideLength:number;
}

let square = <Square>{};

square.color = 'red';
square.sideLength = 10;
square.penDidth = 20;