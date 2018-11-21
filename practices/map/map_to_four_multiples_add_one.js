'use strict';
var map_to_four_multiples_add_one = function(collection){
  return collection.map(times4plus1);
};

function times4plus1(num){
	return num*4+1;
}

module.exports = map_to_four_multiples_add_one;
