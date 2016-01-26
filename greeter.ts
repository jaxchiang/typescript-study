interface LabelledValue {
	label:string;
	size:number;
	_id:number;
}


function printLabel (labelledObj:LabelledValue) {
	console.log(labelledObj.label);
}

let myObj = {size:10,label:'Dogod',_id:100};

printLabel(myObj);