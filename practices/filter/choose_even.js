'use strict';

function choose_even(collection) {

  var result = [];
  collection.forEach(function(element){
	  if(element % 2 === 0)
		  result.push(element);
  });
  return result;
}

module.exports = choose_even;
