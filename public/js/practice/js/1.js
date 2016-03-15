var person=["raj","ravi","som","srini"];
function f(){
	return Array.from(arguments);
}

f(1,2,3);

Array.from([1,2,4],x => x+x);

var filtered=[1,2,4,"dasd",{name:"rja"}].filter(isBigEnough)

function isBigEnough(value){
	return value >=10;
}