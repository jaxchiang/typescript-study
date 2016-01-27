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
var passCode = 'secret passcode';
var Employee = (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullname", {
        get: function () {
            return this._fullName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "fullName", {
        set: function (newName) {
            if (passCode && passCode == 'secret passcode') {
                this._fullName = newName;
            }
            else {
                console.log('Error:屌丝密码都不知道就想改属性');
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
})();
var employee = new Employee;
employee.fullname = 'Bob Smith';
if (employee.fullname) {
    console.log(employee.fullname);
}
