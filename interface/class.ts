/**
 * 类的接口
 */
interface ClockInterface{
	currentTime:Date;
	setTime(d:Date);
}

class Clock implements ClockInterface{
	currentTime:Date;
	setTime(d:Date){
		this.currentTime = d;
	}
	constructor(h:number,m:number){

	}
}