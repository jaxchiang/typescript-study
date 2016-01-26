interface SearchFunc{
	(source:string,subString:string):boolean;
}

let mySearch:SearchFunc;
mySearch = function(sor:string,subS:string){
	let result = sor.search(subS);
	if (result==1){
		return true;
	}else{
		return false;
	}
}
