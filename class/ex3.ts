/**
 * Typescript支持使用getter和setter来访问类。
 */
/* 

class Employee{
	fullname : string;
}

let employee = new Employee();

employee.fullname='Bob Smith';
if(employee.fullname){
	console.log(employee.fullname);
}

*/

let passCode = 'secret passcode';

class Employee {
	private _fullName:string;

	get fullname():string{
		return this._fullName;
	}

	set fullName(newName:string){
		if (passCode && passCode == 'secret passcode'){
			this._fullName = newName;
		}
		else{
			console.log('Error:屌丝密码都不知道就想改属性');
		}
	}
}

let employee = new Employee;
employee.fullname = 'Bob Smith';
if(employee.fullname){
	console.log(employee.fullname);
}
