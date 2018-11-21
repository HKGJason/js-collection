'use strict';


function map_to_even(collection){
	/*
	for (let index = 0 ; index< collection.length;index++){
		collection[index] = timesTwo(collection[index]);
	}
	*/
	return collection.map(timesTwo);
	
}
function timesTwo(num){
	return num*2;
}


module.exports = map_to_even;
